import React, { Component } from "react";
import axios from "../helper/axios";
import { error } from "../helper/notification";
import { sweetInfo } from "../helper/sweet";
import { connect } from "react-redux";
import { login } from "../redux/actions/userActions";
import Overlay from "../components/UI/Overlay";
import Input from "../components/elements/Input";
import { Link } from "react-router-dom";

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

class Login extends Component {
  state = {
    login: {},
    errors: [],
    receiveError: false,
  };

  renderFormInputs = () => {
    const { login } = this.state;
    return inputs.map((input, i) => (
      <div className="form-group position-relative" key={i}>
        <Input
          type={input.type}
          name={input.name}
          changed={this.changeInputHandler}
          blurred={this.blurInputHandler}
          focused={this.focusInputHandler}
          value={login[input.name] || ""}
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
      login: {
        ...this.state.login,
        [e.target.name]: e.target.value,
      },
    });
  };

  blurInputHandler = async (e) => {
    try {
      const name = e.target.name;
      const { login } = this.state;
      const res = await axios.post(`/user/loginValidation`, login);
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

  submitHandler = (e) => {
    e.preventDefault();
    const { errors, receiveError } = this.state;
    if (!receiveError) {
      this.setState({ anythingHappened: true });
      error("Xahiş edirik giriş formunu doldurun");
    } else if (errors.length > 0) {
      errors.map((err) => this.setState({ [err.param + "Validation"]: true }));
      error("Xahiş edirik giriş formunu düzgün doldurun");
    } else {
      this.setState({ anythingHappened: false });
      this.props.login(this.state.login, this.props.history);
    }
  };

  componentDidMount() {
    const { isAuth, message, history } = this.props;
    if (isAuth) {
      history.replace("/");
    }
    if (message) {
      sweetInfo(message);
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
                  <h4>Giriş bölməsi</h4>
                  <div className="line" />
                </div>
                <form noValidate>
                  {this.renderFormInputs()}
                  <button
                    onClick={this.submitHandler}
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
                      <Link to="/forgot_password">
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
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.user.isAuth,
    message: state.user.message,
  };
};

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
