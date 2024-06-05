const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-500 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">hello</h1>
          <button
            className="bg-white hover:bg-gray-100 text-blue-500 font-bold py-2 px-4 rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </nav>
      {/* Add your main content here */}
    </div>
  );
};

export default Main;
