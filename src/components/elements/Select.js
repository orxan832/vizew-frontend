import React from "react";
import Select from "react-select";

const customStyles = {
  control: base => ({
    ...base,
    padding: '5px 0'
  }),
  menu: provided => ({ ...provided, zIndex: 9999 })
};

const AdminSelect = (props) => {
  return (
    <Select
      isMulti={props.multi}
      styles={customStyles}
      className="text-dark"
      options={props.options}
      placeholder={props.placeholder || "Teqlər..."}
      onChange={props.changed}
      value={props.value}
    />
  );
};

export default AdminSelect;
