import { useEffect, useState } from "react";
import Sidebar from "../component/Sidebar";
import { getAssignment } from "../services/taskService";
import axios from "axios";

const Assignment = () => {
  const [data, setData] = useState([]);
  const [engineerId, setEngineerId] = useState("");
  const [projectId, setProjectId] = useState("");
  const [allocation, setAllocation] = useState("");
  const [assignedAt, setAssignedAt] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [msg, setMsg] = useState("")

  useEffect(() => {
    setLoading(true);
    getAssignment()
      .then((res) => {
        setData(res.data.assignments);
        setError(null);
      })
      .catch((error) => {
        setError(error, "Something went wrong");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      engineer: engineerId,
      project: projectId,
      allocation: Number(allocation),
      assignedAt,
    };

    try {
      const res = await axios.post("http://localhost:5001/api/assignments", payload);
      setMsg("Engineer assigned successfully!");
      console.log(res.data);
    } catch (err) {
      console.error("Assignment failed:", err);
      setMsg("Failed to assign engineer. Please try again.");
    }
  };

  return (
    <>
      <Sidebar />
      <div className="ml-64 py-5 pr-4">
        <div className="w-1/2 bg-white p-6 rounded">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Assign Engineer to Project
          </h2>
          {
            loading && <p>Loading...</p>
          }
          {
            error && <p>error</p>
          }
          {
            msg && <p>msg</p>
          }
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Project
              </label>
              <select
                value={projectId}
                onChange={(e) => setProjectId(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              >
                <option value="">Select a project</option>
                {data.map((item) => (
                  <option key={item.project._id} value={item.project._id}>
                    {item.project.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Engineer
              </label>
              <select
                value={engineerId}
                onChange={(e) => setEngineerId(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              >
                <option value="">Select an engineer</option>
                {data.map((item) => (
                  <option key={item.engineer._id} value={item.engineer._id}>
                    {item.engineer.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Allocation (%)
              </label>
              <input
                type="number"
                value={allocation}
                onChange={(e) => setAllocation(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Assignment Start Date
              </label>
              <input
                type="date"
                value={assignedAt}
                onChange={(e) => setAssignedAt(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Assign
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Assignment;
