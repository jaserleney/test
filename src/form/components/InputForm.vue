<script setup lang="ts">
import { toRef } from "vue";

interface Props {
  title: string;
  forName: string;
  type: string;
  modelValue: string;
}

interface Emits {
  (e: "update:modelValue", value: string): void;
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();

const title = toRef(props, "title");
const forName = toRef(props, "forName");
const type = toRef(props, "type");
</script>

<template>
  <div class="md:w-[49.5%] w-full flex flex-col mb-4">
    <label :for="forName">{{ title }}</label>
    <input
      class="bg-transparent border border-cyan-500 rounded p-1"
      :type="type"
      :name="forName"
      :id="forName"
      :value="modelValue"
      @input="emits('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>
