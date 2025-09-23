import courseDataJson from '@/data/courseData.json';

export interface Instructor {
  name: string;
  title: string;
  bio: string;
  image: string;
  rating: number;
  totalReviews: number;
  studentsCount: string;
  experience: string;
  credentials: string[];
  socialLinks: {
    linkedin: string;
    twitter: string;
    website: string;
  };
}

export interface CourseModule {
  title: string;
  description: string;
  lessons: number;
}

export interface Course {
  title: string;
  subtitle: string;
  duration: string;
  commitment: string;
  access: string;
  language: string;
  skill_level: string;
  certificate: boolean;
  modules: CourseModule[];
  youtube_intro: string;
  youtube_testimonials: string;
}

export interface Pricing {
  regular_price: number;
  discounted_price: number;
  currency: string;
  discount_percentage: number;
  offer_valid_until: string;
  payment_methods: string[];
  qr_code_image: string;
  razorpay_key: string;
}

export interface Bonus {
  title: string;
  description: string;
  value: number;
  icon: string;
}

export interface Testimonial {
  name: string;
  role: string;
  location: string;
  content: string;
  rating: number;
  image: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ReferralProgram {
  commission_rate: number;
  commission_amount: number;
  currency: string;
  unlimited_referrals: boolean;
  payment_cycle: string;
  marketing_materials: boolean;
  tracking_dashboard: boolean;
  minimum_payout: number;
}

export interface WhatsAppCommunity {
  name: string;
  members_count: number;
  join_link: string;
  features: string[];
  description: string;
}

export interface Contact {
  email: string;
  phone: string;
  office: string;
  support_hours: string;
  response_time: string;
  support_channels: string[];
}

export interface SocialProof {
  total_students: string;
  average_rating: number;
  completion_rate: string;
  success_stories: number;
  countries: number;
  featured_in: string[];
}

export interface CourseData {
  instructor: Instructor;
  course: Course;
  pricing: Pricing;
  bonuses: Bonus[];
  testimonials: Testimonial[];
  faq: FAQ[];
  referral_program: ReferralProgram;
  whatsapp_community: WhatsAppCommunity;
  contact: Contact;
  social_proof: SocialProof;
}

export const courseData: CourseData = courseDataJson as CourseData;

// Utility functions
export const getInstructor = () => courseData.instructor;
export const getCourse = () => courseData.course;
export const getPricing = () => courseData.pricing;
export const getBonuses = () => courseData.bonuses;
export const getTestimonials = () => courseData.testimonials;
export const getFAQ = () => courseData.faq;
export const getReferralProgram = () => courseData.referral_program;
export const getWhatsAppCommunity = () => courseData.whatsapp_community;
export const getContact = () => courseData.contact;
export const getSocialProof = () => courseData.social_proof;