import Sidebar from "../component/Sidebar";
import Manage from "../component/Manage";

const AdminDashboard = () => {
  const data = {
    engineers: 120,
    projects: 18,
    assignments: 45,
    capacity: "72%",
  };
  const cards = [
    { title: "Total Engineers", value: data.engineers, color: "bg-blue-500" },
    { title: "Projects", value: data.projects, color: "bg-green-500" },
    { title: "Assignments", value: data.assignments, color: "bg-purple-500" },
    {
      title: "Available Capacity",
      value: data.capacity,
      color: "bg-yellow-500",
    },
  ];
  return (
    <>
    <Sidebar />
    <div className="ml-64 py-5">
      <h1>Admmin Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`rounded-xl shadow-md text-white p-6 ${card.color} hover:scale-105 transition-transform duration-300`}
          >
            <h2 className="text-lg font-semibold">{card.title}</h2>
            <p className="text-2xl font-bold mt-2">{card.value}</p>
          </div>
        ))}
      </div>
      <Manage title="Manage Engineers" btnList="List Engineers" btnAdd="Add Engineers" />
      <Manage title="Manage Projects" btnList="List Projects" btnAdd="Add Project" />
    </div>
    </>
  );
};
export default AdminDashboard;
