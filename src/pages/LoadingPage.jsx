const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center mt-48">
      <div className="flex items-center">
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    </div>
  );
};

export default LoadingPage;
