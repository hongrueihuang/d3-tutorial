<template>
  <div class="p-4 rounded-md border border-slate-300" @click="go">
    <slot name="title"></slot>
    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router"
const props = defineProps<{
    to?: string
}>();

const router = useRouter();

const go = () => {
    if (props.to) {
        router.push(props.to)
    }
}
</script>