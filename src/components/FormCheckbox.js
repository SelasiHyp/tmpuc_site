import React from "react";
import '../Styles/FormCheckbox.css';

const FormCheckbox = ({ label, type, name, value, onChange, id, style}) => {
  
  return (
    <div className="checkbox-container" >
      <input
        style={style}
        id={id}
        type={type}
        className="checkbox"
        name={name}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={id} className="checkbox-label">{label}</label>

    </div>
  );
};

export default FormCheckbox;
