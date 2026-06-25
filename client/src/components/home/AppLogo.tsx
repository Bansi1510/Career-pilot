const AppLogo = () => {
  return (
    <div className="flex items-center gap-3 px-2 py-3">

      <img
        src="/logo2.png"
        alt="Career Pilot"
        className="h-10 w-10 object-contain"
      />

      <span className="text-lg font-bold">
        Career Pilot
      </span>

    </div>
  );
};

export default AppLogo;