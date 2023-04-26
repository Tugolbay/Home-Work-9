import { useState } from "react";
import styled from "styled-components";
export const ExpensesForm = ({ onSubmit }) => {
  const [inputText, setInputText] = useState("");
  const [inputNumber, setInputNumber] = useState(0);
  const [inputDate, setInputDate] = useState({
    year: null,
    month: null,
    day: null,
  });

  function getInputValue(e) {
    setInputText(e.target.value);
    console.log(e.target.value);
  }
  function getInputNumberValue(e) {
    setInputNumber(e.target.value);
    console.log(e.target.value);
  }
  function getInputDateValue(e) {
    console.log(e.target.value);
    let sp = e.target.value.split("-");
    let year = sp[0];
    let month = sp[1] - 1;
    let day = sp[2];
    setInputDate(new Date(year, month, day));
  }
  function submitHandler() {
    const expensesProduct = {
      title: inputText,
      price: inputNumber,
      date: inputDate,
    };
    console.log(expensesProduct);
    onSubmit(expensesProduct);
    setInputText("");
    setInputNumber("");
    setInputDate("");
  }
  return (
    <>
      <Expensesform>
        <InputExpForm
          onChange={getInputValue}
          value={inputText}
          type="text"
          className="input1"
        />
        <InputExpForm2
          onChange={getInputNumberValue}
          value={inputNumber}
          type="number"
          className="input2"
        />
        <InputExpForm3
          onChange={getInputDateValue}
          value={inputDate}
          type="date"
          className="input3"
        />
        <ButtonExpForm onClick={submitHandler}>
          <TextExpForm>Добавить расходы</TextExpForm>
        </ButtonExpForm>
      </Expensesform>
    </>
  );
};

const Expensesform = styled.div`
  display: flex;
  width: 780px;
  height: 287px;
  background: #ad9be9;
  border-radius: 12px;
  margin-top: 200px;
  margin-left: 330px;
`;
const ButtonExpForm = styled.div`
  position: absolute;
  top: 480px;
  right: 412px;
  width: 186px;
  height: 51px;
  background: #4a026b;
  border-radius: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  border-style: none;
`;
const TextExpForm = styled.p`
  position: relative;
  left: 30px;
`;

const InputExpForm = styled.input`
  position: relative;
  top: 55px;
  left: 60px;
  width: 480px;
  height: 39px;
  background: #ffffff;
  border-radius: 8px;
  border-style: none;
`;
const InputExpForm2 = styled.input`
  position: relative;
  top: 55px;
  left: 180px;
  width: 480px;
  height: 39px;
  background: #ffffff;
  border-radius: 8px;
  border-style: none;
`;
const InputExpForm3 = styled.input`
  position: relative;
  top: 139px;
  right: 463px;
  width: 480px;
  height: 39px;
  background: #ffffff;
  border-radius: 8px;
  border-style: none;
`;
