import { ref } from 'vue';
import type { Product } from '@/types';

export function useAggregator() {
  const leftBox = ref<Product[]>([]);
  const rightBox = ref<Product | null>(null);

  function aggregateLeftBox(product: Product) {
    const index = leftBox.value.findIndex(p => p.id === product.id);

    if (index !== -1) {
      leftBox.value.splice(index, 1); // Удалить, если уже выбран
    } else if (leftBox.value.length < 6) {
      leftBox.value.push(product); // Добавить, если < 6
    }
  }

  function aggregateRightBox(product: Product) {
    if (rightBox.value?.id === product.id) {
      rightBox.value = null; // Убрать, если уже выбран
    } else {
      rightBox.value = product; // Назначить
    }
  }

  return {
    leftBox,
    rightBox,
    aggregateLeftBox,
    aggregateRightBox,
  };
}
