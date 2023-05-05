import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  let month = props.date.toLocaleString("en-US", { month: "long" });
  let day = props.date.toLocaleString("en-US", { day: "2-digit" });
  let year = props.date.getFullYear();
  
  // console.log(props.date)

  return (
    <div className="date">
    <div className="span--container">
      <span> {month} </span>
      <span> {day} </span>
      <span> {year} </span>
      </div>
    </div>
  );
}

export default ExpenseDate;
