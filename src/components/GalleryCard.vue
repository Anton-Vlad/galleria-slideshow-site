<script setup>
import { useGalleriaStore } from '@/stores/galleria';
import ArtistIcon from '@components/ArtistIcon.vue';

const galleria = useGalleriaStore();
const props = defineProps({
  index: {
    type: Number,
    required: true
  }
})

const cardInfo = galleria.getSlideByIndex(props.index);


// console.log(cardInfo)
</script>

<template>
  <div class="gallery-card">
    <ArtistIcon :slug="cardInfo.slug" />
    <h2>{{ cardInfo.name }}</h2>
    <div class="text-subhead-2">
      {{ cardInfo.artist.name }}
    </div>
  </div>
</template>


