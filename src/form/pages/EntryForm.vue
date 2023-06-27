<script setup lang="ts">
import ButtonResults from "../../table/components/ButtonResults.vue";
import InputForm from "../components/InputForm.vue";
import SelectForm from "../components/SelectForm.vue";
import { expertises, nacs, culturalRights } from "@/db/";
import useEntry from "@/form/composables/useEntry";

const { formData, consecutive, formatHour, handlerRegisters, formartDays } = useEntry();
</script>

<template>
  <div class="container mx-auto p-4 pb-8">
    <form @submit.prevent="handlerRegisters(formData)">
      <div class="flex items-center justify-between">
        <legend class="font-normal text-3xl my-4 text-center lg:text-start">Formulario</legend>
        <div class="flex items-center flex-col gap-2">
          <label class="text-2xl" for="consecutive">Consencutivo</label>
          <p>{{ consecutive }}</p>
        </div>
      </div>

      <div class="flex md:flex-row md:flex-wrap flex-col items-center justify-center md:gap-2">
        <InputForm
          type="text"
          title="Nombre"
          for-name="nombre"
          :modelValue="formData.nombre"
          @update:modelValue="(newValue:string) => (formData.nombre = newValue)"
        />

        <InputForm
          type="date"
          title="Fecha"
          for-name="date"
          :modelValue="formData.fecha"
          @update:modelValue="(newValue:string) => formData.fecha = formartDays(newValue)"
        />

        <InputForm
          type="time"
          title="HORA INICIO"
          for-name="start_time"
          :modelValue="formData.horaInicio"
          @update:modelValue="(newValue:string) => formData.horaInicio = formatHour(newValue)"
        />

        <InputForm
          type="time"
          title="HORA FINAL"
          for-name="final_hour"
          :modelValue="formData.horaFin"
          @update:modelValue="(newValue:string) => (formData.horaFin = formatHour(newValue))"
        />

        <SelectForm
          :modelValue="formData.derechoCultural"
          @update:modelValue="(newValue:string) => formData.derechoCultural = newValue"
          title="Derechos culturales"
          for-name="cultural"
          :array-options="culturalRights"
        />

        <SelectForm
          :modelValue="formData.NAC"
          @update:modelValue="(newValue:string) => formData.NAC = newValue"
          title="NAC"
          for-name="nac"
          :array-options="nacs"
        />

        <SelectForm
          :modelValue="formData.experticia"
          @update:modelValue="(newValue:string) => formData.experticia = newValue"
          title="Experticia"
          for-name="experticia"
          :array-options="expertises"
        />

        <div class="md:w-[49.5%] w-full flex justify-end items-center gap-2">
          <ButtonResults title="Ver Registros" name="results" />
          <button
            class="px-4 py-1.5 rounded-md text-white font-bold bg-cyan-600 hover:bg-cyan-500 text-xl self-end"
            type="submit"
          >
            Guardar
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
