"use strict";
const expenseName = document.getElementById("name");
const expenseDate = document.querySelector("#date");
const expenseAmount = document.getElementById("amount");
const addData = document.getElementById("btn");
const expenseData = document.querySelector(".expense-data");

function createTableHeader() {
  createTableHeader = function () {};
  const CreateexpenseTable = document.createElement("table");
  CreateexpenseTable.className = "my-expenses";
  CreateexpenseTable.insertAdjacentHTML(
    "afterbegin",
    "<tr class='table-header' ><th>Name</th><th>Date</th><th>Amount</th></tr>"
  );
  expenseData.appendChild(CreateexpenseTable);
}

function createTableData() {
  const expenseTable = document.querySelector(".my-expenses");
  // const tableData = document.querySelector(".table-data");

  expenseTable.insertAdjacentHTML(
    "beforeend",
    "<tr class='table-data'><td id='expense-name' ></td><td id='expense-date' ></td><td id='expense-Amount'></td></tr>"
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
    createTableHeader();
    createTableData();

    const expenseNameTable = document.getElementById("expense-name");
    const expenseDateTable = document.getElementById("expense-date");
    const expenseAmountTable = document.getElementById("expense-Amount");

    expenseNameTable.insertAdjacentText("afterbegin", name);
    expenseDateTable.insertAdjacentText("afterbegin", Date);
    expenseAmountTable.insertAdjacentText("afterbegin", amount);
  }
});
