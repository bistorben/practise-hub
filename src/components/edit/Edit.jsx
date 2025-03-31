import "./Edit.css";
import { useState } from "react";

const Edit = () => {
  const [label, setLabel] = useState("");
  const [href, setHref] = useState("");
  const [external, setExternal] = useState(false);

  const handleLabelChange = (e) => {
    setLabel(e.target.value);
  };

  const handleHrefChange = (e) => {
    setHref(e.target.value);
  };

  const handleExternalChange = (e) => {
    setExternal(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newLink = {
      label,
      href,
      external,
    };

    try {
      const res = await fetch("http://localhost:5005/api/hero-bosch", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newLink),
      });

      const data = await res.json();
      console.log("server response", data);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <section className="Edit">
      <h1>Edit components</h1>

      <form className="hero-bosch-form" onSubmit={handleSubmit}>
        <h4>Edit HeroBoschCom</h4>
        <div className="form-group">
          <label htmlFor="label">Link-Label:</label>
          <input
            type="text"
            id="label"
            value={label}
            onChange={handleLabelChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="href">Link-Url</label>
          <input
            type="url"
            id="href"
            value={href}
            onChange={handleHrefChange}
          />
        </div>
        <div className="checkbox-group">
          <label htmlFor="external">External Link:</label>
          <input
            type="checkbox"
            id="external"
            checked={external}
            onChange={handleExternalChange}
          />
        </div>
        <button type="submit">save changes</button>
      </form>
    </section>
  );
};

export default Edit;
