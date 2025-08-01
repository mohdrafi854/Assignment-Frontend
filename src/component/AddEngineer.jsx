import { useState } from "react";
import { addEngineer } from "../services/taskService";

const AddEngineer = ({ close }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");

  const handleAddEngineer = async (e) => {
    e.preventDefault();

    if (!name || !email || !role) {
      setMessage("All fields are required");
      return;
    }

    try {
      await addEngineer({ name, email, role });
      setMessage("Engineer created Successfull");
      close()
    } catch (error) {
        console.error(error.message, "Something went wrong")
    }
  };
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Add Engineer</h2>

          <form className="space-y-4" onSubmit={handleAddEngineer}>
            {message && <p>{message}</p>}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Role
              </label>
              <input
                type="text"
                onChange={(e) => setRole(e.target.value)}
                placeholder="Enter role"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <button
                onClick={close}
                type="button"
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Add Engineer
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddEngineer;
