import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Gift, Users, Target, TrendingUp, CheckCircle, Zap } from "lucide-react";
export const PartnerProgramSection = () => {
  return <section className="py-20 bg-gradient-to-br from-muted/20 via-background to-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary))_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16 px-4">
          <Badge className="mb-4 bg-gradient-to-r from-primary to-accent text-primary-foreground border-0 px-4 md:px-6 py-2">
            🎯 Partner Program
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Become an AI Course Partner
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our exclusive partner program - refer others, earn commissions, and get the course FREE after 10 successful referrals!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12 px-4">
          {/* Partner Benefits */}
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Gift className="w-8 h-8 text-primary" />
                Partner Rewards System
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-4 md:p-6">
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="text-center p-3 md:p-4 bg-background rounded-lg border">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">₹300</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Per Referral</div>
                </div>
                <div className="text-center p-3 md:p-4 bg-background rounded-lg border">
                  <div className="text-2xl md:text-3xl font-bold text-success mb-1">FREE</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Course @ 10 Refs</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-sm md:text-base text-muted-foreground">50% commission on each successful referral</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 md:w-5 h-4 md:h-5 text-success flex-shrink-0" />
                  <span className="text-sm md:text-base text-muted-foreground">Get the complete course FREE after 10 referrals</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 md:w-5 h-4 md:h-5 text-success flex-shrink-0" />
                  <span className="text-sm md:text-base text-muted-foreground">Access to exclusive partner resources</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 md:w-5 h-4 md:h-5 text-success flex-shrink-0" />
                  <span className="text-sm md:text-base text-muted-foreground">Monthly partner webinars and training</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 md:w-5 h-4 md:h-5 text-success flex-shrink-0" />
                  <span className="text-sm md:text-base text-muted-foreground">No enrollment required - just share and earn</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Earnings Calculator */}
          <Card className="bg-gradient-to-br from-success/10 to-warning/10 border-success/30 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <TrendingUp className="w-8 h-8 text-success" />
                Earnings Potential
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 md:p-6">
              <div className="space-y-6">
                <div className="bg-background rounded-xl p-4 md:p-6 border">
                  <h4 className="text-base md:text-lg font-semibold text-foreground mb-4">Partner Earnings Breakdown:</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">5 Referrals:</span>
                      <span className="font-semibold text-success">₹1,500</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">10 Referrals:</span>
                      <div className="text-right">
                        <div className="font-semibold text-success">₹3,000 + FREE Course</div>
                        <div className="text-xs text-muted-foreground">(Worth ₹999)</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center border-t pt-3">
                      <span className="text-muted-foreground">20 Referrals:</span>
                      <span className="font-bold text-success text-lg">₹6,000 + Course</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">50 Referrals:</span>
                      <span className="font-bold text-success text-xl">₹15,000 + Course</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-primary">Partner Goal System</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Track your progress with our milestone system. Unlock bonuses at 5, 10, 25, and 50 referrals!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* How it Works */}
        <Card className="mb-12 bg-gradient-to-r from-background to-muted/20 border-border shadow-card">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">How Partner Program Works</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">1. Sign Up</h4>
                <p className="text-sm text-muted-foreground">Join our partner program and get your unique referral link</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-accent-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">2. Share</h4>
                <p className="text-sm text-muted-foreground">Share the course with your network using your link</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-success-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">3. Earn</h4>
                <p className="text-sm text-muted-foreground">Get ₹500 for every successful enrollment</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-warning rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-8 h-8 text-warning-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">4. Unlock</h4>
                <p className="text-sm text-muted-foreground">Get the course FREE after 10 successful referrals</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Link to="/signup/partner">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-10 py-6 text-lg shadow-glow hover:scale-105 transition-all duration-300">
              <Gift className="w-6 h-6 mr-2" />
              Join Partner Program - Start Earning Today
            </Button>
          </Link>
          <p className="text-sm text-muted-foreground mt-4">
            No course purchase required • Start earning immediately • Get course FREE after 10 referrals
          </p>
        </div>
      </div>
    </section>;
};