import { scheduleCancel } from "../../services/schedule-cancel";
import { schedulesDay } from "./load";

const periods = document.querySelectorAll(".period");

// Evento de clique
periods.forEach((period) => {
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      // Obtem a li do elemento
      const item = event.target.closest("li");
      // Recupera o ID
      const { id } = item.dataset;

      // Confirma o ID
      if (id) {
        const isConfirm = confirm(
          "Tem certeza que deseja cancelar esse horário?"
        );
        if (isConfirm) {
          // Faz a requisição na API para cancelar
          await scheduleCancel({ id });
          schedulesDay(); // Recarrega os agendamentos
        }
      }
    }
  });
});
