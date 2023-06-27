<script setup lang="ts">
import ButtonResults from "./ButtonResults.vue";
import FilterSelect from "./FilterSelect.vue";
import { expertises, nacs, culturalRights, status, numbersList } from "@/db/";
</script>

<template>
  <section class="container mx-auto">
    <section class="flex md:flex-row md:flex-wrap flex-col justify-between items-center p-4 gap-2">
      <div class="flex md:flex-row flex-col items-center gap-4">
        <ButtonResults title="Crear Registros" name="home" />

        <div class="flex md:flex-row flex-col items-center gap-4">
          <label for="search">Buscar: </label>
          <input
            class="bg-transparent border rounded border-gray-400 p-1"
            type="search"
            id="search"
          />
        </div>
        <div class="flex md:flex-row md:flex-wrap flex-col items-center gap-4">
          <FilterSelect
            title="cultural"
            :array-options="culturalRights"
            name="Derechos culturales"
          />
          <FilterSelect title="NAC" :array-options="nacs" name="NAC" />
          <FilterSelect title="Experticia" :array-options="expertises" name="Experticia" />
        </div>
      </div>

      <div class="flex items-center gap-4">
        <FilterSelect title="status" :array-options="status" name="Estado" />
        <label for="numbers">Mostrar</label>
        <FilterSelect title="numbers" :array-options="numbersList" name="Cantidad" />
      </div>
    </section>

    <section class="flex justify-around md:flex-row flex-col gap-4 mt-5">
      <div class="flex md:flex-row flex-col justify-center items-center gap-4">
        <label for="range">Fecha rango</label>
        <input
          type="date"
          class="bg-transparent border p-1 border-gray-400"
          name="rangeStart"
          id="range"
        />
        <input
          type="date"
          class="bg-transparent border p-1 border-gray-400"
          name="rangeStart"
          id="range"
        />
      </div>
    </section>
  </section>
</template>
