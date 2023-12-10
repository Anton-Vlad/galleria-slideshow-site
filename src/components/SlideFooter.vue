<script setup>
import PrevSlideButton from '@components/PrevSlideButton.vue';
import NextSlideButton from '@components/NextSlideButton.vue';

import { useRoute, useRouter } from 'vue-router';
import { ref, watchEffect } from 'vue';
import { useGalleriaStore } from '@/stores/galleria';

const route = useRoute();
const router = useRouter();
const galleria = useGalleriaStore();

const currentSlideSlug = ref(route.params.slideSlug);

const getSlideInfo = (slug) => {
    slideInfo.value = galleria.getSlideBySlug(slug);
    slidePagination.value = galleria.getSlidePagination(slug);
}

const goTo = (direction) => {
    if (slidePagination.value[direction]) {
        router.push({ path: '/' + slidePagination.value[direction] })
    }
}

const slideInfo = ref({});
const slidePagination = galleria.getSlidePagination(currentSlideSlug.value);
getSlideInfo(currentSlideSlug.value)


watchEffect(() => getSlideInfo(route.params.slideSlug));

</script>

<template>
    <footer
        :class="{ 'slide-footer': true, 'with-prev': (!!slidePagination.value.prev), 'with-next': (!!slidePagination.value.next) }">
        <div class="slide-footer__progress" :style="{ 'width': (slidePagination.value.progress + '%') }"></div>
        <div class="container">
            <div>
                <h3 class="slide-footer__name">
                    {{ slideInfo.name }}
                </h3>
                <div class="text-subhead-2">
                    {{ slideInfo.artist.name }}
                </div>
            </div>
            <div class="slide-footer__controls">
                <PrevSlideButton @click="goTo('prev')" />
                <NextSlideButton @click="goTo('next')" />
            </div>
        </div>
    </footer>
</template>
