import { scheduleFetchByDay } from "../../services/schedule-fetchByDay.js";
import { hoursLoad } from "../form/hours-load.js";

const selectedDate = document.getElementById("date");
export async function schedulesDay() {
  const date = selectedDate.value;

  // Buscar na API os agendamentos
  const dailySchedules = await scheduleFetchByDay({date});

  // Exibe os agendamentos

  // Able hours
  hoursLoad({ date });
}
