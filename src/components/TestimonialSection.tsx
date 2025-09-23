import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";
import { getTestimonials, getSocialProof } from "@/lib/courseData";
import aiTools from "@/assets/doodles/ai-tools.png";

export const TestimonialSection = () => {
  const testimonials = getTestimonials();
  const socialProof = getSocialProof();

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Doodle Images */}
      <div className="absolute top-10 left-20 opacity-10">
        <img src={aiTools} alt="" className="w-32 h-32 rotate-12" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10">
        <img src={aiTools} alt="" className="w-24 h-24 -rotate-12" />
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-primary text-white border-0 px-4 py-2">
            Student Success Stories
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our Students Are Saying
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of students who have already transformed their careers with AI mastery
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card transition-all duration-500 hover:-translate-y-2 border-border/50 relative"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="border-t pt-4">
                  <div className="font-bold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-primary">
                    {testimonial.location}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-gradient-accent text-white px-6 py-3 rounded-full shadow-glow">
            <Star className="w-5 h-5" />
            <span className="font-semibold">{socialProof.average_rating}/5 Average Rating • {socialProof.total_students} Happy Students</span>
          </div>
        </div>
      </div>
    </section>
  );
};