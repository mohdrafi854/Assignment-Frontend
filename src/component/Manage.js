const Manage = ({title, btnList, btnAdd}) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">{title}</h1>

      <div className="flex gap-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          {btnList}
        </button>

        <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
          {btnAdd}
        </button>
      </div>
    </div>
  );
};

export default Manage
