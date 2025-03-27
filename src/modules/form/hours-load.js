import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";
import { hoursClick } from "./hours-clicked.js";

const hours = document.getElementById("hours")

export function hoursLoad({ date }) {
  // Clean hourly list
  hours.innerHTML = ""

  const opening = openingHours.map((hour) => {
    // Save hour only
    const [scheduleHour] = hour.split(":");

    // Add hour in date and verify the past
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs());

    return {
      hour,
      available: isHourPast,
    };
  });

  opening.forEach(( {hour, available}) => {
    const li = document.createElement("li");
    li.classList.add("hour");
    li.classList.add(available ? "hour-available" : "hour-unavailable");

    li.textContent = hour;

    if (hour === "9:00") {
      hourHeaderAdd("Manhã")
    } else if (hour === "13:00"){
      hourHeaderAdd("Tarde")
    } else if (hour === "18:00"){
      hourHeaderAdd("Noite")
    }
    



    hours.append(li)
  });

  hoursClick() // Evento de clique nos horários
}

function hourHeaderAdd (title ) {
  const header = document.createElement("li")
  header.classList.add("hour-period")
  header.textContent = title

  hours.append(header)
}
