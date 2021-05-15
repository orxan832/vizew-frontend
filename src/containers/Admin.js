import React, { useState, useEffect } from "react";
import Table from "../components/elements/Table";
import AdminSidebar from "../components/sidebars/AdminSidebar";
import * as theaders from "../helper/headers";
import axios from "../helper/axios";
import * as notification from "../helper/notification";
import { sweetConfirm } from "../helper/sweet";
import Modal from "../components/elements/Modal";

const Admin = () => {
  const [tabId, setTabId] = useState("");
  const [modalHeader, setModalHeader] = useState("");
  const [headers, setHeaders] = useState({});
  const [data, setData] = useState([]);
  const [form, setForm] = useState({ control: 1 });
  const [modal, setModal] = useState(false);
  const [tags, setTags] = useState(false);

  const getData = async (tabId = "v-pills-ayah", modalHeader = "Ayətlər") => {
    const tab = tabId.split("-")[2];
    const get_result = axios.get(`/${tab}/data`);
    const get_tags = axios.get("/tag/data");
    const [result, tags] = await Promise.all([get_result, get_tags]);
    const columns = theaders[tab];
    setTabId(tabId);
    modalHeader && setModalHeader(modalHeader);
    setHeaders(columns);
    setData(result.data);
    setTags(tags.data);
  };

  const deleteItem = (data) => {
    const tab = tabId.split("-")[2];
    sweetConfirm(async () => {
      await axios.post(`/${tab}/CRUD`, { ...data, control: 3 });
      getData(tabId);
      notification.success("Məlumat müvəffəqiyyətlə silindi.");
    });
  };

  const modalHandler = () => setModal(!modal);

  const insertOrUpdateHandler = async (form = false) => {
    if (form) {
      setForm({ ...form, control: 2 });
    } else {
      setForm({ control: 1 });
    }
    modalHandler();
  };

  useEffect(() => {
    getData();
  }, []);

  const tableProps = {
    headers,
    data,
    form,
    tags,
    modalHeader,
    modalHandler,
    insertOrUpdateHandler,
    deleteItem,
  };
  const modalProps = {
    headers,
    form,
    tags,
    modal,
    modalHeader,
    tabId,
    getData,
    modalHandler,
  };

  return (
    <div className="container-fluid admin-container">
      <div className="row h-100">
        <AdminSidebar getData={getData} />
        <div className="col-sm-10">
          <div className="tab-content text-center mt-5 pt-5">
            <div
              className="tab-pane fade show active"
              id={tabId}
              role="tabpanel"
            >
              <Table {...tableProps} />
              <Modal {...modalProps} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
