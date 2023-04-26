import { ExpensesDate } from "../ExpensesDate/ExpensesDate";
import styled from "styled-components";
export const ExpensesCard = ({ el }) => {
  return (
    <Cartochka>
      <CartochkaChilde>
        <ExpensesDate date={el.date} />
        <Title>{el.title}</Title>
        <Price>
          <PriceChilder>$ {el.price}</PriceChilder>
        </Price>
      </CartochkaChilde>
    </Cartochka>
  );
};

const Cartochka = styled.div`
  position: absolute;
  top: 1000px;
  left: 336px;
  width: 780px;
  height: 150px;
  background: #1f1f1f;
  border-radius: 10px;
`;
const CartochkaChilde = styled.div`
  position: relative;
  top: 20px;
  left: 16px;
  width: 748px;
  height: 104px;
  background: #4b4b4b;
  border-radius: 12px;
  z-index: 1;
`;
const Title = styled.div`
  position: relative;
  top: -40px;
  left: 150px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
`;
const Price = styled.div`
  position: relative;
  top: -75px;
  left: 600px;
  width: 112px;
  height: 44px;
  background: #40005d;
  border: 1px solid #ffffff;
  border-radius: 10px;
`;
const PriceChilder = styled.div`
  position: relative;
  top: 10px;
  left: 18px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
`;
