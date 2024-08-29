import React from "react";
import { Header } from "../components/Header";
import { AppInput } from "../components/AppInput";
import { AppButton } from "../components/AppButton";

const RegistrationPage = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="registration">
          <Header text="Форма для регистрации" /> { /*Форма для регистрации */}
          <form className="registration__form">
            <AppInput 
              inputText="Ваше Имя" 
              errorText="Введите имя в правильном формате" 
              inputPlaceholder="Введите ваше имя" 
              inputType="text" 
            />
            <AppInput 
              inputText="Ваша Фамилия" 
              errorText="Введите фамилию в правильном формате" 
              inputPlaceholder="Введите вашу фамилию" 
              inputType="text" 
            />
             <AppInput 
              inputText="Ваш Номер" 
              errorText="Введите номер в правильном формате" 
              inputPlaceholder="Введите ваш номер" 
              inputType="tel" 
            />
            <AppInput 
              inputText="Ваш Пароль" 
              errorText="Введите пароль в правильном формате" 
              inputPlaceholder="Введите ваш пароль" 
              inputType="password" 
            />
              <AppInput 
              inputText="Ваш Город" 
              errorText="Введите город в правильном формате" 
              inputPlaceholder="Введите ваш город" 
              inputType="text" 
            />
              <AppInput 
              inputText="Ваша почта" 
              errorText="Введите почту в правильном формате" 
              inputPlaceholder="Введите ваш email" 
              inputType="text" 
            />
            <AppButton 
              buttonText="Зарегистрироваться" 
              isDisabled={false} 
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
