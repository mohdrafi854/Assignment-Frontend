import { useEffect, useState } from "react";
import Sidebar from "../component/Sidebar";
import { getEngineer } from "../services/taskService";

const EngineerDashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    getEngineer()
      .then((res) => {
        setData(res.data)
        setError(null)
      })
      .catch((error) => {
        setError(error.message || "Something went wrong")
      }).finally(() => {
        setLoading(false)
      })
  }, []);

  if(error){
    return <p className="text-red-500">Error: {error}</p>
  }


  return (
    <>
      <Sidebar />
      <div className="ml-64 py-5 pr-4">
        <h1>Engineer Dashboard</h1>
        {
            loading && <p className="text-gray-500">Loading engineers...</p>
        }
        <div className="overflow-x-auto mt-6">
          <table className="min-w-full divide-y divide-gray-200 shadow rounded-lg">
            <thead className="border border-b">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                  Project
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {data.map((item, idx) => (
                <tr key={idx}>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {item.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {item.email}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800">{item.role}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    Alpha Project
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default EngineerDashboard;
