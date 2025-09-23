import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';
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
  BookOpen
} from 'lucide-react';

export const StudentProfile = () => {
  const { user, profile, logout } = useAuth();

  if (!user || !profile) return null;

  return (
    <div className="container max-w-4xl mx-auto p-4 py-8">
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

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Profile Information */}
        <Card className="lg:col-span-2 shadow-card">
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
                  <p className="text-foreground">{profile.phone}</p>
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

        {/* Course Status */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Course Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center p-4 bg-muted/10 rounded-lg">
              {profile.course_purchased ? (
                <div className="space-y-2">
                  <CheckCircle className="w-12 h-12 text-success mx-auto" />
                  <Badge className="bg-success text-success-foreground">Active</Badge>
                  <p className="text-sm text-muted-foreground">Course access granted</p>
                </div>
              ) : (
                <div className="space-y-2">
                  <Clock className="w-12 h-12 text-warning mx-auto" />
                  <Badge variant="outline" className="border-warning text-warning">Pending</Badge>
                  <p className="text-sm text-muted-foreground">Payment verification in progress</p>
                </div>
              )}
            </div>
            
            {profile.course_purchased ? (
              <Button className="w-full bg-gradient-primary text-primary-foreground" asChild>
                <Link to="/course-details">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Access Course
                </Link>
              </Button>
            ) : (
              <Button variant="outline" className="w-full" asChild>
                <Link to="/checkout">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Complete Payment
                </Link>
              </Button>
            )}
          </CardContent>
        </Card>

        {/* Payment Information */}
        <Card className="lg:col-span-3 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="w-5 h-5" />
              Payment Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-muted/10 rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">Course Fee</h3>
                <p className="text-2xl font-bold text-primary">₹999</p>
              </div>
              
              <div className="p-4 bg-muted/10 rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">Payment Status</h3>
                {profile.course_purchased ? (
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span className="text-success font-medium">Completed</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-warning" />
                    <span className="text-warning font-medium">Pending</span>
                  </div>
                )}
              </div>
              
              <div className="p-4 bg-muted/10 rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">Transaction ID</h3>
                <p className="text-foreground font-mono">
                  {profile.transaction_id || 'Not provided'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};