import dayjs from "dayjs";
const form = document.querySelector("form");
const selectedDate = document.getElementById("date");

// actual date for input constant
const inputDate = dayjs(new Date()).format("YYYY-MM-DD");

// Load current date
selectedDate.value = inputDate;

// Min Date
selectedDate.min = inputDate;

form.onsubmit = (event) => {
  event.preventDefault();

  console.log("Enviado");
};
