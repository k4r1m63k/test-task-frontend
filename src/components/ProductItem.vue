<script setup lang="ts">
import {type Product} from "@/types";
import {defineProps, defineEmits} from "vue";

interface Props {
  product: Product;
}

defineProps<Props>();

const emit = defineEmits<{
  click: [product: Product]
}>()

</script>

<template>
  <div class="list-item" @click="emit('click', product)">
    {{ product }}
  </div>
</template>

<style lang="scss">
.list-item {
  min-width: fit-content;
  min-height: fit-content;
  padding: 20px;
  border: 1px solid black;
  cursor: pointer;
}
</style>