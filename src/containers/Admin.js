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
    tabId: "v-pills-ayah",
    modalHeader: 'Ayətlər',
    headers: {},
    data: [],
    formData: { control: 1 },
    modal: false
  };

  getData = async (tabId = this.state.tabId, modalHeader = this.state.modalHeader) => {
    let columns, result;
    switch (tabId) {
      case "v-pills-ayah":
        columns = headers.ayah;
        result = await axios.get("/ayah/data");
        break;
      case "v-pills-type":
        columns = headers.type;
        result = await axios.get("/type/data");
        break;
      default:
        columns = headers.ayah;
        result = await axios.get("/ayah/data");
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

  insertOrUpdateHandler = async (form = false) => {
    if (form) {
      await this.setState({ formData: { ...form, control: 2 } });
    }
    this.modalHandler();
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    const { tabId, modalHeader, headers, data, formData, modal } = this.state;
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
                {modal && <Modal formData={formData} show={modal} refresh={this.getData} hide={this.modalHandler} header={modalHeader} tabId={tabId} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
