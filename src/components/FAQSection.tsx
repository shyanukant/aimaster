import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { getFAQ } from "@/lib/courseData";
import aiBrain from "@/assets/doodles/ai-brain.png";

export const FAQSection = () => {
  const faqs = getFAQ();

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background relative overflow-hidden">
      {/* Doodle Images */}
      <div className="absolute top-20 left-10 opacity-10">
        <img src={aiBrain} alt="" className="w-28 h-28 rotate-45" />
      </div>
      <div className="absolute bottom-20 right-20 opacity-10">
        <img src={aiBrain} alt="" className="w-20 h-20 -rotate-45" />
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary text-primary-foreground border-0 px-4 py-2">
            Got Questions?
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about the AI Mastery Course
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-card border-border/50">
            <CardContent className="p-8">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border-border/50"
                  >
                    <AccordionTrigger className="text-left hover:text-primary transition-colors">
                      <div className="flex items-start gap-3">
                        <HelpCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="font-semibold">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed ml-8">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
          
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-gradient-primary text-white px-6 py-3 rounded-full shadow-glow">
              <HelpCircle className="w-5 h-5" />
              <span className="font-semibold">Still have questions? Join our community for instant support!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};