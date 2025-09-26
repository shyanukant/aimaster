import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';
import { PayoutSection } from '@/components/PayoutSection';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { 
  GraduationCap, 
  User, 
  Mail, 
  Phone, 
  CreditCard, 
  CheckCircle, 
  Clock,
  LogOut,
  ArrowLeft,
  BookOpen,
  Share2,
  Copy,
  Users,
  DollarSign
} from 'lucide-react';

export const StudentProfile = () => {
  const { user, profile, logout } = useAuth();
  const { toast } = useToast();
  const [copiedCode, setCopiedCode] = useState(false);
  const [referralHistory, setReferralHistory] = useState<any[]>([]);

  useEffect(() => {
    if (profile?.id) {
      fetchReferralHistory();
    }
  }, [profile?.id]);

  const fetchReferralHistory = async () => {
    if (!profile?.id) return;
    
    try {
      const { data, error } = await supabase
        .from('referral_history')
        .select('*')
        .eq('referrer_id', profile.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setReferralHistory(data || []);
    } catch (error) {
      console.error('Error fetching referral history:', error);
    }
  };

  if (!user || !profile) return null;

  const copyReferralCode = () => {
    navigator.clipboard.writeText(profile.referral_code || '');
    setCopiedCode(true);
    toast({
      title: 'Referral Code Copied',
      description: 'Share this code to earn rewards!',
    });
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="container max-w-6xl mx-auto p-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
            <GraduationCap className="w-8 h-8 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Student Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, {profile.display_name}!</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Home
            </Link>
          </Button>
          <Button variant="outline" onClick={logout}>
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <Card className="shadow-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Referrals</p>
                <p className="text-2xl font-bold text-primary">{profile.total_referrals || 0}</p>
              </div>
              <Users className="w-8 h-8 text-primary/60" />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Earnings</p>
                <p className="text-2xl font-bold text-success">₹{profile.earnings || 0}</p>
              </div>
              <DollarSign className="w-8 h-8 text-success/60" />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Course Status</p>
                <p className="text-lg font-bold text-accent">
                  {profile.course_purchased ? 'Purchased' : 'Not Purchased'}
                </p>
              </div>
              <BookOpen className="w-8 h-8 text-accent/60" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="referrals">Referrals</TabsTrigger>
          <TabsTrigger value="payouts">Payouts</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Course Status */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Course Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                {profile.course_purchased ? (
                  <>
                    <CheckCircle className="w-8 h-8 text-success" />
                    <div>
                      <p className="font-semibold text-success">Course Purchased</p>
                      <p className="text-sm text-muted-foreground">
                        Transaction ID: {profile.transaction_id}
                      </p>
                    </div>
                  </>
                ) : profile.verification_status === 'verifying' ? (
                  <>
                    <Clock className="w-8 h-8 text-warning" />
                    <div>
                      <p className="font-semibold text-warning">Payment Under Verification</p>
                      <p className="text-sm text-muted-foreground">
                        Transaction ID: {profile.transaction_id} - Verification in progress
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <Clock className="w-8 h-8 text-muted-foreground" />
                    <div>
                      <p className="font-semibold text-muted-foreground">Course Not Purchased</p>
                      <p className="text-sm text-muted-foreground">
                        Purchase the course to access all content
                      </p>
                    </div>
                    <Button asChild className="ml-auto">
                      <Link to="/checkout">
                        <CreditCard className="w-4 h-4 mr-2" />
                        Purchase Course
                      </Link>
                    </Button>
                  </>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Referral Code */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Share2 className="w-5 h-5 text-primary" />
                Your Referral Code
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 p-4 bg-muted/10 rounded-lg">
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">Share this code to earn rewards</p>
                  <p className="text-2xl font-bold text-primary font-mono">{profile.referral_code}</p>
                </div>
                <Button 
                  onClick={copyReferralCode}
                  variant="outline"
                  className={copiedCode ? "bg-success/10 border-success text-success" : ""}
                >
                  {copiedCode ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-2" />
                      Copy Code
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="referrals" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Referral History</CardTitle>
            </CardHeader>
            <CardContent>
              {referralHistory && referralHistory.length > 0 ? (
                <div className="space-y-4">
                  {referralHistory.map((referral) => (
                    <div
                      key={referral.id}
                      className="flex items-center justify-between p-4 bg-muted/10 rounded-lg border"
                    >
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-semibold text-foreground">{referral.referred_user_name}</p>
                          <p className="text-sm text-muted-foreground">
                            Referred on {new Date(referral.created_at).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge 
                          variant={referral.status === 'earned' ? 'default' : 'outline'}
                          className={referral.status === 'earned' ? 'bg-success text-success-foreground' : ''}
                        >
                          {referral.status === 'earned' ? 'Earned ₹300' : 'Pending'}
                        </Badge>
                        <p className="text-xs text-muted-foreground mt-1">
                          Status: {referral.status}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Users className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Your referral history will appear here</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Share your referral code to start earning rewards
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payouts">
          <PayoutSection />
        </TabsContent>

        <TabsContent value="profile" className="space-y-6">
          {/* Profile Information */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Profile Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Full Name</label>
                  <p className="text-foreground font-medium">{profile.display_name}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Student ID</label>
                  <p className="text-foreground font-medium">{profile.referral_code}</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Email</label>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <p className="text-foreground">{user.email}</p>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Phone</label>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <p className="text-foreground">{profile.phone || 'Not provided'}</p>
                  </div>
                </div>
              </div>
              
              {profile.referred_by && (
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Referred By</label>
                  <p className="text-foreground font-medium">{profile.referred_by}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};