import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Users, Award, BookOpen, Linkedin, Twitter, Globe } from "lucide-react";
import { getInstructor } from "@/lib/courseData";
import robotLearning from "@/assets/doodles/robot-learning.png";

export const InstructorSection = () => {
  const instructor = getInstructor();
  
  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,hsl(var(--primary))_1px,transparent_1px),linear-gradient(-45deg,hsl(var(--primary))_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>
      
      {/* Doodle Images */}
      <div className="absolute top-10 right-10 opacity-10">
        <img src={robotLearning} alt="" className="w-24 h-24 rotate-12" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-10">
        <img src={robotLearning} alt="" className="w-32 h-32 -rotate-12 scale-x-[-1]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16 px-4">
          <Badge className="mb-4 bg-primary text-primary-foreground border-0 px-4 py-2">
            Meet Your AI Mentor
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Learn from Industry Expert
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Get guided by someone who has transformed businesses with AI and helped thousands master automation
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="bg-gradient-to-br from-card via-card/95 to-muted/20 border-primary/20 shadow-card overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Instructor Image */}
                <div className="relative bg-gradient-to-br from-primary/20 to-accent/20 p-4 md:p-8 flex items-center justify-center">
                  <div className="relative w-60 md:w-80 h-60 md:h-80 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center overflow-hidden shadow-glow">
                    <div className="text-white text-8xl font-bold"><img src={instructor.image} alt="Mr. Rathi" /></div>
                    <div className="absolute inset-0 bg-black/10" />
                    {/* Floating Elements */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute bottom-4 left-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Instructor Details */}
                <div className="p-6 md:p-8 lg:p-12">
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      {instructor.name}
                    </h3>
                    <p className="text-lg md:text-xl text-primary font-semibold mb-4">
                      {instructor.title}
                    </p>
                    <div className="flex items-center gap-2 md:gap-4 mb-6 flex-wrap">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-warning text-warning" />
                        ))}
                        <span className="ml-2 text-sm md:text-base text-muted-foreground">{instructor.rating}/5 ({instructor.totalReviews.toLocaleString()} reviews)</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                    <div className="text-center p-4 bg-background rounded-lg border">
                      <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                      <div className="text-xl md:text-2xl font-bold text-foreground">{instructor.studentsCount}</div>
                      <div className="text-xs md:text-sm text-muted-foreground">Students Taught</div>
                    </div>
                    <div className="text-center p-4 bg-background rounded-lg border">
                      <BookOpen className="w-6 md:w-8 h-6 md:h-8 text-success mx-auto mb-2" />
                      <div className="text-xl md:text-2xl font-bold text-foreground">{instructor.experience}</div>
                      <div className="text-xs md:text-sm text-muted-foreground">Years Experience</div>
                    </div>
                  </div>

                  <div className="mb-6 md:mb-8">
                    <h4 className="text-base md:text-lg font-semibold text-foreground mb-4">Background & Expertise</h4>
                    <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                      {instructor.credentials.map((credential, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Award className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          {credential}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-2 md:gap-4 flex-wrap">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </Button>
                   
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      Website
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};