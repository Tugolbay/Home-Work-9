import styled from "styled-components";
export const ExpensesFilter = (props) => {
  return (
    <Container>
      <P className="text">Фильтр по году</P>
      <Containerchild>
        <Select onChange={props.getValue}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </Select>
        <Statistics>
          <Expenses1 />
          <Expenses2 />
          <Expenses3 />
          <Expenses4 />
          <Expenses5 />
          <Expenses6 />
          <Expenses7 />
          <Expenses8 />
          <Expenses9 />
          <Expenses10 />
          <Expenses11 />
          <Expenses12 />
        </Statistics>
      </Containerchild>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;
const Containerchild = styled.div`
  position: absolute;
  top: 649px;
  left: 336px;
  width: 780px;
  height: 492px;
  background: #1f1f1f;
  border-radius: 12px;
`;
const Select = styled.select`
  position: relative;
  top: 28px;
  left: 640px;
  width: 124px;
  height: 43px;
  background: #ffffff;
  border-radius: 6px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #222222;
`;
const P = styled.p`
  position: absolute;
  top: 670px;
  left: 346px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  z-index: 1;
`;
const Statistics = styled.div`
  position: relative;
  top: 80px;
  left: 16px;
  width: 748px;
  height: 151px;
  background: #f8dfff;
  border-radius: 12px;
`;

const Expenses1 = styled.div`
  position: relative;
  top: 14px;
  left: 29px;
  width: 10px;
  height: 108px;
  background: #a892ee;
  border: 1px solid #363636;
  border-radius: 12px;
`;
const Expenses2 = styled.div`
  position: absolute;
  top: 14px;
  left: 77px;
  width: 36px;
  height: 108px;
  background: #a892ee;
  border: 1px solid #363636;
  border-radius: 12px;
`;
const Expenses3 = styled.div`
  position: absolute;
  top: 14px;
  left: 153px;
  width: 18px;
  height: 108px;
  background: #4826b9;
  border: 1px solid #363636;
  border-radius: 12px;
`;
const Expenses4 = styled.div`
  position: absolute;
  top: 14px;
  left: 211px;
  width: 14px;
  height: 108px;
  background: #a892ee;
  border: 1px solid #363636;
  border-radius: 12px;
`;
const Expenses5 = styled.div`
  position: absolute;
  top: 14px;
  left: 265px;
  width: 14px;
  height: 108px;
  background: #a892ee;
  border: 1px solid #363636;
  border-radius: 12px;
`;
const Expenses6 = styled.div`
  position: absolute;
  top: 14px;
  left: 318px;
  width: 22px;
  height: 108px;
  background: #a892ee;
  border: 1px solid #363636;
  border-radius: 12px;
`;
const Expenses7 = styled.div`
  position: absolute;
  top: 14px;
  left: 377px;
  width: 18px;
  height: 108px;
  background: #a892ee;
  border: 1px solid #363636;
  border-radius: 12px;
`;
const Expenses8 = styled.div`
  position: absolute;
  top: 14px;
  left: 438px;
  width: 12px;
  height: 108px;
  background: #a892ee;
  border: 1px solid #363636;
  border-radius: 12px;
`;
const Expenses9 = styled.div`
  position: absolute;
  top: 14px;
  left: 489px;
  width: 14px;
  height: 108px;
  background: #a892ee;
  border: 1px solid #363636;
  border-radius: 12px;
`;
const Expenses10 = styled.div`
  position: absolute;
  top: 14px;
  left: 542px;
  width: 32px;
  height: 108px;
  background: #a892ee;
  border: 1px solid #363636;
  border-radius: 12px;
`;
const Expenses11 = styled.div`
  position: absolute;
  top: 14px;
  left: 617px;
  width: 26px;
  height: 108px;
  background: #a892ee;
  border: 1px solid #363636;
  border-radius: 12px;
`;
const Expenses12 = styled.div`
  position: absolute;
  top: 14px;
  left: 684px;
  width: 34px;
  height: 108px;
  background: #a892ee;
  border: 1px solid #363636;
  border-radius: 12px;
`;
