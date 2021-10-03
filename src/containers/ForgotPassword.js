import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Input from "../components/elements/Input";
import axios from "../helper/axios";
import { error, success } from "../helper/notification";
import SendMail from "../components/UI/SendMail";

const ForgotPassword = () => {

    const [form, setForm] = useState({});
    const [modal, setModal] = useState(false);
    const [code, setCode] = useState('');
    const [userCode, setUserCode] = useState('');
    const [isAccepted, setIsAccepted] = useState(false);

    const history = useHistory();

    const changeInputHandler = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const modalHandler = () => setModal(!modal);

    const sendEmailCode = async e => {
        try {
            e.preventDefault();
            const isExistEmail = await axios.post('/user/checkIsExistEmail', { email: form.email });
            if (isExistEmail.data) {
                const emailCode = Math.floor(1000 + Math.random() * 9000).toString();
                setCode(emailCode);
                modalHandler();
                const data = { email: form.email, code: emailCode };
                await axios.post(`/user/sendEmail`, data);
            } else return error('Daxil etdiyiniz poçt ünvanı yanlışdır.')
        } catch (err) {
            console.error(err);
        }
    };

    const checkIsValidUserCode = () => {
        if (code === userCode) {
            modalHandler();
            setIsAccepted(true);
        } else {
            error("Daxil etdiyiniz təsdiq kodu yalnışdır.");
        }
    }

    const submitHandler = async e => {
        try {
            e.preventDefault();
            const res = await axios.post('/user/changePassword', form);
            if (res.data) {
                history.replace('/login');
                success('Şifrəniz müvəffəqiyyətlə dəyişdirildi.');
            }
        } catch (err) {
            error('Xəta baş verdi');
            console.log(err);
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
                                <h4>Şifrənin bərpası</h4>
                                <div className="line" />
                            </div>
                            <form>
                                {!isAccepted ? <Input
                                    type='email'
                                    name='email'
                                    changed={changeInputHandler}
                                    value={form.email || ''}
                                    className="vizew form-control text-white rounded"
                                    placeholder='Poçt ünvanı'
                                /> :
                                    <Input
                                        type='password'
                                        name='password'
                                        changed={changeInputHandler}
                                        value={form.password || ''}
                                        className="vizew form-control text-white rounded"
                                        placeholder='Şifrə'
                                    />}
                                <button onClick={isAccepted ? submitHandler : sendEmailCode} className="btn vizew-btn rounded w-100 mt-30">
                                    {isAccepted ? 'Təsdiq et' : 'Təsdiq kodunu al'}
                                </button>
                            </form>
                            <SendMail
                                modal={modal}
                                modalHandler={modalHandler}
                                changeCodeHandler={setUserCode}
                                userCode={userCode}
                                submitHandler={checkIsValidUserCode}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;