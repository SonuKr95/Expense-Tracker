"use strict";
const expenseName = document.getElementById("name");
const expenseDate = document.querySelector("#date");
const expenseAmount = document.getElementById("amount");
const addData = document.getElementById("btn");
const expenseDatadiv = document.querySelector(".expense-data");

function createTable() {
  createTable = function () {};
  const CreateexpenseTable = document.createElement("table");
  CreateexpenseTable.className = "my-expenses";
  CreateexpenseTable.insertAdjacentHTML(
    "afterbegin",
    "<tr class='table-header' ><th>Name</th><th>Date</th><th>Amount</th></tr>"
  );
  expenseDatadiv.appendChild(CreateexpenseTable);
  // const tableData = document.querySelector(".table-data");
  // if (tableData.childElementCount < 4) {
  //   tableData.insertAdjacentHTML(
  //     "beforeend",
  //     "<td class='expense-name' ></td><td class='expense-date' ></td><td class='expense-Amount'></td></tr> <button>X</button>"
  //   );
  // } else if (tableData.childElementCount === 4) {
  //   const newrow = CreateexpenseTable.insertRow();
  //   newrow.insertAdjacentHTML(
  //     "beforeend",
  //     "<td class='expense-name' ></td><td class='expense-date' ></td><td class='expense-Amount'></td></tr> <button>X</button>"
  //   );
  // }
}

function createTableData() {
  const expenseTable = document.querySelector(".my-expenses");
  const row = expenseTable.insertRow();
  row.className = "table-row";
  row.insertAdjacentHTML(
    "beforeend",
    "<td class='expense-name' ></td><td class='expense-date' ></td><td class='expense-Amount'></td> <button class='delete-expense' >X </button>"
  );
}

addData.addEventListener("click", () => {
  if (
    expenseName.value.length === 0 ||
    expenseDate.value.length === 0 ||
    expenseAmount.value.length === 0
  ) {
    alert("Please fill all the required fields");
  } else {
    const name = expenseName.value;
    const Date = expenseDate.value;
    const amount = expenseAmount.value;
    expenseName.value = "";
    expenseDate.value = "";
    expenseAmount.value = "";
    createTable();
    createTableData();

    const expenseNameTable = document.querySelectorAll(".expense-name");
    const expenseDateTable = document.querySelectorAll(".expense-date");
    const expenseAmountTable = document.querySelectorAll(".expense-Amount");

    expenseNameTable.forEach((names) => {
      if (names.textContent.length === 0) {
        names.insertAdjacentText("beforeend", name);
      }
    });
    expenseDateTable.forEach((dates) => {
      if (dates.textContent.length === 0) {
        dates.insertAdjacentText("beforeend", Date);
      }
    });
    expenseAmountTable.forEach((amt) => {
      if (amt.textContent.length === 0) {
        amt.insertAdjacentText("beforeend", amount);
      }
    });

    // expenseDateTable.forEach((date) => console.log(date.textContent.length));
    // expenseAmountTable.forEach((amt) => console.log(amt.textContent.length));

    // console.log(expenseDateTable);
    // console.log(expenseAmountTable);
  }
});

expenseDatadiv.addEventListener("click", (e) => {
  if (e.target.className === "delete-expense") {
    e.composedPath().forEach((ele) => {
      if (ele.className != "table-row") {
      } else {
        ele.style.display = "none";
      }
    });
  }
});
