import styled from "styled-components";
export const Header = ({ logOut, onClick }) => {
  return (
    <Headers>
      <Buttons onClick={logOut}>LogOut</Buttons>
      <Appbtn onClick={onClick}>Users</Appbtn>
    </Headers>
  );
};

const Headers = styled.div`
  width: 100%;
  height: 65px;
  background: #ab92ff;
`;

const Buttons = styled.button`
  position: relative;
  top: 6px;
  left: 1320px;
  width: 97px;
  height: 51px;
  background: #4a026b;
  border-radius: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;
  color: #ffffff;
  border-style: none;
  font-family: Arial, Helvetica, sans-serif;
`;
const Appbtn = styled.button`
  position: absolute;
  top: 5px;
  left: 1180px;
  width: 87px;
  height: 51px;
  background: #4a026b;
  border-radius: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;
  color: #ffffff;
  border-style: none;
  font-family: Arial, Helvetica, sans-serif;
`;
