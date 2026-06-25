export interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  mobile_number: string;
  resume_link: string | null;
  profile_image: string | null;
  skills: string[];
  created_at: string;
  updated_at: string;
}
