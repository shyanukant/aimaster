import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { LogOut, User, Brain } from "lucide-react";

export const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="w-full flex justify-center pt-6 pb-4 px-4">
      <nav className="bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-glow px-6 py-3">
        <div className="flex items-center gap-8">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center gap-2 text-white hover:text-white/90 transition-colors">
            <Brain className="w-6 h-6 text-primary-glow" />
            <span className="text-lg font-bold">Master AI</span>
          </Link>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            {user ? (
              <>
                <Link to="/profile">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm rounded-full"
                  >
                    <User className="w-4 h-4 mr-2" />
                    Profile
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleLogout}
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm rounded-full"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-white/30 text-primary hover:text-white hover:bg-white/10 backdrop-blur-sm rounded-full"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/signup/student">
                  <Button
                    size="sm"
                    className="bg-white text-primary hover:bg-white/90 rounded-full"
                  >
                    Join Now
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};