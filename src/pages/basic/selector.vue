<template>
    <div>
        <h2 class="font-bolder text-2xl mb-4 ">
            D3 選擇器的基礎概念
        </h2>
        <p>
            D3.js 的選擇器與 CSS 選擇器非常類似。可以使用 d3.select() 和 d3.selectAll() 來選擇單個或多個 DOM 元素，然後對它們進行操作。
        </p>
        <div v-html="highlightedCode.value"></div>
    </div>
</template>

<script setup lang="ts">
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import javascript from 'highlight.js/lib/languages/javascript';
import { onMounted } from "vue"
hljs.registerLanguage('javascript', javascript);
const highlightedCode = hljs.highlight(
    `
        var x = 5;
        const i = 22
    `,
    {language: 'javascript'}
)

onMounted(() => {
    console.log(highlightedCode)
})
</script>