<script setup lang="ts">
import List from "@/components/ProductList.vue";
import Box from "@/components/SelectedItemsBox.vue";
import {useProductLists, useAggregator} from "@/composables";

const {left, right} = useProductLists();
const {leftBox, rightBox, aggregateRightBox, aggregateLeftBox} = useAggregator();

</script>
<template>
  <div class="home-page container">
    <div class="home-page__header">
      <Box :products="leftBox" multiple />
      <Box :product="rightBox"/>
    </div>
    <div class="home-page__content">
      <List :products="left" @select="aggregateLeftBox"/>
      <List :products="right" @select="aggregateRightBox"/>
    </div>
  </div>
</template>

<style lang="scss">
.home-page {
  display: flex;
  flex-direction: column;
  gap: 30px;

  padding-top: 30px;

  &__header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 200px;
  }

  &__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
  }
}
</style>