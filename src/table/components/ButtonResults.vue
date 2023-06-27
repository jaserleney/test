<script setup lang="ts">
import { toRef } from "vue";
interface Props {
  title: string;
  name?: string;
}

const props = defineProps<Props>();
const title = toRef(props, "title");
</script>

<template>
  <button v-if="!name" class="px-3 py-2 text-white font-bold bg-teal-600 hover:bg-teal-500 rounded">
    {{ title }}
  </button>

  <RouterLink
    class="px-3 py-2 text-white font-bold bg-teal-600 hover:bg-teal-500 rounded"
    :to="{ name }"
    v-else
    >{{ title }}</RouterLink
  >
</template>
