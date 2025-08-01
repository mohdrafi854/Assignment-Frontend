import { useState } from "react";
import { addProject } from "../services/taskService";

const AddProjects = ({ close }) => {
  const [name, setName] = useState("");
  const [client, setClient] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [message, setMessage] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !client || !description || !status || !startDate || !endDate) {
      setMessage("All fields are requireds");
      return;
    }

    try {
      await addProject({
        name,
        client,
        description,
        status,
        startDate,
        endDate,
      });
      setName("");
      setClient("");
      setDescription("");
      setStatus("");
      setStartDate("");
      setEndDate("");
      setMessage("Add Project successfull");
    } catch (error) {
      setMessage(error.message, "Something went wrong");
    }
  };

  return (
    <>
      <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-lg shadow-lg p-6">
          <h2 class="text-2xl font-semibold mb-4">Add Project</h2>

          <form class="space-y-4" onSubmit={handleSubmit}>
            {message && (
              <div className="mb-4 rounded-md bg-green-100 p-4">
                <p className="text-sm font-medium text-green-800">{message}</p>
              </div>
            )}
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="Project name"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Client
              </label>
              <input
                type="text"
                onChange={(e) => setClient(e.target.value)}
                placeholder="Client name"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                rows="3"
                placeholder="Project description"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                onChange={(e) => setStatus(e.target.value)}
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select status</option>
                <option value="Planned">Planned</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Start Date
              </label>
              <input
                type="date"
                onChange={(e) => setStartDate(e.target.value)}
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                End Date
              </label>
              <input
                type="date"
                onChange={(e) => setEndDate(e.target.value)}
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div class="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={close}
                class="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default AddProjects;
