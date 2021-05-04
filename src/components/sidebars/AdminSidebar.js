import React from "react";
import { FaBook, FaTags } from "react-icons/fa";

const AdminSidebar = (props) => {
  return (
    <div className="col-sm-2 table-dark">
      <h2 className="text-center font-weight-bold font-italic text-light mt-5">
        Vizew Admin Panel
      </h2>
      <div className="nav flex-column nav-pills mt-5 pt-5">
        <a
          className="nav-link active text-center"
          onClick={() => props.getData("v-pills-ayah", 'Ayətlər')}
          data-toggle="pill"
          href="#v-pills-ayah"
          role="tab"
        >
          <FaBook size="1.5rem" className="pr-2" />
          Ayətlər
        </a>
        <a
          className="nav-link text-center mt-2"
          onClick={() => props.getData("v-pills-type", 'Teqlər')}
          data-toggle="pill"
          href="#v-pills-type"
          role="tab"
        >
          <FaTags size="1.5rem" className="pr-2" />
          Teqlər
        </a>
      </div>
    </div>
  );
};

export default AdminSidebar;
