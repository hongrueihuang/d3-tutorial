<template>
    <header class="bg-blue-800 text-slate-200 h-24 p-4">
        <nav class="h-full flex items-center">
            <ul class="flex justify-evenly w-full text-center">
                <li v-for="route in routes" :key="route.name">
                    <RouterLink :to="route.path">{{ route.name }}</RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup lang="ts">
import { routes } from "@/router"

</script>