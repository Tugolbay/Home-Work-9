import { useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";
export const NewExpenses = ({ onLogin }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);

  const [emailerror, setEmailerror] = useState("Email не может быть пустым");
  const [passwordError, setPasswordError] = useState(
    "Password не может быть пустым"
  );

  const [formValid, setFormValid] = useState(false);

  const blureHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  useEffect(() => {
    if (emailerror || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailerror, passwordError]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailerror("Некорректный");
    } else {
      setEmailerror("");
    }
  };

  const passwordlHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 9) {
      setPasswordError("Пароль должен быть длинее 6");
      if (!e.target.value) {
        setPasswordError("Password не может быть пустым");
      }
    } else {
      setPasswordError("");
    }
  };

  return (
    <>
      <Card>
        <P>E-Mail</P>
        <ValidateEmail>
          {emailDirty && emailerror && (
            <div style={{ color: "red" }}>{emailerror}</div>
          )}
        </ValidateEmail>

        <Inputs
          onChange={(e) => emailHandler(e)}
          value={email}
          onBlur={(e) => blureHandler(e)}
          name="email"
          type="text"
          className="inp1"
        />
        <P2 className="email-text2">Password</P2>
        <ValidatePassword>
          {passwordDirty && passwordError && (
            <div style={{ color: "red" }}>{passwordError}</div>
          )}
        </ValidatePassword>
        <Inputs2
          onChange={(e) => passwordlHandler(e)}
          value={password}
          onBlur={(e) => blureHandler(e)}
          name="password"
          type="password"
          className="inp2"
        />
        <BtnNewExpenses type="submit" disabled={!formValid} onClick={onLogin}>
          Login
        </BtnNewExpenses>
      </Card>
    </>
  );
};

const Card = styled.div`
  display: flex;
  width: 680px;
  height: 250px;
  box-shadow: 0 0 10px rgb(0, 0, 0, 0.5);
  background: white;
  border-radius: 12px;
  margin-top: 257px;
  margin-left: 330px;
`;
const P = styled.p`
  position: absolute;
  top: 296px;
  left: 380px;
  font-family: Arial, Helvetica, sans-serif;
`;
const BtnNewExpenses = styled.button`
  position: absolute;
  top: 440px;
  left: 600px;
  width: 128px;
  height: 51px;
`;
const P2 = styled.p`
  position: absolute;
  top: 358px;
  left: 380px;
  font-family: Arial, Helvetica, sans-serif;
`;
const Inputs = styled.input`
  position: absolute;
  box-shadow: 0 0 10px rgb(0, 0, 0, 0.5);
  background-color: #ddffdd;
  border-style: none;
  top: 305px;
  left: 500px;
  width: 400px;
  height: 30px;
  border-radius: 10px;
`;
const Inputs2 = styled.input`
  position: absolute;
  background-color: #ddffdd;
  box-shadow: 0 0 10px rgb(0, 0, 0, 0.5);
  border-style: none;
  top: 367px;
  left: 500px;
  width: 400px;
  height: 30px;
  border-radius: 10px;
`;

const ValidateEmail = styled.div`
  position: relative;
  top: 20px;
  left: 180px;
`;
const ValidatePassword = styled.div`
  position: relative;
  top: 85px;
  right: 15px;
`;
