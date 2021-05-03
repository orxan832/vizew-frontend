import React, { Component } from "react";
import Table from "../components/elements/Table";
import AdminSidebar from "../components/sidebars/AdminSidebar";
import * as headers from "../helper/headers";
import axios from "../helper/axios";
import * as notification from "../helper/notification";
import { sweetConfirm } from "../helper/sweet";
import Modal from "../components/elements/Modal";

class Admin extends Component {
  state = {
    tabId: "v-pills-type",
    modalHeader: 'Teqlər',
    headers: {},
    data: [],
    form: {},
    modal: false
  };

  getData = async (tabId = "v-pills-type", modalHeader = 'Teqlər') => {
    let columns, result;
    switch (tabId) {
      case "v-pills-type":
        columns = headers.tag;
        result = await axios.get("/type/data");
        break;
      case "v-pills-user":
        columns = headers.user;
        result = await axios.get("/user/data");
        break;
      default:
        columns = headers.tag;
        result = await axios.get("/type/data");
        break;
    }
    await this.setState({ tabId, modalHeader, headers: columns, data: result.data });
  };

  deleteItem = (data) => {
    const { tabId } = this.state;
    const tab = tabId.split("-")[2];
    sweetConfirm(async () => {
      await axios.post(`/${tab}/CRUD`, { ...data, control: 3 });
      this.getData(tabId);
      notification.success("Məlumat müvəffəqiyyətlə silindi.");
    });
  };

  modalHandler = () => this.setState({ modal: !this.state.modal });

  insertOrUpdateHandler = (form = false) => {
    if (form) {
      this.setState({ form });
    }
    this.modalHandler();
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    const { tabId, modalHeader, headers, data, form, modal } = this.state;
    return (
      <div className="container-fluid admin-container">
        <div className="row h-100">
          <AdminSidebar getData={this.getData} />
          <div className="col-sm-10">
            <div className="tab-content text-center mt-5 pt-5">
              <div
                className="tab-pane fade show active"
                id={tabId}
                role="tabpanel"
              >
                <Table headers={headers} data={data} delete={this.deleteItem} insertOrUpdateHandler={this.insertOrUpdateHandler} />
                {modal && <Modal show={modal} hide={this.modalHandler} header={modalHeader} tabId={tabId} data={form} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
