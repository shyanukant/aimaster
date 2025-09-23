import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Palette, Rocket, Workflow, TrendingUp, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export const SolutionSection = () => {
  const skills = [
    {
      icon: MessageSquare,
      title: "The Art of Prompt Engineering",
      description: "Learn to think and communicate like an AI expert. Master the techniques to get exactly what you need from tools like ChatGPT.",
      badge: "Foundation"
    },
    {
      icon: Palette,
      title: "AI for Content Creation",
      description: "Effortlessly create stunning graphics with Midjourney, edit professional videos with RunwayML, and generate high-quality text with Jasper.",
      badge: "Creative"
    },
    {
      icon: Rocket,
      title: "Build Digital Products & Businesses",
      description: "Learn to create and launch your own eBooks, online courses, and digital assets. We'll show you how to build no-code websites and high-converting sales funnels to sell them.",
      badge: "Business"
    },
    {
      icon: Workflow,
      title: "Workflow Automation with n8n",
      description: "This is the ultimate skill. Connect all your apps (Google Sheets, social media, email, AI tools) and build powerful automation workflows from scratch using n8n. Go from a beginner to an automation pro.",
      badge: "Advanced"
    },
    {
      icon: TrendingUp,
      title: "AI for Business Growth",
      description: "Discover how to use automation and AI analytics to scale your brand, manage clients, and grow your online presence on autopilot.",
      badge: "Growth"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-primary text-white border-0 px-4 py-2">
            30-Day Curriculum
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Here's a Glimpse of What You'll Master in 30 Days
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From beginner to AI automation expert - we'll guide you through every step of your transformation.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-card transition-all duration-500 hover:-translate-y-1 border-border/50"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-bold text-foreground">
                          {skill.title}
                        </h3>
                        <Badge variant="outline" className="text-xs">
                          {skill.badge}
                        </Badge>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12 space-y-4">
          <div className="inline-flex items-center gap-2 bg-gradient-accent text-white px-6 py-3 rounded-full shadow-glow">
            <Workflow className="w-5 h-5" />
            <span className="font-semibold">Complete Hands-On Learning Experience</span>
          </div>
          
          <div>
            <Link 
              to="/course-details"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
            >
              <BookOpen className="w-5 h-5" />
              View Complete 30-Day Curriculum →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};