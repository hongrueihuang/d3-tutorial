<script setup lang="ts">
import BaseHeader from "./components/layout/header.vue";
</script>

<template>
  <div>
    <BaseHeader />
    <main class="container mx-auto mt-4">
      <RouterView></RouterView>
    </main>
  </div>
</template>

<style scoped></style>
