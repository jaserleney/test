import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { RegisterData } from "@/db/index";
import { regitersInitial } from "@/db/index";

export const useRegistersStore = defineStore("registers", () => {
  const registers = ref<RegisterData[]>([...regitersInitial]);

  const createRegister = (newRecord: RegisterData) => {
    registers.value.push(newRecord);
  };

  return {
    // State
    registers,

    // Getters
    keysRegisters: computed(() => {
      const [keys] = registers.value.map((register) => Object.keys(register));

      const splitByUppercase = (string: string) => {
        if (string === "NAC") return string;
        return string.split(/(?=[A-Z])/).join(" ");
      };

      const keysPrint = keys.map((key) => splitByUppercase(key));
      return keysPrint;
    }),

    // Actions
    createRegister,
  };
});
