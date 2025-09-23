import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Gift, Users, Calendar, Star, Globe, Zap } from "lucide-react";
import { getBonuses, getPricing } from "@/lib/courseData";
import automationFlow from "@/assets/doodles/automation-flow.png";

export const OfferSection = () => {
  const bonuses = getBonuses();
  const pricing = getPricing();
  
  // Map icon names to actual icon components
  const iconMap: { [key: string]: any } = {
    Star, Globe, Zap, Users, Gift, Calendar
  };

  return (
    <section className="py-20 bg-gradient-secondary text-white relative overflow-hidden">
      {/* Doodle Images */}
      <div className="absolute top-20 right-10 opacity-10">
        <img src={automationFlow} alt="" className="w-32 h-32 rotate-12" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-10">
        <img src={automationFlow} alt="" className="w-28 h-28 -rotate-12" />
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-warning text-warning-foreground border-0 px-4 py-2">
            Limited Time Offer
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Get Everything You Need to Succeed
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            When you enroll today, you don't just get a course—you get a complete AI success system.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Pricing Card */}
          <div className="lg:col-span-1">
            <Card className="bg-white text-foreground shadow-glow border-0 sticky top-8">
              <CardHeader className="text-center pb-4">
                <div className="mb-4">
                  <div className="text-sm text-muted-foreground mb-2">Real Value</div>
                  <div className="text-3xl font-bold line-through text-muted-foreground">{pricing.currency}{pricing.regular_price.toLocaleString()}</div>
                </div>
                <div className="mb-4">
                  <div className="text-sm text-success font-semibold mb-2">Launch Offer</div>
                  <div className="text-5xl font-bold text-primary">{pricing.currency}{pricing.discounted_price.toLocaleString()}</div>
                </div>
                <Badge className="bg-success text-success-foreground border-0 text-lg px-4 py-2">
                  {pricing.discount_percentage}% OFF!
                </Badge>
              </CardHeader>
              <CardContent>
                <Button 
                  size="lg" 
                  className="w-full text-lg py-6 bg-gradient-primary hover:opacity-90 border-0 shadow-primary transition-all duration-300 hover:scale-105"
                >
                  Enroll Now & Start My AI Transformation
                </Button>
                <div className="mt-4 text-center text-sm text-muted-foreground">
                  <div className="flex items-center justify-center gap-2">
                    <Check className="w-4 h-4 text-success" />
                    <span>Instant Access</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Bonuses */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">
              Plus, You Get These 6 Bonuses Absolutely FREE:
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {bonuses.map((bonus, index) => {
                const Icon = iconMap[bonus.icon] || Star;
                return (
                  <Card 
                    key={index} 
                    className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-gradient-accent flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-lg mb-2">
                            {bonus.title}
                          </h4>
                          <p className="text-white/80 text-sm leading-relaxed">
                            {bonus.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full">
            <Gift className="w-5 h-5 text-warning" />
            <span className="font-semibold">Total Bonus Value: {pricing.currency}{bonuses.reduce((total, bonus) => total + bonus.value, 0).toLocaleString()}+ | Your Investment: Just {pricing.currency}{pricing.discounted_price.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </section>
  );
};