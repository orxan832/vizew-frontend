import React, { useState, useEffect } from "react";
import axios from "../../helper/axios";
import * as notification from "../../helper/notification";
import { sweetConfirm } from "../../helper/sweet";
import Select from "react-select";
import { roles } from "../../helper/enum";
import { validation } from "../../helper/functions";

const Tag = (props) => {
  const [form, setForm] = useState({ ...props.form, password: "" });
  const [roleSelect, setRoleSelect] = useState([]);
  const [roleOption, setRoleOption] = useState("");
  const getData = () => {
    const roleSelectedData = [];
    roles.map((role) =>
      roleSelectedData.push({ label: role.name, value: role.code })
    );
    setRoleSelect(roleSelectedData);
    if (form.control === 2) {
      const { role } = props.form;
      const selectedRole = roles.find((r) => r.code === role);
      setRoleOption({ label: selectedRole.name, value: selectedRole.code });
    }
  };

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const selectChangeHandler = (option) => {
    setRoleOption(option);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { headers } = props;
    const { control, password } = form;
    form.role = roleOption.value;
    const access = validation(form, headers);
    if (access) {
      submitData();
    } else {
      if (control === 2 && password === "") submitData();
      else notification.error("Xanaları tam şəkildə doldurun!");
    }
  };

  const submitData = () => {
    const { tabId, modalHeader, getData, modalHandler } = props;
    const tab = tabId.split("-")[2];
    sweetConfirm(async () => {
      await axios.post(`/${tab}/CRUD`, { ...form });
      getData(tabId, modalHeader);
      modalHandler();
      notification.success(
        `Məlumat müvəffəqiyyətlə ${
          form.control === 1 ? "əlavə olundu" : "dəyişdirildi"
        }.`
      );
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="form-control bg-outline-white"
          name="full_name"
          placeholder="Ad Soyad"
          value={form.full_name || ""}
          onChange={changeHandler}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          className="form-control bg-outline-white"
          name="email"
          placeholder="Poçt ünvanı"
          value={form.email || ""}
          onChange={changeHandler}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control bg-outline-white"
          name="password"
          placeholder="Şifrə"
          value={form.password || ""}
          onChange={changeHandler}
        />
      </div>
      <div className="form-group">
        <Select
          options={roleSelect}
          isSearchable={false}
          value={roleOption}
          onChange={selectChangeHandler}
          placeholder="Rollar..."
          className="text-dark"
        />
      </div>
      <button type="submit" className="btn btn-success float-right">
        Yadda Saxla
      </button>
    </form>
  );
};

export default Tag;
