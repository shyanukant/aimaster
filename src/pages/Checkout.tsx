import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Loader2, CreditCard, QrCode, CheckCircle, Smartphone } from 'lucide-react';

const checkoutSchema = z.object({
  transactionId: z.string().min(6, 'Please enter a valid transaction ID'),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

const Checkout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { user, profile, updateProfile } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      transactionId: '',
    },
  });

  const onSubmit = async (data: CheckoutFormData) => {
    setIsLoading(true);
    
    try {
      // Simulate payment verification delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Update user profile with transaction details (set to verifying status)
      updateProfile({
        transaction_id: data.transactionId,
        verification_status: 'verifying',
        course_purchased: false, // Will be set to true by admin after verification
      });
      
      toast({
        title: 'Payment Verification Submitted',
        description: 'Your transaction is being verified. You will receive confirmation soon.',
      });
      
      navigate('/profile');
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Redirect if not student or already purchased
  if (!user || !profile || profile.user_type !== 'student') {
    navigate('/login');
    return null;
  }

  if (profile.course_purchased) {
    navigate('/profile');
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background p-4">
      <div className="container max-w-4xl mx-auto py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Complete Your Purchase</h1>
          <p className="text-muted-foreground">Follow the steps below to access the AI course</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Course Details */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-primary" />
                Course Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-muted/20 rounded-lg">
                <div>
                  <h3 className="font-semibold text-foreground">Complete AI Course</h3>
                  <p className="text-sm text-muted-foreground">Full access to all modules</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary">₹999</p>
                  <Badge variant="secondary">Limited Time</Badge>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="text-sm text-muted-foreground">Lifetime access to course content</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="text-sm text-muted-foreground">Certificate of completion</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="text-sm text-muted-foreground">24/7 support access</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="text-sm text-muted-foreground">WhatsApp community access</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Section */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <QrCode className="w-5 h-5 text-primary" />
                Payment Process
              </CardTitle>
              <CardDescription>
                Scan the QR code to make payment, then enter your transaction ID
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* QR Code Section */}
              <div className="text-center p-6 bg-muted/10 border-2 border-dashed border-border rounded-lg">
                <div className="w-48 h-48 mx-auto bg-muted/30 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <QrCode className="w-24 h-24 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Payment QR Code</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-foreground">Scan to Pay ₹999</p>
                  <div className="flex items-center justify-center gap-2">
                    <Smartphone className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Use any UPI app to scan and pay</span>
                  </div>
                </div>
              </div>

              {/* Transaction ID Form */}
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="transactionId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Transaction ID</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your transaction ID from payment app"
                            {...field}
                            disabled={isLoading}
                          />
                        </FormControl>
                        <FormMessage />
                        <p className="text-xs text-muted-foreground">
                          After scanning and paying, enter the transaction ID here
                        </p>
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Verifying Payment...
                      </>
                    ) : (
                      <>
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Submit for Verification
                      </>
                    )}
                  </Button>
                </form>
              </Form>

              <div className="text-center text-sm text-muted-foreground">
                <p>After submitting, you'll receive a confirmation notification</p>
                <p>once your payment is verified by our team.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Checkout;