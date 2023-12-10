<script setup>
import GalleryCard from '@components/GalleryCard.vue';
import { useGalleriaStore } from '@/stores/galleria';
import MasonryWall from '@yeger/vue-masonry-wall';

const galleria = useGalleriaStore();

</script>

<template>
  <main>
    <div class="container">
      <MasonryWall :items="galleria.slides" :ssr-columns="1" :column-width="270" :gap="40">
        <template #default="{ item, index }">
          <gallery-card :index="index" :item="item" />
        </template>
      </MasonryWall>
    </div>
  </main>
</template>
