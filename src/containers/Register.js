import React, { Component, useState } from "react";
import axios from "../helper/axios";
import { error, info } from "../helper/notification";
import { sweetConfirm, sweetInfo } from "../helper/sweet";
import { connect, useDispatch } from "react-redux";
import { register } from "../redux/actions/user";
import SendMail from "../components/UI/SendMail";
import Overlay from "../components/UI/Overlay";
import Input from "../components/elements/Input";
import { Link, useHistory } from "react-router-dom";

const inputs = [
  {
    type: "text",
    name: "full_name",
    placeholder: "Soyad",
  },
  {
    type: "email",
    name: "email",
    placeholder: "Poçt ünvanı",
  },
  {
    type: "password",
    name: "password",
    placeholder: "Şifrə",
  },
  {
    type: "password",
    name: "passwordRetry",
    placeholder: "Şifrə təkrarı",
  },
];

const Register = props => {
  const [form, setForm] = useState({});
  const [modal, setModal] = useState(false);
  const [code, setCode] = useState('');
  const [userCode, setUserCode] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const renderFormInputs = () => {
    return inputs.map((input, i) => (
      <div className="form-group position-relative" key={i}>
        <Input
          type={input.type}
          name={input.name}
          changed={changeInputHandler}
          value={form[input.name] || ""}
          className="vizew form-control text-white rounded"
          placeholder={input.placeholder}
        />
      </div>
    ));
  };

  const changeInputHandler = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const modalHandler = () => setModal(!modal);

  const alertHandler = (e) => {
    e.preventDefault();
    let access = true;
    inputs.map(input => {
      if (!form[input.name] || form[input.name === '']) {
        access = false;
      }
    });
    if (!access) {
      info('Formu tam doldurun.');
      return false;
    }
    else if (form.password !== form.passwordRetry) {
      info('Şifrə ilə şifrə təkrarı eyni deyil.');
      return false;
    }
    else {
      sendEmailCode();
    }
  };

  const sendEmailCode = async () => {
    try {
      const emailCode = Math.floor(1000 + Math.random() * 9000).toString();
      setCode(emailCode);
      console.log(emailCode);
      modalHandler();

      // const data = {
      //   email: form.email,
      //   code,
      // };
      // await axios.post(`/user/sendEmail`, data);

    } catch (err) {
      console.error(err);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (code === userCode) {
      const res = await axios.post('/user/register', form);
      history.replace('/login');
      sweetInfo(res.data);
    } else {
      error("Daxil etdiyiniz təsdiq kodu yalnışdır.");
    }
  };

  return (
    <div
      className="vizew-login-area section-padding-80"
      style={{ opacity: modal && "0.25" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            <div className="login-content">
              {/* Section Title */}
              <div className="section-heading">
                <h4>Qeydiyyat bölməsi</h4>
                <div className="line" />
              </div>
              <form>
                {renderFormInputs()}
                <button
                  onClick={alertHandler}
                  className="btn vizew-btn rounded w-100 mt-30"
                >
                  Qeydiyyatdan keçin
                </button>
                <div className="text-center">
                  <div className="d-flex justify-content-between">
                    <Link to="/login">
                      <p
                        className="address-p"
                        data-tip="Daxil olun"
                        data-place="bottom"
                        data-background-color="#AC382E"
                      >
                        Hesabınız var?
                      </p>
                    </Link>
                  </div>
                </div>
                <SendMail
                  modal={modal}
                  modalHandler={modalHandler}
                  changeCodeHandler={setUserCode}
                  userCode={userCode}
                  submitHandler={submitHandler}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;