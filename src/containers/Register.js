import React, { Component } from "react";
import axios from "../helper/axios";
import { error } from "../helper/notification";
import { sweetConfirm } from "../helper/sweet";
import { connect } from "react-redux";
import { register } from "../redux/actions/userActions";
import SendMail from "../components/UI/SendMail";
import Overlay from "../components/UI/Overlay";
import Input from "../components/elements/Input";
import { Link } from "react-router-dom";

const inputs = [
  {
    type: "text",
    name: "name",
    placeholder: "Ad",
  },
  {
    type: "text",
    name: "surname",
    placeholder: "Soyad",
  },
  {
    type: "text",
    name: "username",
    placeholder: "İstifadəçi adı",
  },
  {
    type: "number",
    name: "age",
    placeholder: "İstifadəçi yaşı",
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

class Register extends Component {
  state = {
    register: {},
    errors: [],
    receiveError: false,
    code: "",
    userCode: "",
    modal: false,
  };

  renderFormInputs = () => {
    const { register } = this.state;
    return inputs.map((input, i) => (
      <div className="form-group position-relative" key={i}>
        <Input
          type={input.type}
          name={input.name}
          changed={this.changeInputHandler}
          blurred={this.blurInputHandler}
          focused={this.focusInputHandler}
          value={register[input.name] || ""}
          className={
            this.state[`${input.name}Validation`] || this.state.anythingHappened
              ? "form-control text-white rounded border border-danger"
              : "form-control text-white rounded"
          }
          placeholder={input.placeholder}
        />
        {this.state[`${input.name}Validation`] &&
          this.validationHandler(input.name)}
        {this.state.anythingHappened && this.validationHandler("")}
      </div>
    ));
  };

  changeInputHandler = (e) => {
    this.setState({
      ...this.state,
      register: {
        ...this.state.register,
        [e.target.name]: e.target.value,
      },
    });
  };

  blurInputHandler = async (e) => {
    try {
      const name = e.target.name;
      const { register } = this.state;
      const res = await axios.post(`/user/registerValidation`, register);
      const result = res.data.errors.find((err) => err.param === name);
      await this.setState({
        [name + "Validation"]: result ? true : false,
        errors: res.data.errors,
        receiveError: true,
      });
    } catch (err) {
      console.error(err);
    }
  };

  focusInputHandler = async (e) => {
    const name = e.target.name;
    const { errors } = this.state;
    this.setState({ [name + "Validation"]: false, anythingHappened: false });
    if (errors) {
      const newErrors = errors.filter((err) => err.param !== name);
      await this.setState({ errors: newErrors, receiveError: true });
    }
  };

  validationHandler = (name) => {
    const { errors } = this.state;
    if (errors.length > 0) {
      const ownError = errors.find((err) => err.param === name);
      if (ownError) {
        return <Overlay msg={ownError.msg} />;
      }
    } else {
      return <Overlay msg="Bu xananın doldurulması məcburidir!" />;
    }
  };

  alertHandler = (e) => {
    e.preventDefault();
    const { errors, receiveError } = this.state;
    if (!receiveError) {
      this.setState({ anythingHappened: true });
      error("Xahiş edirik qeydiyyat formunu doldurun.");
    } else if (errors.length > 0) {
      errors.map((err) => this.setState({ [err.param + "Validation"]: true }));
      error("Xahiş edirik qeydiyyat formunu düzgün doldurun.");
    } else {
      sweetConfirm(this.sendEmailCode);
    }
  };

  modalHandler = () => {
    this.setState({ modal: !this.state.modal });
  };

  changeCodeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  sendEmailCode = async () => {
    try {
      this.modalHandler();
      await this.setState({
        code: Math.floor(1000 + Math.random() * 9000).toString(),
      });
      const { register, code } = this.state;
      const data = {
        email: register.email,
        code: code,
      };
      console.log(code);
      await axios.post(`/user/sendEmail`, data);
    } catch (err) {
      console.error(err);
    }
  };

  submitHandler = (e) => {
    const { code, userCode, register } = this.state;
    if (code === userCode) {
      this.props.register(register, this.props.history);
    } else {
      error("Daxil etdiyiniz təsdiq kodu yalnışdır.");
    }
  };

  componentDidMount() {
    if (this.props.state.user.isAuth) {
      this.props.history.replace("/");
    }
  }

  render() {
    return (
      <div
        className="vizew-login-area section-padding-80"
        style={{ opacity: this.state.modal && "0.25" }}
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
                <form noValidate>
                  {this.renderFormInputs()}
                  <button
                    onClick={this.alertHandler}
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
                      <Link to="/login">
                        <p className="address-p">Şifrəni unutmusunuz?</p>
                      </Link>
                    </div>
                  </div>
                  <SendMail
                    show={this.state.modal}
                    modalHandler={this.modalHandler}
                    changeCodeHandler={this.changeCodeHandler}
                    userCode={this.state.userCode}
                    submitHandler={this.submitHandler}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state,
  };
};

const mapDispatchToProps = {
  register,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
