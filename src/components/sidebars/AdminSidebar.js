import React from "react";
import { FaTags } from "react-icons/fa";

const AdminSidebar = (props) => {
  return (
    <div className="col-sm-2 table-dark">
      <h2 className="text-center font-weight-bold font-italic text-light mt-5">
        Vizew Admin Panel
      </h2>
      <div className="nav flex-column nav-pills mt-5 pt-5">
        <a
          className="nav-link active text-center"
          onClick={() => props.getData("v-pills-home")}
          data-toggle="pill"
          href="#v-pills-home"
          role="tab"
        >
          <FaTags size="1.5rem" className="pr-2" />
          Teqlər
        </a>
        <a
          className="nav-link text-center mt-2"
          onClick={() => props.getData("v-pills-user")}
          data-toggle="pill"
          href="#v-pills-user"
          role="tab"
        >
          <FaTags size="1.5rem" className="pr-2" />
          Userler
        </a>
      </div>
    </div>
  );
};

export default AdminSidebar;
