import React, { useEffect, useState } from "react";
import axios from "../helper/axios";
import { error, info, success } from "../helper/notification";
import { useSelector } from "react-redux";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { refreshToken } from "../helper/functions";
const jwt = require("jsonwebtoken");

const mainInputs = [
    {
        type: "text",
        name: "full_name",
        key: "full_name",
        placeholder: "Adı və soyadı",
    },
    // {
    //     type: "email",
    //     name: "email",
    //     key: "email",
    //     placeholder: "Poçt ünvanı",
    // }
];

const additionalInputs = [
    {
        type: "date",
        name: "birth_date",
        key: "birth_date",
        placeholder: "Doğum tarixi",
    },
    {
        type: "text",
        name: "profession",
        key: "profession",
        placeholder: "İxtisas",
    },
    {
        type: "text",
        name: "about",
        key: "about",
        placeholder: "Haqqında",
    },
    {
        type: "text",
        name: "facebook",
        key: "facebook",
        placeholder: "Facebook Linki",
    },
    {
        type: "text",
        name: "twitter",
        key: "twitter",
        placeholder: "Twitter Linki",
    },
    {
        type: "file",
        key: "image",
        placeholder: "Şəkil",
    },
];

const User = () => {

    const [mainForm, setMainForm] = useState({});
    const [additionalForm, setAdditionalForm] = useState({});
    const [additionalFormCopy, setAdditionalFormCopy] = useState({});
    const [isMain, setIsMain] = useState(true);

    const { user } = useSelector(state => state.user);

    useEffect(() => {
        let cancel = false;
        const getData = async () => {
            if (user) {
                const { id, email, full_name, role } = user;
                setMainForm({ id, email, full_name, role });
                const res = await axios.get(`/user/findExtraByUserId/${id}`);
                if (cancel) return;
                if (res.data) {
                    setAdditionalForm(res.data);
                    setAdditionalFormCopy(res.data);
                } else setAdditionalForm({ user_id: id });
            } else return false;
        }
        getData();

        return () => cancel = true;
    }, [user]);

    const renderInputsByType = inputsByType => {
        return inputsByType.map((input, i) => (
            <div className="form-group position-relative" key={i}>
                {input.name ?
                    <input
                        type={input.type}
                        name={input.name}
                        onChange={isMain ? changeMainInputHandler : changeAdditionalInputHandler}
                        value={isMain ? (mainForm[input.name] || "") : (additionalForm[input.name] || "")}
                        className="vizew form-control text-white rounded"
                        placeholder={input.placeholder}
                    /> :
                    <input
                        type={input.type}
                        onChange={changeAdditionalFileInputHandler}
                        className="vizew form-control text-white rounded"
                        placeholder={input.placeholder} />
                }

            </div>
        ));
    };

    const changeMainInputHandler = e => setMainForm({ ...mainForm, [e.target.name]: e.target.value });

    const changeAdditionalInputHandler = e => setAdditionalForm({ ...additionalForm, [e.target.name]: e.target.value });

    const changeAdditionalFileInputHandler = e => {
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onload = e => setAdditionalForm(prev => ({ ...prev, image: e.target.result }));
        reader.readAsDataURL(file);
    }

    const submitHandler = async e => {
        e.preventDefault();
        isMain ? submitMainForm() : submitAdditionalForm();
    };

    const submitMainForm = async () => {
        try {
            const isValid = validation(mainInputs, mainForm);
            if (!isValid) return info('Zəhmət olmasa formu tam doldurun');
            const isEqual = equality(mainInputs, mainForm);
            if (isEqual) return info('Form əvvəlki kimidir. Zəhmət olmasa yadda saxlamaq üçün dəyişiklik edin');
            const res = await axios.post('/user/CRUD', { ...mainForm, control: 2, password: '' });
            if (res.data === 'Success') {
                const { email, full_name, id, role } = mainForm;
                const token = jwt.sign({ email, full_name, id, role }, process.env.REACT_APP_KEY, { expiresIn: "2h" });
                refreshToken(token);
                success('İstifadəçi məlumatlarınız uğurla yeniləndi.');
            }
            else error('Xəta baş verdi.');
        } catch (err) {
            console.log(err);
        }
    }

    const submitAdditionalForm = async () => {
        try {
            const isValid = validation(additionalInputs, additionalForm);
            if (!isValid) return info('Zəhmət olmasa formu tam doldurun');
            const isEqual = equality(additionalInputs, additionalForm, additionalFormCopy);
            if (isEqual) return info('Form əvvəlki kimidir. Zəhmət olmasa yadda saxlamaq üçün dəyişiklik edin');
            const res = await axios.post('/user/insertOrUpdateExtra', additionalForm);
            if (res.data === 'Success') {
                success('Əlavə məlumatlarınız uğurla yeniləndi');
            } else error('Xəta baş verdi.');
        } catch (err) {
            console.log(err);
        }
    }

    const validation = (inputs, form) => inputs.every(item => (form[item.key] || form[item.key] === 0) && form[item.key] !== '');

    const equality = (inputs, form, userInfo = user) => inputs.every(item => form[item.key] === userInfo[item.key]);

    return (
        <div className={`vizew-login-area section-padding-80 ${user.role === 2 && 'my-5'}`}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6">
                        {user.role !== 2 && <div className="d-flex justify-content-between">
                            <button className={`my-3 rounded-pill border border-dark ${!isMain && 'arrow'}`} disabled={isMain} onClick={() => setIsMain(!isMain)}>
                                <IoIosArrowBack title='Əsas məlumatlar' size='2.5rem' />
                            </button>
                            <button className={`my-3 rounded-pill border border-dark ${isMain && 'arrow'}`} disabled={!isMain} onClick={() => setIsMain(!isMain)}>
                                <IoIosArrowForward title='Əlavə məlumatlar' size='2.5rem' />
                            </button>
                        </div>}
                        {isMain ?
                            <div className="login-content">
                                {/* Section Title */}
                                <div className="section-heading">
                                    <h4>Əsas məlumatlar</h4>
                                    <div className="line" />
                                </div>
                                <form onSubmit={submitHandler}>
                                    {renderInputsByType(mainInputs)}
                                    <button className="btn vizew-btn rounded w-100 mt-30">Yadda saxla</button>
                                </form>
                            </div> :
                            <div className="login-content">
                                {/* Section Title */}
                                <div className="section-heading">
                                    <h4>Əlavə məlumatlar</h4>
                                    <div className="line" />
                                </div>
                                {additionalForm.image &&
                                    <div className='d-flex justify-content-center mb-2'>
                                        <img src={additionalForm.image} alt='' className='rounded' width={400} height={400} />
                                    </div>
                                }
                                <form onSubmit={submitHandler}>
                                    {renderInputsByType(additionalInputs)}
                                    <button className="btn vizew-btn rounded w-100 mt-30">Yadda saxla</button>
                                </form>
                            </div>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;