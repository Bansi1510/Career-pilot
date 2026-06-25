import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";

import type { User } from "@/types/User";

interface Props {
  open: boolean;
  onOpenChange: (value: boolean) => void;
  user: User;
}

const ProfileDialog = ({
  open,
  onOpenChange,
  user,
}: Props) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-full max-w-6xl rounded-3xl border border-slate-200 bg-white p-8 text-slate-900 shadow-2xl">

        {/* Edit Button */}
        <button
          onClick={() => console.log("EDIT PROFILE API")}
          className="absolute right-14 top-4 rounded-lg p-2 transition hover:bg-slate-100"
        >
          <Pencil className="h-5 w-5 text-blue-500" />
        </button>

        {/* Header */}
        <div className="flex flex-col items-center">

          {user.profile_image ? (
            <img
              src={user.profile_image}
              alt={user.first_name}
              className="h-24 w-24 rounded-full border-2 border-slate-200 object-cover"
            />
          ) : (
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-500 text-3xl font-bold text-white">
              {user.first_name.charAt(0).toUpperCase()}
            </div>
          )}

          <h2 className="mt-4 text-2xl font-bold">
            {user.first_name} {user.last_name}
          </h2>

          <p className="text-sm text-slate-500">
            Career Pilot User
          </p>
        </div>

        {/* Details Grid */}
        <div className="mt-8 grid gap-4 md:grid-cols-2">

          {/* Email */}
          <div className="rounded-2xl border border-slate-200 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Email
            </p>

            <p className="mt-1 font-medium break-all">
              {user.email}
            </p>
          </div>

          {/* Mobile */}
          <div className="rounded-2xl border border-slate-200 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Mobile Number
            </p>

            <p className="mt-1 font-medium">
              {user.mobile_number}
            </p>
          </div>

          {/* Resume */}
          <div className="rounded-2xl border border-slate-200 p-4 md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Resume
            </p>

            {user.resume_link ? (
              <a
                href={user.resume_link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block font-medium text-blue-600 hover:underline"
              >
                View Resume
              </a>
            ) : (
              <p className="mt-1 text-slate-500">
                Resume not uploaded
              </p>
            )}
          </div>

          {/* Skills */}
          <div className="rounded-2xl border border-slate-200 p-4 md:col-span-2">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Skills
            </p>

            <div className="flex flex-wrap gap-2">
              {user.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Logout */}
          <div className="md:col-span-2">
            <Button
              className="h-11 w-full rounded-xl bg-slate-900 font-semibold text-white hover:bg-slate-800"
              onClick={() => console.log("LOGOUT API")}
            >
              Logout
            </Button>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileDialog;