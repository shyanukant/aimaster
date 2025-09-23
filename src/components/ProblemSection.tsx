import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Sparkles } from "lucide-react";

export const ProblemSection = () => {
  const audienceCards = [
    {
      icon: GraduationCap,
      title: "A Student or Recent Graduate",
      description: "Feeling like your degree isn't enough? Learn practical AI skills that employers are desperate for, future-proof your career, and even create new side-income opportunities before you graduate.",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: Briefcase,
      title: "A Business Owner",
      description: "Drowning in tedious, repetitive tasks? Learn to automate your operations, supercharge your team's productivity with AI tools, and uncover data-driven strategies to boost your profits and scale your business.",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      icon: Sparkles,
      title: "A Freelancer or Creative",
      description: "Struggling to stand out in a crowded market? Use AI to deliver projects faster, create higher quality content, and offer cutting-edge services that allow you to charge premium rates and win more clients.",
      gradient: "from-pink-600 to-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            This Course Is Your Solution If You Are...
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't let the AI revolution pass you by. Join thousands who are already transforming their careers and businesses.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {audienceCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-primary transition-all duration-500 hover:-translate-y-2 border-border/50 hover:border-primary/20"
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${card.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {card.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};