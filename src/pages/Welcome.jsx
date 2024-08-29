import React from "react";
import { Header } from "../components/Header";
import { AppInput } from "../components/AppInput";
import { AppButton } from "../components/AppButton";

const Welcome = () => {
  return (
    <div className="container">
      <div className="wrapper">
      <form className="welcome__form">
        <Header text="Добро пожаловать в квиз от лучшего учебного центра" />
            <AppInput
             inputText="Ваше Имя" 
             errorText=" Введите Имя в правильном формате "
             inputPlaceholder="Введите ваше имя"
             inputType="text"
             />
            <AppInput inputText="Ваш Номер" 
            errorText=" Введите номер в правильном формате например "
            inputPlaceholder="Введите ваш номер"
            inputType="tel"
            />
            <AppButton isDisabled={true} /> 
          </form>
        </div>
      </div>
  )
}

export default Welcome;