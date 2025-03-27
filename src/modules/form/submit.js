import dayjs from "dayjs";
import { scheduleNew } from "../../services/schedule-new.js";

const form = document.querySelector("form");
const selectedDate = document.getElementById("date");
const clientName = document.getElementById("client");

// actual date for input constant
const inputDate = dayjs(new Date()).format("YYYY-MM-DD");

// Load current date
selectedDate.value = inputDate;

// Min Date
selectedDate.min = inputDate;

form.onsubmit = async (event) => {
  event.preventDefault();

  try {
    //Recuperando nome do cliente
    const name = clientName.value.trim();

    if (!name) {
      return alert("Informe o nome do cliente!");
    }
    // Recuperando o horário
    const hourSelected = document.querySelector(".hour-selected");
    if (!hourSelected) {
      return alert("Informe o horário do cliente!");
    }

    // Recupera somente a hora
    const [hour] = hourSelected.innerText.split(":");

    // Insere a hora na data
    const when = dayjs(selectedDate.value).add(hour, "hour");
    console.log(when);

    // Gera um ID
    const id = new Date().getTime();

    await scheduleNew({
      id,
      name,
      when,
    });
  } catch (error) {
    alert(
      "Não foi possível realizar o agendamento. Tente novamente mais tarde"
    );
    console.log(error);
  }
};
