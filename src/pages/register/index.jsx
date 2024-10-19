import { useState } from "react";
import { useForm } from "react-hook-form";
import { ValidateInput } from "../../components/ValidateInput";
import { useNavigate } from "react-router-dom";

import registerIMG from '../../assets/images/registerIMG.svg';
import register_plane from '../../assets/images/register-plane.svg'
import './style.scss';

export const Register = () => {
    const [firsName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();

    function onSubmit() {
        navigate('/auth')
        localStorage.setItem("user", JSON.stringify({
            "firstName": firsName,
            "lastName": lastName,
            "middleName": middleName,
            "phone": phone,
            "email": email,
            "password": password
        }))
    };

    return (
        <div className="register_wrapper">
            <div className="register">
                <h1 className="register__header">Register</h1>
                <p className="register__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim facilisi elementum commodo ipsum. Aenean aenean adipiscing lect</p>
                <div className="register__wrapper">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <ValidateInput 
                            textLabel={"First name"}
                            errors={errors}
                            name={"firstName"}
                            register={register}
                            validate={{ required: true }}
                            type={"text"}
                            changeValue={(elem) => { setFirstName(elem.target.value) }}
                        />
                        <ValidateInput 
                            textLabel={"Last name"}
                            errors={errors}
                            name={"lastName"}
                            register={register}
                            validate={{ required: true }}
                            type={"text"}
                            changeValue={(elem) => { setLastName(elem.target.value) }}
                        />
                        <ValidateInput 
                            textLabel={"Middle name"}
                            errors={errors}
                            name={"middleName"}
                            register={register}
                            validate={{ required: true }}
                            type={"text"}
                            changeValue={(elem) => { setMiddleName(elem.target.value) }}
                        />
                        <ValidateInput 
                            textLabel={"Phone"}
                            errors={errors}
                            name={"phone"}
                            register={register}
                            validate={{ required: true }}
                            type={"text"}
                            changeValue={(elem) => { setPhone(elem.target.value) }}
                        />
                        <ValidateInput 
                            textLabel={"E-mail"}
                            errors={errors}
                            name={"email"}
                            register={register}
                            validate={{ required: true }}
                            type={"text"}
                            changeValue={(elem) => { setEmail(elem.target.value) }}
                        />
                        <ValidateInput 
                            textLabel={"Password"}
                            errors={errors}
                            name={"password"}
                            register={register}
                            validate={{ required: true }}
                            type={"password"}
                            changeValue={(elem) => { setPassword(elem.target.value) }}
                        />
                        <button className="register__wrapper__enterButton">Registration</button>
                    </form>
                </div>
            </div>
            <div className="register_image">
                <img src={registerIMG} alt="register-img" />
                <div className="register__plane"><img src={register_plane} alt="register_plane" /></div>
            </div>
        </div>
    );
};