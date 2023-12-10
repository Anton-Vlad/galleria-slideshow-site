<script setup>
import { useRoute } from 'vue-router';
import { ref, watchEffect } from 'vue';
import { useGalleriaStore } from '@/stores/galleria';
import SlideFooter from '@components/SlideFooter.vue';
import SlideHeroTitle from '@components/SlideHeroTitle.vue';
import HeroLargeIcon from '@components/HeroLargeIcon.vue';
import ViewImageButton from '@components/ViewImageButton.vue';
import GalleryIcon from '@components/GalleryIcon.vue';

const route = useRoute();
const galleria = useGalleriaStore();

const currentSlideSlug = ref(route.params.slideSlug);
const showPreview = ref(false);

const getSlideInfo = (slug) => {
    slideInfo.value = galleria.getSlideBySlug(slug);
}

const slideInfo = ref({});
getSlideInfo(currentSlideSlug.value)

watchEffect(() => getSlideInfo(route.params.slideSlug));
</script>

<template>
    <main class="slide-view">
        <div class="container">
            <div class="slide-hero">
                <HeroLargeIcon :slug="slideInfo.slug" />

                <ViewImageButton @click="() => { showPreview = !showPreview }" />
                <SlideHeroTitle :name="slideInfo.name" :artist="slideInfo.artist.name" :slug="slideInfo.slug" />
            </div>

            <div class="slide-details">
                <div class="slide-details__year text-display">
                    {{ slideInfo.year }}
                </div>
                <p class="slide-details__p">
                    {{ slideInfo.description }}
                </p>

                <a :href="slideInfo.source" target="_blank" class="slide-details__a text-link-2">
                    Go to source
                </a>
            </div>
        </div>

        <div v-if="showPreview" class="preview-modal">
            <div class="preview-modal__layer" @click="() => { showPreview = !showPreview }"></div>
            <div>
                <div class="preview-modal__close" @click="() => { showPreview = false }">
                    close
                </div>
                <GalleryIcon :slug="slideInfo.slug" />
            </div>
        </div>

        <SlideFooter />
    </main>
</template>