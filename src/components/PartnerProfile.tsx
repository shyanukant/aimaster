import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';
import { PayoutSection } from '@/components/PayoutSection';
import { 
  Users, 
  User, 
  Mail, 
  Phone, 
  TrendingUp, 
  Gift,
  LogOut,
  ArrowLeft,
  Target,
  DollarSign,
  Share2,
  Copy,
  CheckCircle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const PartnerProfile = () => {
  const { user, profile, logout } = useAuth();
  const { toast } = useToast();
  const [copiedCode, setCopiedCode] = useState(false);

  if (!user || !profile) return null;

  const referralsToFreeCourse = 10 - (profile.referral_count || 0);
  const progressToFreeCourse = Math.min(((profile.referral_count || 0) / 10) * 100, 100);

  const copyReferralCode = () => {
    navigator.clipboard.writeText(profile.referral_code || '');
    setCopiedCode(true);
    toast({
      title: 'Referral Code Copied',
      description: 'Share this code to earn commissions!',
    });
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="container max-w-6xl mx-auto p-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center">
            <Users className="w-8 h-8 text-accent-foreground" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Partner Dashboard</h1>
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
      <div className="grid md:grid-cols-4 gap-4 mb-8">
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
                <p className="text-sm text-muted-foreground">Active Referrals</p>
                <p className="text-2xl font-bold text-success">{profile.referral_count || 0}</p>
              </div>
              <Target className="w-8 h-8 text-success/60" />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Earnings</p>
                <p className="text-2xl font-bold text-warning">₹{profile.earnings || 0}</p>
              </div>
              <DollarSign className="w-8 h-8 text-warning/60" />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">To Free Course</p>
                <p className="text-2xl font-bold text-accent">{Math.max(referralsToFreeCourse, 0)}</p>
              </div>
              <Gift className="w-8 h-8 text-accent/60" />
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
          {/* Free Course Progress */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gift className="w-5 h-5 text-primary" />
                Progress to Free Course
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  {profile.referral_count || 0} of 10 successful referrals
                </span>
                <Badge variant={progressToFreeCourse === 100 ? "default" : "secondary"}>
                  {progressToFreeCourse === 100 ? "Unlocked!" : `${Math.round(progressToFreeCourse)}%`}
                </Badge>
              </div>
              <Progress value={progressToFreeCourse} className="h-3" />
              {progressToFreeCourse === 100 ? (
                <div className="text-center p-4 bg-success/10 rounded-lg border border-success/20">
                  <CheckCircle className="w-8 h-8 text-success mx-auto mb-2" />
                  <p className="text-success font-semibold">Congratulations! You've unlocked the free course!</p>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">
                  {referralsToFreeCourse} more referrals needed to unlock the free course
                </p>
              )}
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
                  <p className="text-sm text-muted-foreground mb-1">Share this code to earn ₹300 per referral</p>
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
              <div className="text-center py-8">
                <Users className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Your referral history will appear here</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Share your referral code to start earning commissions
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payouts">
          <PayoutSection />
        </TabsContent>

        <TabsContent value="profile" className="space-y-6">
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
                  <label className="text-sm font-medium text-muted-foreground">Partner ID</label>
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
                    <p className="text-foreground">{profile.phone}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};