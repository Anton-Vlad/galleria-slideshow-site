<script setup>
import { useGalleriaStore } from '@/stores/galleria';
import ThumbnailIcon from '@components/ThumbnailIcon.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const galleria = useGalleriaStore();
const props = defineProps({
  index: {
    type: Number,
    required: true
  }
})

const cardInfo = galleria.getSlideByIndex(props.index);

const goToSlide = (slideSlug) => {
  router.push({ path: '/' + slideSlug })
}
</script>

<template>
  <div class="gallery-card" @click="goToSlide(cardInfo.slug)">
    <ThumbnailIcon :slug="cardInfo.slug" />
    <div class="gallery-card__info">
      <h2 class="gallery-card__title">
        {{ cardInfo.name }}
      </h2>
      <div class="gallery-card__subtitle text-subhead-2">
        {{ cardInfo.artist.name }}
      </div>
    </div>
  </div>
</template>


