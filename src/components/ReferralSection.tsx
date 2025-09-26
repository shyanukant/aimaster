import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Users, TrendingUp, Share2 } from "lucide-react";
import { getReferralProgram } from "@/lib/courseData";
import { Link } from "react-router-dom";
import robotLearning from "@/assets/doodles/robot-learning.png";

export const ReferralSection = () => {
  const referralProgram = getReferralProgram();
  
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Doodle Images */}
      <div className="absolute top-20 right-20 opacity-10">
        <img src={robotLearning} alt="" className="w-32 h-32 rotate-45" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-10">
        <img src={robotLearning} alt="" className="w-24 h-24 -rotate-45 scale-x-[-1]" />
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-success text-success-foreground border-0 px-4 py-2">
            Earn While You Learn
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Unlock a New Income Stream Instantly
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We believe in the power of community. That's why every student is automatically upgraded to a partner.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-success/10 to-primary/10 border-success/20 shadow-card">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-success flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">
                        Earn a {referralProgram.commission_rate}% Commission
                      </h3>
                      <p className="text-success font-semibold">{referralProgram.currency}{referralProgram.commission_amount} per referral</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    For every friend who enrolls through your unique link, you earn a {referralProgram.currency}{referralProgram.commission_amount} commission. 
                    {referralProgram.unlimited_referrals ? "There are no limits" : "Limited referrals available"} and no extra steps. Share the course, help others grow, and get paid for it.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-background rounded-lg border">
                      <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">No Limits</div>
                      <div className="text-sm text-muted-foreground">Unlimited referrals</div>
                    </div>
                    <div className="text-center p-4 bg-background rounded-lg border">
                      <TrendingUp className="w-8 h-8 text-success mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">{referralProgram.commission_rate}%</div>
                      <div className="text-sm text-muted-foreground">Commission rate</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="text-xl font-bold text-foreground mb-4">
                    Quick Math Example:
                  </h4>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Refer 5 friends:</span>
                      <span className="font-semibold">{referralProgram.currency}{(referralProgram.commission_amount * 5).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Refer 10 friends:</span>
                      <span className="font-semibold">{referralProgram.currency}{(referralProgram.commission_amount * 10).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center border-t pt-3">
                      <span className="text-muted-foreground">Refer 20 friends:</span>
                      <span className="font-bold text-success text-lg">{referralProgram.currency}{(referralProgram.commission_amount * 20).toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-success/10 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Share2 className="w-5 h-5 text-success" />
                      <span className="font-semibold text-success">Pro Tip:</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Share your success story on social media and watch the referrals roll in!
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <Link to="/signup/student">
                <Button 
                  size="lg" 
                  className="bg-success hover:bg-success/90 text-success-foreground px-8 py-4 text-lg shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Start Earning Today - Get Your Referral Link
                </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};