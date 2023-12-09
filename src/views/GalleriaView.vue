<script setup>
import GalleryCard from '@components/GalleryCard.vue';
import { useGalleriaStore } from '@/stores/galleria';

const galleria = useGalleriaStore();


</script>

<template>
  <main>
    <div v-for="(galleryItem, index) in galleria.slides" class="card" :key="'gallery-item-' + index">
      <gallery-card :index="index" />
    </div>
  </main>
</template>
