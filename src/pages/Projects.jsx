import { useEffect, useState } from "react";
import Sidebar from "../component/Sidebar";
import { getProject } from "../services/taskService";
import AddProjects from "../component/AddProjects";

const Projects = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalShow, setModalShow] = useState(false)

  const handleModal = () => {
    setModalShow(true)
  }

  const handleModalHide = () => {
    setModalShow(false)
  }

  useEffect(() => {
    setLoading(true);
    getProject()
      .then((res) => {
        setData(res.data);
        setError(null);
      })
      .catch((error) => {
        setError(error.message, "Something went wrong");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }
  return (
    <>
      <Sidebar />

      <div className="ml-64 py-5 pr-4">
        <div className="flex items-center justify-between px-6 py-1 bg-white">
          <h1 className="text-2xl font-semibold text-gray-800">Projects</h1>
          <button onClick={handleModal} className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded hover:bg-blue-200 transition">
            New Project
          </button>
        </div>
        {loading && <p className="text-gray-500">Loading engineers...</p>}
        <div className="overflow-x-auto mt-6">
          <table className="min-w-full divide-y divide-gray-200 shadow rounded-lg">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border border-b">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border border-b">
                  Client
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border border-b">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border border-b">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border border-b">
                  Start Date
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border border-b">
                  End Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {data.map((item, idx) => (
                <tr key={idx}>
                  <td className="px-6 py-4 text-sm text-gray-800 border border-b">
                    {item.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 border border-b">
                    {item.client}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 border border-b w-[300px]">
                    {item.description}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 border border-b">
                    {item.status}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 border border-b">
                    {new Date(item.startDate).toLocaleDateString("en-us",{year:"numeric",month:"short",day:"numeric"})}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 border border-b">
                     {new Date(item.endDate).toLocaleDateString("en-us",{year:"numeric",month:"short",day:"numeric"})}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {
        modalShow && <AddProjects close={handleModalHide} />
      }
    </>
  );
};
export default Projects;
