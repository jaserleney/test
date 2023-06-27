import dayjs from "dayjs";
import { ref, type Ref } from "vue";

export interface Data {
  id: string;
  value: string | number;
}

export interface RegisterData {
  id: string;
  consecutivo: string;
  nombre: string;
  derechoCultural: string;
  NAC: string;
  fecha: string;
  horaInicio: string;
  horaFin: string;
  experticia: string;
  estado: string;
}

export const expertises = ref<Data[]>([
  { id: crypto.randomUUID(), value: "Artes plásticas" },
  { id: crypto.randomUUID(), value: "Teatro" },
  { id: crypto.randomUUID(), value: "Música" },
  { id: crypto.randomUUID(), value: "Danza" },
  { id: crypto.randomUUID(), value: "Cocina tradicional" },
  { id: crypto.randomUUID(), value: "Juegos tradicionales" },
]);

export const culturalRights = ref<Data[]>([
  { id: crypto.randomUUID(), value: "Identidad y patrimonios culturales" },
  { id: crypto.randomUUID(), value: "Referencias a comunidades culturales" },
  { id: crypto.randomUUID(), value: "Acceso y participación en la vida cultural" },
  { id: crypto.randomUUID(), value: "Educación y formación" },
  { id: crypto.randomUUID(), value: "Información y comunicación" },
  { id: crypto.randomUUID(), value: "Cooperación cultural" },
]);

export const nacs = ref<Data[]>([
  { id: crypto.randomUUID(), value: "ALCALÁ" },
  { id: crypto.randomUUID(), value: "ANDALUCÍA" },
  { id: crypto.randomUUID(), value: "ANSERMANUEVO" },
  { id: crypto.randomUUID(), value: "ARGELIA" },
  { id: crypto.randomUUID(), value: "BOLÍVAR" },
  { id: crypto.randomUUID(), value: "BUENAVENTURA" },
  { id: crypto.randomUUID(), value: "BUGA" },
]);

export const status = ref<Data[]>([
  { id: crypto.randomUUID(), value: "Aprobado" },
  { id: crypto.randomUUID(), value: "Rechazado" },
  { id: crypto.randomUUID(), value: "En revisión" },
]);

export const numbersList = ref<Data[]>([
  { id: crypto.randomUUID(), value: 10 },
  { id: crypto.randomUUID(), value: 20 },
]);

export const regitersInitial: RegisterData[] = [
  {
    id: crypto.randomUUID(),
    consecutivo: "F3",
    nombre: "Karem Lopez",
    derechoCultural: "Cooperación cultural",
    NAC: "BUGA",
    fecha: dayjs(new Date()).format("MM/DD/YYYY"),
    horaInicio: dayjs(new Date()).format("hh:mm A"),
    horaFin: dayjs(new Date()).format("hh:mm A"),
    experticia: "Promoción de lectura",
    estado: "En revisión",
  },
  {
    id: crypto.randomUUID(),
    consecutivo: "F4",
    nombre: "Karem Lopez",
    derechoCultural: "Cooperación cultural",
    NAC: "BUGA",
    fecha: dayjs(new Date()).format("MM/DD/YYYY"),
    horaInicio: dayjs(new Date()).format("hh:mm A"),
    horaFin: dayjs(new Date()).format("hh:mm A"),
    experticia: "Danza",
    estado: "En revisión",
  },
  {
    id: crypto.randomUUID(),
    consecutivo: "F5",
    nombre: "Karem Lopez",
    derechoCultural: "Cooperación cultural",
    NAC: "BUGA",
    fecha: dayjs(new Date()).format("MM/DD/YYYY"),
    horaInicio: dayjs(new Date()).format("hh:mm A"),
    horaFin: dayjs(new Date()).format("hh:mm A"),
    experticia: "Promoción de lectura",
    estado: "En revisión",
  },
  {
    id: crypto.randomUUID(),
    consecutivo: "F6",
    nombre: "Karem Lopez",
    derechoCultural: "Cooperación cultural",
    NAC: "BOLÍVAR",
    fecha: dayjs(new Date()).format("MM/DD/YYYY"),
    horaInicio: dayjs(new Date()).format("hh:mm A"),
    horaFin: dayjs(new Date()).format("hh:mm A"),
    experticia: "Artes plásticas",
    estado: "Aprobado",
  },
];
