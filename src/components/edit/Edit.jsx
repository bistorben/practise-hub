import "./Edit.css";
import { useState } from "react";

const Edit = () => {
  const [label, setLabel] = useState("");

  const handleLabelChange = (e) => {
    setLabel(e.target.value);
  };

  return (
    <section className="Edit">
      <h1>Edit components</h1>
      <input type="text" value={label} onChange={handleLabelChange} />
    </section>
  );
};

export default Edit;
