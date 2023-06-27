<script setup lang="ts">
import { toRef } from "vue";
import type { Data } from "@/db/";

interface Props {
  title: string;
  forName: string;
  arrayOptions: Data[];
  modelValue: string;
}

interface Emits {
  (e: "update:modelValue", value: string): void;
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();
const title = toRef(props, "title");
const forName = toRef(props, "forName");
const arrayOptions = toRef(props, "arrayOptions");
</script>

<template>
  <div class="md:w-[49.5%] w-full flex flex-col mb-4">
    <label :for="forName">{{ title }}</label>
    <select
      :value="modelValue"
      @change="emits('update:modelValue', ($event.target as HTMLInputElement).value)"
      :id="forName"
      class="bg-transparent border border-cyan-500 rounded p-1"
    >
      <option value="" disabled selected hidden>Selecciona una opción</option>
      <option :value="value" v-for="{ id, value } in arrayOptions" :key="id">
        {{ value }}
      </option>
    </select>
  </div>
</template>
