<script setup lang="ts">
import {defineProps, withDefaults} from 'vue';
import ProductItem from "@/components/ProductItem.vue";
import {type Product} from "@/types";

interface Props {
  products?: Product[];
  product?: Product | null;
  multiple?: boolean;
}

withDefaults(defineProps<Props>(), {
  multiple: false,
})
</script>

<template>
  <div class="box" :class="{'multiple': products.length }" v-if="multiple">
    <template v-if="products.length">
      <ProductItem v-for="product in products" :key="product.id" :product="product"/>
    </template>
    <span class="box__empty" v-else>Выберите продукты</span>
  </div>
  <div class="box" v-else>
    <ProductItem v-if="product" :product="product"/>
    <span class="box__empty" v-else>Выберите продукт</span>
  </div>
</template>

<style lang="scss">
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  min-height: 100px;
  padding: 20px;

  &.multiple {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
  }

  &__empty {
    display: flex;
    justify-content: center;
  }
}
</style>

