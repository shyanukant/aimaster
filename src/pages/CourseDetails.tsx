import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { 
  Calendar, 
  Clock, 
  Users, 
  BookOpen, 
  Zap, 
  Target,
  ChevronLeft,
  Play,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

export default function CourseDetails() {
  const weeks = [
    {
      week: 1,
      title: "The AI Toolkit - Your Creative Co-Pilot",
      description: "Master the essential AI tools and learn to communicate effectively with AI",
      color: "from-blue-500 to-purple-600",
      days: [
        {
          day: 1,
          title: "Welcome to the AI Revolution",
          content: "What is AI and why does it matter for everyone? We'll set up your essential free toolkit: ChatGPT/Gemini, Leonardo.Ai, and Canva."
        },
        {
          day: 2,
          title: "The Art of Conversation with AI",
          content: "Learn the simple secret to getting amazing results from AI: how to ask the right questions. We'll practice with fun, real-world examples."
        },
        {
          day: 3,
          title: "From Idea to Image in Seconds",
          content: "A fun, hands-on introduction to AI art generation with Leonardo.Ai and Bing Image Creator. Create anything you can imagine, from logos to fantasy landscapes."
        },
        {
          day: 4,
          title: "Creating Professional Graphics for Free",
          content: "Learn to use Canva's free tier, combining your AI-generated images with text and layouts to create stunning social media posts, presentations, and posters."
        },
        {
          day: 5,
          title: "Video Made Easy",
          content: "Learn the basics of video editing with the free and powerful CapCut. We'll assemble clips, add AI-generated voiceovers, and find free music."
        },
        {
          day: 6,
          title: "Your First AI Creation",
          content: "A mini-project to bring it all together. Create a short, shareable video with AI images and a voiceover about a topic you love."
        },
        {
          day: 7,
          title: "Live Q&A: Your AI Questions Answered",
          content: "A friendly, open session to answer any questions, share creations, and explore the creative possibilities of AI."
        }
      ]
    },
    {
      week: 2,
      title: "Building and Sharing Your Ideas",
      description: "Create websites, funnels, and digital presence using AI and no-code tools",
      color: "from-purple-600 to-pink-600",
      days: [
        {
          day: 8,
          title: "Using AI to Brainstorm Anything",
          content: "From business ideas to vacation plans, learn how to use ChatGPT or Gemini as your personal brainstorming partner."
        },
        {
          day: 9,
          title: "Write Like a Pro with AI",
          content: "Learn to use AI to write clear, compelling emails, blog posts, and social media updates, saving you hours of time."
        },
        {
          day: 10,
          title: "Build a Website in Under an Hour",
          content: "Create your own personal or professional website for free using Carrd or systeme.io. No coding required."
        },
        {
          day: 11,
          title: "Introduction to Funnels: Guiding Your Audience",
          content: "Learn the simple concept of a \"funnel\" to guide visitors on your website to take a specific action, like signing up for a newsletter."
        },
        {
          day: 12,
          title: "Building Your First Funnel for Free",
          content: "A step-by-step guide to building a simple, effective funnel using systeme.io's free plan."
        },
        {
          day: 13,
          title: "Project: Launch Your Idea",
          content: "Build a landing page for a personal project, a business idea, or a community you want to start."
        },
        {
          day: 14,
          title: "Live Q&A: Sharing Your Creations",
          content: "A show-and-tell session where students can share the websites and projects they've built."
        }
      ]
    },
    {
      week: 3,
      title: "The Magic of Automation with n8n",
      description: "Automate your workflows and put repetitive tasks on autopilot",
      color: "from-pink-600 to-orange-500",
      days: [
        {
          day: 15,
          title: "Putting Your Life on Autopilot",
          content: "An introduction to automation. Imagine your routine tasks just... happening. That's the power we're unlocking this week."
        },
        {
          day: 16,
          title: "Your Automation Command Center: n8n",
          content: "A simple, friendly walkthrough of setting up your free n8n account and understanding the basic building blocks."
        },
        {
          day: 17,
          title: "Your First Automation: The \"Smart\" Inbox",
          content: "Build a simple workflow to automatically sort important emails or save attachments to your Google Drive."
        },
        {
          day: 18,
          title: "Making Your Workflows Smarter",
          content: "Learn to add simple logic (IF this, THEN that) to your automations so they can handle different situations."
        },
        {
          day: 19,
          title: "Schedule Anything",
          content: "Use n8n to schedule daily reminders, send weekly reports, or automate any other time-based task."
        },
        {
          day: 20,
          title: "Project: The Automated Social Media Assistant",
          content: "Build a workflow that automatically shares interesting articles or your own content to your social media profiles."
        },
        {
          day: 21,
          title: "Live Q&A: Your Automation Questions",
          content: "A session to troubleshoot workflows and brainstorm new automation ideas for daily life and work."
        }
      ]
    },
    {
      week: 4,
      title: "Advanced AI Agents & The Future",
      description: "Build AI agents and prepare for your AI-powered future",
      color: "from-orange-500 to-red-500",
      days: [
        {
          day: 22,
          title: "Connecting AI to Your Automations",
          content: "The \"Aha!\" moment. Learn to plug Google's Gemini API (with its generous free tier) into your n8n workflows."
        },
        {
          day: 23,
          title: "Your First \"AI Agent\": The Content Creator",
          content: "Build a workflow that can write a short blog post on a topic you provide and save it as a draft for you."
        },
        {
          day: 24,
          title: "The Research Assistant Agent",
          content: "Create an AI agent that can browse a webpage, summarize its content, and email you the key points."
        },
        {
          day: 25,
          title: "Real-Time Triggers with Webhooks",
          content: "Learn how to make your workflows happen instantly. For example, get a notification the moment someone fills out a form on your website."
        },
        {
          day: 26,
          title: "Final Project: Build Your Dream Automation",
          content: "Plan and build a capstone project that solves a unique problem for you. It could be for work, a hobby, or just for fun."
        },
        {
          day: 27,
          title: "Final Project Showcase",
          content: "Share your final project with the community. See the amazing things your fellow students have built."
        },
        {
          day: 28,
          title: "How to Keep Learning",
          content: "AI changes fast. Learn where to find reliable information to stay updated on the latest tools and trends."
        },
        {
          day: 29,
          title: "Monetizing Your New Skills (If You Want To)",
          content: "For those interested, we'll explore simple ways to start making money with your new AI skills, from freelancing to building a small business."
        },
        {
          day: 30,
          title: "Graduation & Your AI Future",
          content: "A final celebration of your 30-day journey, course certificates, and a look ahead at your future with AI as your co-pilot."
        }
      ]
    }
  ];

  const courseFeatures = [
    {
      icon: Calendar,
      title: "30-Day Structured Journey",
      description: "Complete transformation in just one month"
    },
    {
      icon: Clock,
      title: "1-2 Hours Daily",
      description: "Flexible learning that fits your schedule"
    },
    {
      icon: Users,
      title: "Live Q&A Sessions",
      description: "Weekly interactive sessions with instructors"
    },
    {
      icon: BookOpen,
      title: "Hands-On Projects",
      description: "Build real-world applications"
    },
    {
      icon: Zap,
      title: "No Coding Required",
      description: "Perfect for complete beginners"
    },
    {
      icon: Target,
      title: "Job-Ready Skills",
      description: "Immediately applicable in any industry"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-hero text-white py-12">
        <div className="container mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-white/20 text-white border-0 px-4 py-2">
              Complete Curriculum
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              30-Day Course Guide:{" "}
              <span className="bg-gradient-to-r from-primary-glow to-white bg-clip-text text-transparent">
                "AI for Everyone"
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              This curriculum is structured by skill, not by job role, making it universally applicable.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 shadow-glow transition-all duration-300"
                >
                  Enroll Now - ₹1,000
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                <Play className="w-4 h-4 mr-2" />
                Watch Preview
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Course Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            What Makes This Course Special
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 mx-auto mb-4 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Course Curriculum */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Complete 30-Day Curriculum
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each week builds upon the previous, taking you from complete beginner to AI automation expert
            </p>
          </div>

          <div className="space-y-8">
            {weeks.map((week) => (
              <Card key={week.week} className="overflow-hidden shadow-card">
                <CardHeader className={`bg-gradient-to-r ${week.color} text-white`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl mb-2">
                        Week {week.week}: {week.title}
                      </CardTitle>
                      <p className="text-white/90">{week.description}</p>
                    </div>
                    <Badge className="bg-white/20 text-white border-0">
                      {week.days.length} Days
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="p-0">
                  <Accordion type="single" collapsible className="w-full">
                    {week.days.map((day) => (
                      <AccordionItem 
                        key={day.day} 
                        value={`week-${week.week}-day-${day.day}`}
                        className="border-border/50"
                      >
                        <AccordionTrigger className="px-6 py-4 hover:bg-muted/50 transition-colors">
                          <div className="flex items-center gap-4 text-left">
                            <div className="w-8 h-8 rounded-full bg-gradient-primary text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                              {day.day}
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground">{day.title}</h4>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                          <div className="ml-12">
                            <p>{day.content}</p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Card className="bg-gradient-secondary text-white shadow-glow max-w-2xl mx-auto">
              <CardContent className="p-8">
                <CheckCircle className="w-12 h-12 text-success mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Transform Your Future?
                </h3>
                <p className="text-white/90 mb-6">
                  Join thousands of students who are already mastering AI and automation
                </p>
                <Link to="/">
                  <Button 
                    size="lg" 
                    className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    Enroll Now & Start Your AI Journey
                  </Button>
                </Link>
                <p className="text-sm text-white/70 mt-4">
                  90% OFF Launch Price - Only ₹1,000 (Regular Price: ₹10,000)
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}