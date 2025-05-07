<script setup lang="ts">
import {defineProps, withDefaults} from 'vue';
import ProductItem from "@/components/ProductItem.vue";
import {type Product} from "@/types";

interface Props {
  products?: Product[];
  product?: Product | null;
  multiple?: boolean;
  limit: number;
}

withDefaults(defineProps<Props>(), {
  multiple: false,
  limit: 6,
})
</script>

<template>
  <div v-if="multiple" class="box__top-wrapper">
    <div v-if="products.length">
      <div class="box__top" :class="{'multiple': products.length }">
        <ProductItem v-for="product in products" :key="product.id" :product="product"/>
      </div>
      <div class="box__selected">
        selected {{products.length}} / {{ limit }}
      </div>
    </div>
    <span class="box__empty" v-else>Выберите продукты</span>
  </div>
  <div class="box__bottom" v-else>
    <ProductItem v-if="product" :product="product"/>
    <span class="box__empty" v-else>Выберите продукт</span>
  </div>
</template>

<style lang="scss">
.box {

  &__selected {
    margin-top: 20px;
  }

  &__top {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;

    &-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 10px;
      border: 1px solid black;
      padding: 20px;
    }
  }

  &__bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    min-height: 100px;
    padding: 20px;
  }

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

