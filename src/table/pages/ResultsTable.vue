<script setup lang="ts">
import FilterResults from "../components/FilterResults.vue";
import TableRegisters from "../components/TableRegisters.vue";
import useRegisterTable from "../composables/useRegisterTable";
const { registers, keysRegisters } = useRegisterTable();
</script>

<template>
  <div class="container-xl mx-auto p-4 pb-8">
    <FilterResults />
    <TableRegisters :regitersInitial="registers" :keys="keysRegisters" />
  </div>
</template>
