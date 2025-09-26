import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Users, Zap, BookOpen, Award, Calendar } from "lucide-react";
import { getWhatsAppCommunity } from "@/lib/courseData";
import learningJourney from "@/assets/doodles/learning-journey.png";

export const WhatsAppCommunitySection = () => {
  const community = getWhatsAppCommunity();
  
  return (
    <section className="py-20 bg-gradient-to-br from-success/5 via-background to-success/10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,hsl(var(--success))_2px,transparent_2px),linear-gradient(150deg,hsl(var(--success))_2px,transparent_2px)] bg-[size:5rem_5rem]" />
      </div>
      
      {/* Doodle Images */}
      <div className="absolute top-10 left-10 opacity-10">
        <img src={learningJourney} alt="" className="w-28 h-28 rotate-12" />
      </div>
      <div className="absolute bottom-20 right-20 opacity-10">
        <img src={learningJourney} alt="" className="w-24 h-24 -rotate-12" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16 px-4">
          <Badge className="mb-4 bg-success text-success-foreground border-0 px-4 md:px-6 py-2 text-sm md:text-base">
            💬 Join Our Community
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            {community.name}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {community.description}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="bg-gradient-to-br from-success/10 to-success/5 border-success/30 shadow-card overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Community Benefits */}
                <div className="p-6 md:p-8 lg:p-12 order-2 lg:order-1">
                  <div className="flex items-center gap-3 mb-6 md:mb-8">
                    <div className="w-10 md:w-12 h-10 md:h-12 bg-success rounded-full flex items-center justify-center">
                      <MessageCircle className="w-5 md:w-6 h-5 md:h-6 text-success-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground">{community.name}</h3>
                      <p className="text-sm md:text-base text-success font-semibold">{community.members_count.toLocaleString()} Active Members</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                    <div className="text-center p-3 md:p-4 bg-background rounded-lg border">
                      <Users className="w-6 md:w-8 h-6 md:h-8 text-success mx-auto mb-2" />
                      {/* <div className="text-xl md:text-2xl font-bold text-foreground">{Math.floor(community.members_count / 1000)}K+</div> */}
                      <div className="text-xl md:text-2xl font-bold text-foreground">200+</div>
                      <div className="text-xs md:text-sm text-muted-foreground">Active Members</div>
                    </div>
                    <div className="text-center p-3 md:p-4 bg-background rounded-lg border">
                      <Zap className="w-6 md:w-8 h-6 md:h-8 text-warning mx-auto mb-2" />
                      <div className="text-xl md:text-2xl font-bold text-foreground">24/7</div>
                      <div className="text-xs md:text-sm text-muted-foreground">Support</div>
                    </div>
                  </div>

                  <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                    {community.features.map((feature, index) => {
                      const icons = [BookOpen, Users, Award, Calendar, Zap, BookOpen];
                      const Icon = icons[index % icons.length];
                      return (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Icon className="w-3 h-3 text-success" />
                          </div>
                          <div>
                            <h4 className="text-sm md:text-base font-semibold text-foreground">{feature}</h4>
                            <p className="text-xs md:text-sm text-muted-foreground">
                              {index === 0 && "Get the latest AI tools, techniques, and industry news"}
                              {index === 1 && "Connect with fellow students and share experiences"}
                              {index === 2 && "Monthly live sessions with industry experts"}
                              {index === 3 && "Hands-on projects to practice your AI skills"}
                              {index === 4 && "Get instant help from community and experts"}
                              {index === 5 && "Learn from experienced AI practitioners"}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* WhatsApp Mockup */}
                <div className="bg-gradient-to-br from-success/20 to-success/10 p-4 md:p-8 flex items-center justify-center order-1 lg:order-2">
                  <div className="w-full max-w-sm">
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-200">
                      {/* Phone Header */}
                      <div className="bg-success text-white p-4 flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                          <MessageCircle className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{community.name}</h4>
                          <p className="text-xs opacity-90">{community.members_count.toLocaleString()} members</p>
                        </div>
                      </div>
                      
                      {/* Chat Messages */}
                      <div className="p-4 space-y-3 bg-gray-50 min-h-[300px]">
                        <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-primary">
                          <div className="text-xs text-primary font-semibold mb-1">Sarah - Instructor</div>
                          <div className="text-sm text-gray-700">🚀 New AI tool alert! Just discovered an amazing automation for social media...</div>
                        </div>
                        <div className="bg-white p-3 rounded-lg shadow-sm">
                          <div className="text-xs text-gray-500 font-semibold mb-1">Mike Johnson</div>
                          <div className="text-sm text-gray-700">Just automated my entire email workflow! Thanks to this course 🙌</div>
                        </div>
                        <div className="bg-white p-3 rounded-lg shadow-sm">
                          <div className="text-xs text-gray-500 font-semibold mb-1">Lisa Chen</div>
                          <div className="text-sm text-gray-700">Can someone help with ChatGPT prompt optimization?</div>
                        </div>
                        <div className="bg-success/10 p-3 rounded-lg">
                          <div className="text-xs text-success font-semibold mb-1">David Rodriguez</div>
                          <div className="text-sm text-gray-700">Sure! Here's what worked for me...</div>
                        </div>
                        <div className="text-center">
                          <div className="inline-flex items-center gap-2 bg-success/20 px-3 py-1 rounded-full">
                            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                            <span className="text-xs text-success">12 people typing...</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 md:p-8 bg-gradient-to-r from-success/10 to-success/5 border-t border-success/20">
                <div className="text-center">
                  {/* <Button 
                    size="lg" 
                    className="bg-success hover:bg-success/90 text-success-foreground px-6 md:px-10 py-4 md:py-6 text-base md:text-lg shadow-lg hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                  >
                    <MessageCircle className="w-5 md:w-6 h-5 md:h-6 mr-2" />
                    Join WhatsApp Community - FREE
                  </Button> */}
                  <p className="text-xs md:text-sm text-muted-foreground mt-4">
                    🔒 Private community • 📱 Mobile-first learning • 🤝 Peer support • 🎯 Expert guidance
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};