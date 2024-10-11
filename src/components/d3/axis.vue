<script setup lang="ts">
import { ref, onMounted } from "vue";
import * as d3 from "d3";
const WIDTH = 600;
const HEIGHT = 400;
const MARGIN = 40;
const container = ref();

function drawChart() {
  const svg = d3.select(container.value).append('svg').attr("width", WIDTH).attr("height", HEIGHT);

  const xScale = d3.scaleLinear().domain([0, 100]).range([MARGIN, WIDTH - MARGIN]);
  const yScale = d3.scaleLinear().domain([0, 100]).range([HEIGHT - MARGIN, MARGIN]);

  svg.append("g").attr('transform', `translate(0, ${HEIGHT - MARGIN})`).call(d3.axisBottom(xScale));
  svg.append("g").attr('transform', `translate(${MARGIN}, 0)`).call(d3.axisLeft(yScale));
}

onMounted(() => {
  drawChart();
}) 
</script>

<template>
  <div ref="container"></div>
</template>

<style scoped>

</style>
