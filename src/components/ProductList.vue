<script lang="ts" setup>
import ProductItem from "@/components/ProductItem.vue";
import {type Product} from "@/types";
import {defineProps, defineEmits} from 'vue';

interface Props {
  products: Array<Product>
}

defineProps<Props>()

const emit = defineEmits<{
  select: [product: Product]
}>()

function handleSelect(product: Product) {
  emit('select', product);
}

</script>

<template>
  <div class="list">
    <ProductItem
        v-for="product in products"
        :key="product.id"
        :product="product"
        @click="handleSelect"
    />
  </div>
</template>

<style lang="scss" scoped>
.list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px;
}
</style>