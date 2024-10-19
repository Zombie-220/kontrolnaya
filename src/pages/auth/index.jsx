import { useContext } from "react";
import React, { useState } from "react";
import { AuthContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { ValidateInput } from "../../components/ValidateInput";
import { useForm } from "react-hook-form";

import registerIMG from '../../assets/images/registerIMG.svg';
import register_plane from '../../assets/images/register-plane.svg'
import './style.scss';

export const Auth = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        var userData = JSON.parse(localStorage.getItem('user'))
        const {email, password} = data

        if (userData) {
            if (userData.email == email && userData.password == password) {
                setIsAuth(true);
                navigate('/list')
            } else {
                console.log("x")
            }
        } else {
            navigate('/')
            console.log("база пуста")
        }
    }

    return (
        <div className="auth_wrapper">
            <div className="auth">
                <h1 className="auth__header">Auth</h1>
                <p className="auth__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim facilisi elementum commodo ipsum. Aenean aenean adipiscing lect</p>
                <div className="auth__wrapper">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <ValidateInput
                            textLabel={"E-mail"}
                            errors={errors}
                            name={"email"}
                            register={register}
                            validate={{ required: true }}
                            type={"text"}
                            />
                        <ValidateInput
                            textLabel={"Password"}
                            errors={errors}
                            name={"password"}
                            register={register}
                            validate={{ required: true }}
                            type={"password"}
                            />
                        <button className="auth__wrapper__enterButton">Auth</button>
                    </form>
                </div>
            </div>
            <div className="auth_image">
                <img src={registerIMG} alt="auth-img" />
                <div className="auth__plane"><img src={register_plane} alt="auth_plane" /></div>
            </div>
        </div>
    );
};