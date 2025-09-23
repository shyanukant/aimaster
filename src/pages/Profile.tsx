import { useAuth } from '@/contexts/AuthContext';
import { StudentProfile } from '@/components/StudentProfile';
import { PartnerProfile } from '@/components/PartnerProfile';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Profile = () => {
  const { user, profile, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/login');
    }
  }, [user, isLoading, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user || !profile) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {profile.user_type === 'student' ? (
        <StudentProfile />
      ) : (
        <PartnerProfile />
      )}
    </div>
  );
};

export default Profile;