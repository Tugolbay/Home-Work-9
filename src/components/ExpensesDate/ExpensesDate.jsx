import styled from "styled-components";
export const ExpensesDate = (props) => {
  const month = props.date?.toLocaleString("en-US", { month: "long" });
  const day = props.date?.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date?.getFullYear();
  return (
    <Date>
      <Month>{month}</Month>
      <Year>{year}</Year>
      <Day>{day}</Day>
    </Date>
  );
};

const Date = styled.div`
  position: relative;
  top: 12px;
  left: 16px;
  width: 82.11px;
  height: 80px;
  background: #2a2a2a;
  border: 1px solid #ffffff;
  border-radius: 10px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
`;
const Month = styled.div`
  position: relative;
  top: 5px;
  left: 30px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
  color: #ffffff;
`;
const Year = styled.div`
  position: relative;
  top: 15px;
  left: 25px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 15px;
  color: #ffffff;
`;
const Day = styled.div`
  position: relative;
  top: 20px;
  left: 30px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
`;
