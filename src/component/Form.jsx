import { useState } from "react";
import Forminput from "./Forminput";
import Formoutput from "./Formoutput";

function Form() {
  const [list, setList] = useState([]);

  const addData = (data) => {
    setList([data, ...list]);
  };

  const deleteData = (id) => {
    setList(list.filter((x) => x.id !== id));
  };

  return (
    <>
      <Forminput onAdd={addData} />
      <Formoutput list={list} onDelete={deleteData} />
    </>
  );
}

export default Form;
