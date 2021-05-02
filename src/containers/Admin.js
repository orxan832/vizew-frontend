import React, { Component } from "react";
import Table from "../components/elements/Table";
import AdminSidebar from "../components/sidebars/AdminSidebar";

const theaders = [
  "Dərsin kodu",
  "Dersin adi",
  "Sinif",
  "Muellimenin adi",
  "Muellimenin soyadi",
];
const data1 = [
  {
    code: 1,
    lessonName: "Riyaziyyat",
    class: "5",
    teacherName: "Gulnar",
    teacherSurname: "Sahbazli",
  },
];

const data2 = [
  {
    code: 1,
    lessonName: "Riyaziyyat",
    class: "5",
    teacherName: "Ali",
    teacherSurname: "Azizli",
  },
];

class Admin extends Component {
  state = {
    tabId: "v-pills-home",
  };

  changeTab = (tabId) => {
    this.setState({ tabId });
  };

  renderTab = () => {
    const { tabId } = this.state;
    switch (tabId) {
      case "v-pills-home":
        return <Table headers={theaders} data={data1} />;
      case "v-pills-user":
        return <Table headers={theaders} data={data2} />;
    }
  };

  render() {
    const { tabId } = this.state;
    return (
      <div className="container-fluid admin-container">
        <div className="row h-100">
          <AdminSidebar changeTab={this.changeTab} />
          <div className="col-sm-10">
            <div className="tab-content text-center mt-5 pt-5">
              <div
                className="tab-pane fade show active"
                id={tabId}
                role="tabpanel"
              >
                {this.renderTab()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
