import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { 
  CreditCard, 
  Upload, 
  FileText, 
  CheckCircle, 
  Clock, 
  X,
  DollarSign,
  Smartphone
} from 'lucide-react';

const bankDetailsSchema = z.object({
  accountNumber: z.string().min(9, 'Account number must be at least 9 digits'),
  ifscCode: z.string().min(11, 'IFSC code must be 11 characters').max(11),
  accountHolderName: z.string().min(2, 'Account holder name is required'),
  upiId: z.string().optional(),
});

const payoutRequestSchema = z.object({
  amount: z.number().min(100, 'Minimum payout amount is ₹100'),
});

type BankDetailsFormData = z.infer<typeof bankDetailsSchema>;
type PayoutRequestFormData = z.infer<typeof payoutRequestSchema>;

interface BankDetails {
  id?: string;
  account_number: string;
  ifsc_code: string;
  account_holder_name: string;
  upi_id: string | null;
}

interface PayoutRequest {
  id: string;
  amount: number;
  status: 'pending' | 'approved' | 'rejected';
  request_date: string;
}

export const PayoutSection = () => {
  const { user, profile, updateProfile } = useAuth();
  const { toast } = useToast();
  const [isUpdatingBank, setIsUpdatingBank] = useState(false);
  const [isRequestingPayout, setIsRequestingPayout] = useState(false);
  const [bankDetails, setBankDetails] = useState<BankDetails | null>(null);
  const [payoutRequests, setPayoutRequests] = useState<PayoutRequest[]>([]);

  const bankForm = useForm<BankDetailsFormData>({
    resolver: zodResolver(bankDetailsSchema),
    defaultValues: {
      accountNumber: '',
      ifscCode: '',
      accountHolderName: '',
      upiId: '',
    },
  });

  const payoutForm = useForm<PayoutRequestFormData>({
    resolver: zodResolver(payoutRequestSchema),
    defaultValues: {
      amount: 0,
    },
  });

  const onBankDetailsSubmit = async (data: BankDetailsFormData) => {
    if (!profile) return;
    
    setIsUpdatingBank(true);
    
    try {
      const { error } = await supabase
        .from('bank_details')
        .upsert({
          profile_id: profile.id,
          account_number: data.accountNumber,
          ifsc_code: data.ifscCode,
          account_holder_name: data.accountHolderName,
          upi_id: data.upiId || null,
        });

      if (error) {
        throw error;
      }
      
      toast({
        title: 'Bank Details Updated',
        description: 'Your payment information has been saved successfully.',
      });
    } catch (error) {
      console.error('Error updating bank details:', error);
      toast({
        title: 'Error',
        description: 'Failed to update bank details. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsUpdatingBank(false);
    }
  };

  const onPayoutRequest = async (data: PayoutRequestFormData) => {
    if (!profile || !bankDetails) {
      toast({
        title: 'Bank Details Required',
        description: 'Please add your bank details before requesting a payout.',
        variant: 'destructive',
      });
      return;
    }

    if ((profile.earnings || 0) < data.amount) {
      toast({
        title: 'Insufficient Balance',
        description: 'You don\'t have enough earnings for this payout amount.',
        variant: 'destructive',
      });
      return;
    }

    setIsRequestingPayout(true);
    
    try {
      const { error } = await supabase
        .from('payout_requests')
        .insert({
          profile_id: profile.id,
          amount: data.amount,
        });

      if (error) {
        throw error;
      }

      // Update profile earnings
      await updateProfile({
        earnings: (profile.earnings || 0) - data.amount,
      });
      
      toast({
        title: 'Payout Request Submitted',
        description: 'Your payout request has been submitted for review.',
      });
      
      payoutForm.reset();
    } catch (error) {
      console.error('Error submitting payout request:', error);
      toast({
        title: 'Error',
        description: 'Failed to submit payout request. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsRequestingPayout(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="w-4 h-4 text-success" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-warning" />;
      case 'rejected':
        return <X className="w-4 h-4 text-destructive" />;
      default:
        return <Clock className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <Badge className="bg-success text-success-foreground">Approved</Badge>;
      case 'pending':
        return <Badge variant="outline" className="border-warning text-warning">Pending</Badge>;
      case 'rejected':
        return <Badge variant="destructive">Rejected</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  if (!profile) return null;

  return (
    <div className="space-y-6">
      {/* Available Balance */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-success" />
            Available Balance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center p-6 bg-muted/10 rounded-lg">
            <p className="text-3xl font-bold text-success mb-2">₹{profile.earnings || 0}</p>
            <p className="text-muted-foreground">Available for withdrawal</p>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="bank-details" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="bank-details">Bank Details</TabsTrigger>
          <TabsTrigger value="request-payout">Request Payout</TabsTrigger>
          <TabsTrigger value="history">Payout History</TabsTrigger>
        </TabsList>

        <TabsContent value="bank-details">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                Bank Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...bankForm}>
                <form onSubmit={bankForm.handleSubmit(onBankDetailsSubmit)} className="space-y-4">
                  <FormField
                    control={bankForm.control}
                    name="accountHolderName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Account Holder Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter account holder name"
                            {...field}
                            disabled={isUpdatingBank}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={bankForm.control}
                      name="accountNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Account Number</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter account number"
                              {...field}
                              disabled={isUpdatingBank}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={bankForm.control}
                      name="ifscCode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>IFSC Code</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter IFSC code"
                              {...field}
                              disabled={isUpdatingBank}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={bankForm.control}
                    name="upiId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>UPI ID (Optional)</FormLabel>
                        <FormControl>
                          <div className="flex items-center gap-2">
                            <Smartphone className="w-4 h-4 text-muted-foreground" />
                            <Input
                              placeholder="your-upi@paytm"
                              {...field}
                              disabled={isUpdatingBank}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-gradient-primary text-primary-foreground"
                    disabled={isUpdatingBank}
                  >
                    {isUpdatingBank ? 'Updating...' : 'Update Bank Details'}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="request-payout">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="w-5 h-5" />
                Request Payout
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...payoutForm}>
                <form onSubmit={payoutForm.handleSubmit(onPayoutRequest)} className="space-y-4">
                  <FormField
                    control={payoutForm.control}
                    name="amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Payout Amount (₹)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Enter amount to withdraw"
                            {...field}
                            onChange={(e) => field.onChange(Number(e.target.value))}
                            disabled={isRequestingPayout}
                          />
                        </FormControl>
                        <FormMessage />
                        <p className="text-xs text-muted-foreground">
                          Available balance: ₹{profile.earnings || 0}
                        </p>
                      </FormItem>
                    )}
                  />

                  <div className="p-4 bg-muted/10 rounded-lg border">
                    <h4 className="font-semibold text-foreground mb-2">Important Notes:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Minimum payout amount is ₹100</li>
                      <li>• Payouts are processed within 3-5 business days</li>
                      <li>• Ensure your bank details are correct before requesting</li>
                      <li>• You'll receive a confirmation once processed</li>
                    </ul>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-accent text-accent-foreground"
                    disabled={isRequestingPayout || !bankDetails}
                  >
                    {isRequestingPayout ? 'Submitting...' : 'Request Payout'}
                  </Button>

                  {!bankDetails && (
                    <p className="text-sm text-destructive text-center">
                      Please add your bank details first
                    </p>
                  )}
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Payout History
              </CardTitle>
            </CardHeader>
            <CardContent>
              {payoutRequests && payoutRequests.length > 0 ? (
                <div className="space-y-4">
                  {payoutRequests.map((request) => (
                    <div
                      key={request.id}
                      className="flex items-center justify-between p-4 bg-muted/10 rounded-lg border"
                    >
                      <div className="flex items-center gap-3">
                        {getStatusIcon(request.status)}
                        <div>
                          <p className="font-semibold text-foreground">₹{request.amount}</p>
                          <p className="text-sm text-muted-foreground">
                            Requested on {request.request_date}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        {getStatusBadge(request.status)}
                        <p className="text-xs text-muted-foreground mt-1">
                          ID: {request.id}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No payout requests yet</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Your payout history will appear here
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};