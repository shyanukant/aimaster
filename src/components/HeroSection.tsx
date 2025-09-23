import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Play, Code, Zap, Bot, Sparkles, Brain, Cpu, Network, LogOut, User } from "lucide-react";
export const HeroSection = () => {
  const {
    user,
    logout
  } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return <section className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-hero">
      {/* Navbar inside hero */}
      <div className="w-full flex justify-center pt-6 pb-4 px-4 relative z-20">
        <nav className="bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-glow px-6 py-3">
          <div className="flex items-center gap-8">
            {/* Logo and Brand */}
            <Link to="/" className="flex items-center gap-2 text-white hover:text-white/90 transition-colors">
              <Brain className="w-6 h-6 text-primary-glow" />
              <span className="text-lg font-bold">Master AI</span>
            </Link>

            {/* Auth Buttons */}
            <div className="flex items-center gap-3">
              {user ? <>
                  <Link to="/profile">
                    <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm rounded-full">
                      <User className="w-4 h-4 mr-2" />
                      Profile
                    </Button>
                  </Link>
                  <Button variant="outline" size="sm" onClick={handleLogout} className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm rounded-full">
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </Button>
                </> : <>
                  <Link to="/login">
                    <Button variant="outline" size="sm" className="border-white/30 hover:bg-white/10 backdrop-blur-sm rounded-full text-purple-300">
                      Login
                    </Button>
                  </Link>
                  <Link to="/signup/student">
                    <Button size="sm" className="bg-white text-primary hover:bg-white/90 rounded-full">
                      Join Now
                    </Button>
                  </Link>
                </>}
            </div>
          </div>
        </nav>
      </div>

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center">
        {/* Advanced Grid Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary-glow))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary-glow))_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_110%)] animate-pulse" />
          <div className="absolute inset-0 bg-[linear-gradient(45deg,hsl(var(--accent))_1px,transparent_1px),linear-gradient(-45deg,hsl(var(--accent))_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-20 animate-float" />
        </div>
        
        {/* Floating Tech Orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-primary-glow/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-32 right-1/3 w-80 h-80 bg-accent/25 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/3 right-20 w-48 h-48 bg-warning/20 rounded-full blur-3xl animate-pulse delay-500" />
        </div>
        
        {/* Enhanced Floating Tech Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="relative">
            <Code className="w-8 h-8 text-primary-glow opacity-80" />
            <div className="absolute -inset-2 bg-primary-glow/20 rounded-full blur-sm" />
          </div>
        </div>
        <div className="absolute top-32 right-16 animate-float delay-700">
          <div className="relative">
            <Brain className="w-7 h-7 text-accent opacity-80" />
            <div className="absolute -inset-2 bg-accent/20 rounded-full blur-sm" />
          </div>
        </div>
        <div className="absolute top-1/2 left-8 animate-float delay-1000">
          <div className="relative">
            <Cpu className="w-6 h-6 text-warning opacity-80" />
            <div className="absolute -inset-2 bg-warning/20 rounded-full blur-sm" />
          </div>
        </div>
        <div className="absolute bottom-32 left-16 animate-float delay-300">
          <div className="relative">
            <Network className="w-8 h-8 text-success opacity-80" />
            <div className="absolute -inset-2 bg-success/20 rounded-full blur-sm" />
          </div>
        </div>
        <div className="absolute bottom-20 right-20 animate-float delay-1500">
          <div className="relative">
            <Sparkles className="w-7 h-7 text-primary-glow opacity-80" />
            <div className="absolute -inset-2 bg-primary-glow/20 rounded-full blur-sm" />
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Header Badge */}
            
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight px-2">
              Master AI in{" "}
              <span className="bg-gradient-to-r from-primary-glow via-accent to-white bg-clip-text text-transparent animate-pulse">
                30 Days
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 md:mb-14 leading-relaxed max-w-3xl mx-auto px-4">
              Transform from manual worker to AI automation expert. No coding required.
              <br className="hidden sm:block" />
              
            </p>
            
            {/* Video Container */}
            <div className="relative max-w-4xl mx-auto mb-12 md:mb-16 px-4">
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-glow bg-gradient-to-br from-primary/30 to-accent/30 p-2 md:p-4 backdrop-blur-md border border-white/30">
                <div className="relative aspect-video rounded-xl md:rounded-2xl overflow-hidden bg-black shadow-2xl">
                  <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="AI Course Introduction" className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-6 md:mb-8 px-4">
              <Link to="/course-details" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="text-base md:text-lg px-8 md:px-10 py-4 md:py-6 border-white/30 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 w-full text-purple-400">
                  <Play className="w-4 md:w-5 h-4 md:h-5 mr-2" />
                  Course Details
                </Button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="text-base md:text-lg px-8 md:px-10 py-4 md:py-6 border-white/30 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 w-full text-purple-400">
                  <Play className="w-4 md:w-5 h-4 md:h-5 mr-2" />
                  Contact
                </Button>
              </Link>
            </div>
            
            {/* Login Link */}
            <div className="mb-6">
              <Link to="/login" className="text-white/80 hover:text-white text-sm underline">
                Already have an account? Sign in here
              </Link>
            </div>
            
            {/* Stats */}
            <div className="flex items-center justify-center gap-4 md:gap-8 text-white/80 px-4 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                <span className="font-medium text-sm md:text-base">30 Days</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-warning rounded-full animate-pulse" />
                <span className="font-medium text-sm md:text-base">90% OFF</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary-glow rounded-full animate-pulse" />
                <span className="font-medium text-sm md:text-base">No Code</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};