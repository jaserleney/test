import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useRegistersStore } from "@/stores/register";
import html2pdf from "html2pdf.js";
import exportFromJSON from "export-from-json";

const useRegisterTable = () => {
  const registersStore = useRegistersStore();
  const { registers, keysRegisters } = storeToRefs(registersStore);

  const table = ref<HTMLElement | null>(null);

  return {
    // State
    table,
    registers,
    keysRegisters,

    // Methods
    exportPdf(value: HTMLElement): void {
      const options = {
        margin: 0.3,
        filename: "table.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "landscape" },
      };
      html2pdf().from(value).set(options).save();
    },

    exportToExcel(): void {
      const fileName = "table";
      const exportType = exportFromJSON.types.xls;
      exportFromJSON({ data: registers.value, fileName, exportType });
    },
  };
};

export default useRegisterTable;
