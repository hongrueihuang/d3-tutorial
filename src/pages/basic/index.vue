<template>
  <div class="grid grid-cols-3 gap-4">
    <BaseCard v-for="card in list" :key="card.title" :to="card.path">
      <template #title>
        <h2>{{ card.title }}</h2>
      </template>
    </BaseCard>
  </div>
  <div class="mt-4">
    <RouterView></RouterView>
  </div>
</template>

<script setup lang="ts">
import BaseCard from "@/components/base/card.vue";

const list = [
  {
    title: "D3 Selector",
    path: "/basic/selector",
  },
  {
    title: "Data Binding",
    path: "/basic/data-binding",
  },
  {
    title: "Models",
    path: "/basic/models",
  },
];
</script>
