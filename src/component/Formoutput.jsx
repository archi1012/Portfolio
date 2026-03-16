function Formoutput({ list, onDelete }) {
  return (
    <div>
      <h2>Employee Data</h2>

      {list.length === 0 && <p>No employees added yet.</p>}

      {list.map((data) => (
        <div key={data.id} className="border p-3 my-2 flex gap-4 items-center">
          
        
          {data.image ? (
            <img 
              src={data.image}
              alt={data.ename}
              className="w-16 h-16 object-cover rounded"
            />
          ) : (
            <p>No image</p>
          )}

          <p>{data.ename}</p>
          <p>{data.task}</p>
          <p>{data.date}</p>

          <button 
            className="bg-red-500 text-white px-3 py-1 rounded"
            onClick={() => onDelete(data.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Formoutput;
