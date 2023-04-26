import { ExpensesCard } from "../ExpensesCard/ExpensesCard";
import { ExpensesFilter } from "../ExpensesFilter/ExpensesFilter";
import { useState } from "react";
export const Expenses = ({ data }) => {
  const [selectYear, setSelectYear] = useState("2023");
  function filteredeYear(e) {
    setSelectYear(e.target.value);
  }
  const filterSelectYear = data.filter((el) => {
    return el.date.getFullYear().toString() === selectYear;
  });
  return (
    <div>
      <ExpensesFilter getValue={filteredeYear} />
      {filterSelectYear.map((el) => {
        return <ExpensesCard el={el} />;
      })}
    </div>
  );
};
