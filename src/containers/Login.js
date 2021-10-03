import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { sweetSuccess } from "../helper/sweet";
import { useSelector } from "react-redux";
import Input from "../components/elements/Input";
import { Link } from "react-router-dom";
import axios from "../helper/axios";
import { refreshToken } from "../helper/functions";
import { error } from "../helper/notification";

const inputs = [
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
];

const Login = () => {
  const [form, setForm] = useState({});
  const { user } = useSelector((state) => state.user);
  const history = useHistory();

  useEffect(() => {
    user && history.replace('/');
  }, [user, history]);

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

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post(`/user/login`, form);
      if (res.data.message) {
        const { token, message } = res.data;
        refreshToken(token)
        history.replace("/");
        sweetSuccess(message);
      } else {
        error(res.data);
      }
    } catch (err) {
      error("Xəta baş verdi: " + err);
    }
  };

  return (
    <div className="vizew-login-area section-padding-80">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            <div className="login-content">
              {/* Section Title */}
              <div className="section-heading">
                <h4>Giriş bölməsi</h4>
                <div className="line" />
              </div>
              <form noValidate>
                {renderFormInputs()}
                <button
                  onClick={submitHandler}
                  className="btn vizew-btn rounded w-100 mt-30"
                >
                  Daxil ol
                </button>
                <div className="text-center">
                  <div className="d-flex justify-content-between">
                    <Link to="/register">
                      <p
                        className="address-p"
                        data-tip="Qeydiyyatdan keçin"
                        data-place="bottom"
                        data-background-color="#AC382E"
                      >
                        Hesabınız yoxdur?
                      </p>
                    </Link>
                    <Link to="/forgot-password">
                      <p className="address-p">Şifrəni unutmusunuz?</p>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
