import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Zap, TrendingUp, CheckCircle } from "lucide-react";

export const FinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-glow/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/30 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-6 bg-warning text-warning-foreground border-0 px-6 py-3 text-lg">
            ⚡ Limited Time - 90% OFF
          </Badge>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            The Future of Work is Here.{" "}
            <span className="bg-gradient-to-r from-primary-glow to-white bg-clip-text text-transparent">
              Are You Ready?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
            This is more than a course; it's your entry into a new world of creativity, efficiency, and opportunity. 
            The 90% discount is for a limited time only.
          </p>
          
          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Clock className="w-8 h-8 text-warning mx-auto mb-4" />
              <h3 className="text-white font-bold text-lg mb-2">30-Day Journey</h3>
              <p className="text-white/80 text-sm">Complete transformation in just one month</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Zap className="w-8 h-8 text-primary-glow mx-auto mb-4" />
              <h3 className="text-white font-bold text-lg mb-2">Instant Access</h3>
              <p className="text-white/80 text-sm">Start learning immediately after enrollment</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <TrendingUp className="w-8 h-8 text-success mx-auto mb-4" />
              <h3 className="text-white font-bold text-lg mb-2">Earn While Learning</h3>
              <p className="text-white/80 text-sm">30% commission on every referral</p>
            </div>
          </div>
          
          {/* Main CTA */}
          <div className="mb-8">
            <Button 
              size="lg" 
              className="text-xl px-12 py-8 bg-white text-primary hover:bg-white/90 shadow-glow transition-all duration-300 hover:scale-105 font-bold"
            >
              Enroll Now & Start My AI Transformation
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-success" />
              <span>Lifetime Access</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-success" />
              <span>Community Support</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-success" />
              <span>6 Free Bonuses</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-success" />
              <span>Referral Program</span>
            </div>
          </div>
          
          {/* Urgency */}
          <div className="mt-8 p-4 bg-warning/20 backdrop-blur-sm rounded-lg border border-warning/30 inline-block">
            <p className="text-warning font-semibold">
              ⏰ Only 48 hours left at this price - Don't miss out!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};