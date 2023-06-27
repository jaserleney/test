<script setup lang="ts">
import type { RegisterData } from "../../db/index";
import { toRef } from "vue";
import useRegisterTable from "../composables/useRegisterTable";
import ButtonResults from "./ButtonResults.vue";

interface Props {
  regitersInitial: RegisterData[];
  keys: string[];
}

const props = defineProps<Props>();
const registers = toRef(props, "regitersInitial");
const keys = toRef(props, "keys");

const { table, exportPdf, exportToExcel } = useRegisterTable();
</script>

<template>
  <section class="table-auto container-xl mx-auto p-4 my-8">
    <div class="flex justify-end items-center gap-1 border-black border-b pb-4 mb-6">
      <ButtonResults @click="exportPdf(table!)" title="Exportar PDF" />
      <ButtonResults @click="exportToExcel" title="Exportar XLS" />
    </div>
    <table
      ref="table"
      class="border-collapse w-full border border-slate-400 bg-white md:text-sm text-xs shadow-sm text-center mx-auto md:table grid overflow-x-auto table-fixed break-words"
    >
      <thead class="bg-slate-50">
        <tr>
          <th
            v-for="key in keys"
            :key="key"
            class="w-1/2 border border-slate-300 font-semibold p-4 text-slate-900 capitalize"
          >
            {{ key }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="register in registers" :key="register.id">
          <td class="border border-slate-300 p-4 text-slate-500">{{ register.id.slice(0, 8) }}</td>
          <td class="border border-slate-300 p-4 text-slate-500">{{ register.consecutivo }}</td>
          <td class="border border-slate-300 p-4 text-slate-500">{{ register.nombre }}</td>
          <td class="border border-slate-300 p-4 text-slate-500">
            {{ register.derechoCultural }}
          </td>
          <td class="border border-slate-300 p-4 text-slate-500">{{ register.NAC }}</td>
          <td class="border border-slate-300 p-4 text-slate-500">{{ register.fecha }}</td>
          <td class="border border-slate-300 p-4 text-slate-500">
            {{ register.horaInicio }}
          </td>
          <td class="border border-slate-300 p-4 text-slate-500">{{ register.horaFin }}</td>
          <td class="border border-slate-300 p-4 text-slate-500">{{ register.experticia }}</td>
          <td class="border border-slate-300 p-4 text-slate-500">{{ register.estado }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
