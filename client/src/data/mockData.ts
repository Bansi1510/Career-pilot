import type { User } from "@/types/User";

export const userData: User = {
  id: "1",
  first_name: "Bansi",
  last_name: "Prajapati",
  email: "bansi@gmail.com",
  mobile_number: "9876543210",
  resume_link: "https://resume-link.com",
  profile_image: null,
  skills: ["ReactJS", "NodeJS", "PostgreSQL"],
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
};