<script setup lang="ts">
import { toRef } from "vue";
import type { Data } from "@/db/";

interface Props {
  title: string;
  arrayOptions: Data[];
  name: string;
  modelValue?: string;
}

interface Emits {
  (e: "update:modelValue", value: string): void;
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();
const title = toRef(props, "title");
const arrayOptions = toRef(props, "arrayOptions");
</script>

<template>
  <select
    :value="modelValue"
    @change="emits('update:modelValue', ($event.target as HTMLInputElement).value)"
    class="bg-transparent border p-1 border-gray-400"
    :name="title"
    :id="title"
  >
    <option value="" disabled selected hidden>{{ name }}</option>
    <option :value="value" v-for="{ id, value } in arrayOptions" :key="id">
      {{ value }}
    </option>
  </select>
</template>
