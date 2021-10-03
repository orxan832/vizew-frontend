import React, { useState, useEffect, useCallback } from "react";
import Table from "../components/elements/Table";
import AdminSidebar from "../components/sidebars/AdminSidebar";
import * as theaders from "../helper/headers";
import axios from "../helper/axios";
import * as notification from "../helper/notification";
import { sweetConfirm } from "../helper/sweet";
import Modal from "../components/elements/Modal";
import { FaHome } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/actions/user";

const Admin = () => {
  const [tabId, setTabId] = useState("");
  const [modalHeader, setModalHeader] = useState("");
  const [headers, setHeaders] = useState({});
  const [data, setData] = useState([]);
  const [form, setForm] = useState({ control: 1 });
  const [modal, setModal] = useState(false);
  const [tags, setTags] = useState(false);

  const { id, role } = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  const getData = useCallback(async (tabId = "v-pills-ayah", modalHeader = "Ayətlər") => {
    if (role !== undefined) {
      const tab = tabId.split("-")[2];
      let get_result;
      if (tab === 'article' && role === 1) get_result = axios.get(`/${tab}/data/${id}`);
      else get_result = axios.get(`/${tab}/data`);
      const get_tags = axios.get("/tag/data");
      const [result, tags] = await Promise.all([get_result, get_tags]);
      const columns = theaders[tab];
      setTabId(tabId);
      modalHeader && setModalHeader(modalHeader);
      setHeaders(columns);
      setData(result.data);
      setTags(tags.data);
    }
  }, [id, role]);

  useEffect(() => {
    getData();
  }, [getData]);

  const deleteItem = (data) => {
    try {
      const tab = tabId.split("-")[2];
      sweetConfirm(async () => {
        const res = await axios.post(`/${tab}/CRUD`, { ...data, control: 3 });
        if (res.data) {
          getData(tabId);
          notification.success("Məlumat müvəffəqiyyətlə silindi.");
        } else notification.error(`Xəta baş verdi`);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const modalHandler = () => setModal(!modal);

  const insertOrUpdateHandler = async (form = false, articleName = false) => {
    if (articleName === 'v-pills-article') {
      const result = await axios.get(`/user/findExtraByUserId/${id}`);
      if (result.data === '') {
        sweetConfirm(() => {
          window.location.replace('/user');
        }, 'Məlumatlarınızı tam olaraq doldurmadan məqalə yaza bilmərsiniz. Məlumat bölməsinə getmək istəyirsinizmi?');
        return false;
      }
    }
    if (form) {
      setForm({ ...form, control: 2 });
    } else {
      setForm({ control: 1 });
    }
    modalHandler();
  };

  const tableProps = {
    headers,
    data,
    form,
    tags,
    modalHeader,
    tabId,
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

  const logoutUser = () => {
    sweetConfirm(() => {
      dispatch(logout());
      window.location.replace('/login');
    });
  };

  return (
    <div className="container-fluid admin-container">
      <div className="row h-100">
        <AdminSidebar getData={getData} />
        <div className="col-sm-10 px-0">
          <div className="table-dark border-bottom border-secondary pt-3">
            <div className='d-flex justify-content-end pb-1 mr-2'>
              <a href='/' className="btn table-dark">
                <FaHome
                  title="Ana səhifəyə dön"
                  className="text-light"
                  size="2rem"
                />
              </a>
              <Link to='#' className="btn table-dark" onClick={logoutUser}>
                <FiLogOut
                  title="Hesabdan çıx"
                  className="text-light"
                  size="2rem"
                />
              </Link>
            </div>
          </div>
          <div className="tab-content text-center mt-5">
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