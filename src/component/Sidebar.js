import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate()
  const role = localStorage.getItem("role");

  let dashboardUrl = ""
  if(role === "Engineer"){
    dashboardUrl = "engineer-dashboard"
  }else{
    dashboardUrl = "admin-dashboard"
  }

  const menuItems = [
    { name: "Dashboard", path: `/${dashboardUrl}`},
    { name: "Engineers", path:"/engineers"},
    { name: "Projects", path:"/projects"},
    { name: "Assignments", path:"/assignments"},
  ];

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?")
    if(!confirmLogout) return

    localStorage.clear()
    navigate("/")
  }

  return (
    <div className="h-screen w-64 text-gray fixed py-5">
      <div className="text-4 flex flex-col space-y-2 px-7 text-left">
        {`User Role - ${role}`}
      </div>
      <nav className="mt-2 flex flex-col space-y-1 px-4">
        {menuItems.map((item, idx) => (
          <NavLink
            key={idx} to={item.path}
            className={({isActive}) => `flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-sky-500/50 transition ${isActive ? "bg-sky-500/10" : "bg-white"}`} end
          >
            <span className="text-md">{item.name}</span>
          </NavLink>
        ))}
      </nav>
      <div className="px-4 mt-4">
      <button
      onClick={handleLogout}
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
    >
      Logout
    </button>
      </div>
    </div>
  );
};
export default Sidebar