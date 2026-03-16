import { useState } from "react";

function Forminput({ onAdd }) {
  const [data, setData] = useState({
    image: "",
    ename: "",
    task: "",
    date: ""
  });

  const change = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    onAdd({ id: Date.now(), ...data });
    setData({ image: "", ename: "", task: "", date: "" });
  };

  return (
    <nav>
      <form onSubmit={submit}>
        <label>Image URL:</label>
        <input
          className="bg-gray-200 border-2 border-gray-300 rounded-lg p-2 w-min-full"
          type="text"
          name="image"
          value={data.image}
          onChange={change}
        />

        <label>Employee Name:</label>
        <input
          className="bg-gray-200 border-2 border-gray-300 rounded-lg p-2 w-min-full text-black"
          type="text"
          name="ename"
          value={data.ename}
          onChange={change}
        />

        <label>Task:</label>
        <input
          className="bg-gray-200 border-2 border-gray-300 rounded-lg p-2 w-min-full text-black"
          type="text"
          name="task"
          value={data.task}
          onChange={change}
        />

        <label>Date:</label>
        <input
          className="bg-gray-200 border-2 border-gray-300 rounded-lg p-2 w-min-full text-black"
          type="date"
          name="date"
          value={data.date}
          onChange={change}
        />

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Add Employee
        </button>
      </form>
    </nav>
  );
}

export default Forminput;
