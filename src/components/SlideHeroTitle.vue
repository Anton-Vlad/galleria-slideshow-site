<script setup>
import ArtistIcon from '@components/ArtistIcon.vue';

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="slide-view__title">
        <h1 class="slide-view__name">
            {{ name }}
        </h1>
        <div class="slide-view__subtitle text-subhead-1">
            {{ artist }}
        </div>

        <ArtistIcon :slug="slug" />
    </div>
</template>