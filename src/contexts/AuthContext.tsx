import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { User as SupabaseUser, Session } from '@supabase/supabase-js';

export type UserType = 'student' | 'partner';

export interface Profile {
  id: string;
  user_id: string;
  display_name: string | null;
  user_type: UserType;
  referral_code: string | null;
  referred_by: string | null;
  phone: string | null;
  city: string | null;
  occupation: string | null;
  experience: string | null;
  social_media: string | null;
  course_purchased: boolean;
  transaction_id: string | null;
  referral_count: number;
  earnings: number;
  total_referrals: number;
  verification_status: string | null;
}

export interface User extends SupabaseUser {
  profile?: Profile;
}

interface AuthContextType {
  user: User | null;
  profile: Profile | null;
  session: Session | null;
  login: (email: string, password: string) => Promise<{ error?: string }>;
  logout: () => Promise<void>;
  signupStudent: (email: string, password: string, displayName: string, phone: string, referralCode?: string) => Promise<{ error?: string }>;
  signupPartner: (email: string, password: string, displayName: string, phone: string, city: string, occupation: string, experience: string, socialMedia?: string) => Promise<{ error?: string }>;
  updateProfile: (updates: Partial<Profile>) => Promise<{ error?: string }>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user) {
          // Fetch user profile
          setTimeout(async () => {
            await fetchUserProfile(session.user.id);
          }, 0);
        } else {
          setProfile(null);
        }
        setIsLoading(false);
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchUserProfile(session.user.id);
      }
      setIsLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchUserProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (error) {
        console.error('Error fetching profile:', error);
        return;
      }

      setProfile(data as Profile);
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setIsLoading(false);

    if (error) {
      return { error: error.message };
    }

    return {};
  };

  const signupStudent = async (
    email: string, 
    password: string, 
    displayName: string, 
    phone: string, 
    referralCode?: string
  ) => {
    setIsLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/`,
        data: {
          display_name: displayName,
          user_type: 'student',
          phone,
          referred_by: referralCode || null,
        }
      }
    });

    setIsLoading(false);

    if (error) {
      return { error: error.message };
    }

    return {};
  };

  const signupPartner = async (
    email: string,
    password: string,
    displayName: string,
    phone: string,
    city: string,
    occupation: string,
    experience: string,
    socialMedia?: string
  ) => {
    setIsLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/`,
        data: {
          display_name: displayName,
          user_type: 'partner',
          phone,
          city,
          occupation,
          experience,
          social_media: socialMedia || null,
        }
      }
    });

    setIsLoading(false);

    if (error) {
      return { error: error.message };
    }

    return {};
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error logging out:', error);
    }
  };

  const updateProfile = async (updates: Partial<Profile>) => {
    if (!user || !profile) {
      return { error: 'No user logged in' };
    }

    const { error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('user_id', user.id);

    if (error) {
      return { error: error.message };
    }

    // Update local state
    setProfile({ ...profile, ...updates });
    return {};
  };

  return (
    <AuthContext.Provider value={{
      user,
      profile,
      session,
      login,
      logout,
      signupStudent,
      signupPartner,
      updateProfile,
      isLoading
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};