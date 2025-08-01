import { useEffect, useState } from "react";
import Sidebar from "../component/Sidebar";
import { getEngineer } from "../services/taskService";
import AddEngineer from "../component/AddEngineer";
import EditEngineer from "../component/EditEngineer";
import { editEngineer } from "../services/taskService";

const Engineer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);

  const [selectedEngineer, setSelectedEngineer] = useState(null);

  const handleModal = () => {
    setModalShow(true);
  };

  const handleModalHide = () => {
    setModalShow(false);
  };

  const handleEdit = (item) => {
    setSelectedEngineer(item);
    setEditModalShow(true);
  };

  const handleSave = async (updateData) => {
    const { _id, ...item } = updateData;
    try {
      await editEngineer(_id, item);
      alert("update successful");
    } catch (error) {
      console.error("Failed to update engineer:", error.message);
    }
  };

  const handleEditModalHide = () => {
    setEditModalShow(false);
  };

  useEffect(() => {
    setLoading(true);
    getEngineer()
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
          <h1 className="text-2xl font-semibold text-gray-800">Engineer</h1>
          <button
            onClick={handleModal}
            className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded hover:bg-blue-200 transition"
          >
            Add Engineer
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
                  Email
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border border-b">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border border-b">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {data.map((item, idx) => (
                <tr key={idx}>
                  <td className="px-6 py-4 text-sm text-gray-800 border">
                    {item.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 border">
                    {item.email}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 border">
                    {item.role}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 border">
                    <button
                      onClick={() => handleEdit(item)}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-1 px-3 rounded"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {modalShow && <AddEngineer close={handleModalHide} />}
      {editModalShow && (
        <EditEngineer
          close={handleEditModalHide}
          selectedEngineer={selectedEngineer}
          onSave={handleSave}
        />
      )}
    </>
  );
};
export default Engineer;
