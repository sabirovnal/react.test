import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { AppInput } from "../components/AppInput";
import { AppButton } from "../components/AppButton";
import { Link } from "react-router-dom";



const Welcome = () => {
   const[name, setName] = useState("");
   const[phone, setPhone] = useState("");

   const[buttonError,setButtonError]=useState(true);

  useEffect(() => {
    if (name && phone) {
      setButtonError(false);
    } else {
      setButtonError(true);
    }
  }, [name, phone]);

  return (
    <div className="container">
      <div className="wrapper">
        <Header 
          headerType="h3" 
          headerText="Добро пожаловать в квиз от лучшего учебного центра" 
        />
        
        <form className="welcome__form">
          <AppInput
            inputText="Ваше Имя" 
            errorText="Введите Имя в правильном формате"
            inputPlaceholder="Введите ваше имя"
            inputType="text"
            inputValue={name}
            inputChange={setName}
          />
          
          <AppInput 
            inputText="Ваш Номер" 
            errorText="Введите номер в правильном формате"
            inputPlaceholder="Введите ваш номер"
            inputType="tel"
            inputValue={phone}
            inputChange={setPhone}
          />
          
          <Link to="/step-one">
            <AppButton isDisabled={buttonError} buttonText="Начать квиз" />
          </Link>

        </form>
      </div>
    </div>
  );
};

export default Welcome;
