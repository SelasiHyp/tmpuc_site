import React from 'react';
import '../Styles/FormInputs.css';

const LabeledInput = ({ label, id, type, placeholder, style}) => {
  return (
    <div className="input-container">
      <label htmlFor={id} className="input-label">{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="input-field"
        style={style}
      />
    </div>
  );
};

export default LabeledInput;
