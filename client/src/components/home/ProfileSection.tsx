import { useState } from "react";
import ProfileDialog from "./ProfileDialog";
import type { User } from "@/types/User";


interface Props {
  user: User;
}

const ProfileSection = ({ user }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-full p-3 rounded-xl hover:bg-slate-100 transition flex items-center gap-3"
      >
        {user.profile_image ? (
          <img
            src={user.profile_image}
            className="h-10 w-10 rounded-full"
          />
        ) : (
          <div className="h-10 w-10 rounded-full bg-blue-500 text-white flex items-center justify-center">
            {user.first_name[0]}
          </div>
        )}

        <div className="text-left">
          <p className="font-semibold">
            {user.first_name}
          </p>

          <p className="text-xs text-slate-500">
            {user.last_name}
          </p>
        </div>
      </button>

      <ProfileDialog
        open={open}
        onOpenChange={setOpen}
        user={user}
      />
    </>
  );
};

export default ProfileSection;