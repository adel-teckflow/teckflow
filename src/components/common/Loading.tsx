

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 border-t-4 border-cyan-500 rounded-full animate-spin"></div>
        <div className="absolute inset-2 border-r-4 border-purple-500 rounded-full animate-spin reverse"></div>
        <div className="absolute inset-4 border-b-4 border-emerald-500 rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loading;
