<script setup>
import { ref, watchEffect } from 'vue';
import { useRouter, useRoute, RouterLink, RouterView } from 'vue-router';
import { useGalleriaStore } from '@/stores/galleria';

const route = useRoute();
const router = useRouter();
const currentSlideSlug = ref(route.params.slideSlug);
const stopSlideShow = ref(false);

const slideShowButtonLabel = ref(currentSlideSlug.value ? 'STOP SLIDESHOW' : 'START SLIDESHOW');
const galleria = useGalleriaStore();

const initHeaderButton = (slug) => {
  slideShowButtonLabel.value = (slug ? 'STOP SLIDESHOW' : 'START SLIDESHOW');
  stopSlideShow.value = !!slug;
}

const goHeader = () => {
  if (stopSlideShow.value) {
    router.push({ path: '/' })
  } else {
    const cardInfo = galleria.getSlideByIndex(0);
    router.push({ path: '/' + cardInfo.slug })
  }
}

watchEffect(() => initHeaderButton(route.params.slideSlug));
</script>

<template>
  <header>
    <div class="container">
      <RouterLink to="/" class="logo-link">
        <img alt="App logo" class="logo" src="@/assets/galleria-logo.svg" width="170" height="48" />
      </RouterLink>

      <nav>
        <a href class="text-link-1" @click.prevent="goHeader">
          {{ slideShowButtonLabel }}
        </a>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
