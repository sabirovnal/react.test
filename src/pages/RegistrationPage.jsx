import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import { Header } from "../components/Header";
import { AppInput } from "../components/AppInput";
import { AppButton } from "../components/AppButton";

const RegistrationPage = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (name && surname && phone && password && city && email) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [name, surname, phone, password, city, email]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="registration">
          <Header text="Форма для регистрации" />
          <form className="registration__form">
            <AppInput
              inputText="Ваше Имя"
              errorText="Введите имя в правильном формате"
              inputPlaceholder="Введите ваше имя"
              inputType="text"
              inputValue={name}
              inputChange={setName}
            />
            <AppInput
              inputText="Ваша Фамилия"
              errorText="Введите фамилию в правильном формате"
              inputPlaceholder="Введите вашу фамилию"
              inputType="text"
              inputValue={surname}
              inputChange={setSurname}
            />
            <AppInput
              inputText="Ваш Номер"
              errorText="Введите номер в правильном формате"
              inputPlaceholder="Введите ваш номер"
              inputType="tel"
              inputValue={phone}
              inputChange={setPhone}
            />
            <AppInput
              inputText="Ваш Пароль"
              errorText="Введите пароль в правильном формате"
              inputPlaceholder="Введите ваш пароль"
              inputType="password"
              inputValue={password}
              inputChange={setPassword}
            />
            <AppInput
              inputText="Ваш Город"
              errorText="Введите город в правильном формате"
              inputPlaceholder="Введите ваш город"
              inputType="text"
              inputValue={city}
              inputChange={setCity}
            />
            <AppInput
              inputText="Ваша почта"
              errorText="Введите почту в правильном формате"
              inputPlaceholder="Введите ваш email"
              inputType="email"
              inputValue={email}
              inputChange={setEmail}
            />
            
            <Link to="/welcome">
              <AppButton
                buttonText="Зарегистрироваться"
                isDisabled={!isFormValid}
              />
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;







