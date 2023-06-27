import { ref } from "vue";
import { useRegistersStore } from "@/stores/register";
import dayjs from "dayjs";
import Swal from "sweetalert2";
import type { RegisterData } from "../../db/index";

const useEntry = () => {
  const registersStore = useRegistersStore();

  const { createRegister } = registersStore;

  const consecutive: string = `F${Math.floor(Math.random() * 100)}`;

  const formData = ref<RegisterData>({
    id: crypto.randomUUID(),
    consecutivo: consecutive,
    nombre: "",
    fecha: dayjs(new Date()).format("MM/DD/YYYY"),
    horaInicio: dayjs(new Date()).format("hh:mm A"),
    horaFin: dayjs(new Date()).format("hh:mm A"),
    derechoCultural: "",
    NAC: "",
    experticia: "",
    estado: "En revision",
  });

  return {
    // State
    formData,
    consecutive,

    // Methods
    formatHour: (value: string) => {
      const [hours, minutes] = value.split(":");
      let formattedHours = parseInt(hours, 10);
      let meridiem = "AM";

      if (formattedHours > 12) {
        formattedHours -= 12;
        meridiem = "PM";
      } else if (formattedHours === 0) {
        formattedHours = 12;
      }

      return `${formattedHours}:${minutes} ${meridiem}`;
    },

    handlerRegisters: (data: RegisterData) => {
      const { nombre, fecha, horaFin, horaInicio, NAC, experticia } = data;

      if (nombre && fecha && horaFin && horaInicio && NAC && experticia && horaInicio <= horaFin) {
        createRegister(data);
        return Swal.fire("¡Éxito!", "Registro Exitoso.", "success");
      }

      Swal.fire(
        "¡Error!",
        "Todos los campos son obligatorios y/o Fecha Inicio debe ser menor o igual a la Fecha Fin.",
        "error"
      );

      return;
    },

    formartDays: (value: string) => dayjs(value).format("MM/DD/YYYY"),
  };
};

export default useEntry;
