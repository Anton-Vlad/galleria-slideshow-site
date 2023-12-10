<script setup>
import starryNight from "@/assets/slides/starry-night/hero-small.jpg";
import girlWithPearlEarring from "@/assets/slides/girl-with-pearl-earring/hero-small.jpg";
import guernica from "@/assets/slides/guernica/hero-small.jpg";
import penitentMagdalene from "@/assets/slides/penitent-magdalene/hero-small.jpg";
import theStormOnTheSeaOfGalilee from "@/assets/slides/the-storm-on-the-sea-of-galilee/hero-small.jpg";
import theGreatWaveOffKanagawa from "@/assets/slides/the-great-wave-off-kanagawa/hero-small.jpg";
import vanGoghSelfPortrait from "@/assets/slides/van-gogh-self-portrait/hero-small.jpg";
import theSleepingGypsy from "@/assets/slides/the-sleeping-gypsy/hero-small.jpg";
import ladyWithAnErmine from "@/assets/slides/lady-with-an-ermine/hero-small.jpg";
import theNightCafe from "@/assets/slides/the-night-cafe/hero-small.jpg";
import theBasketOfApples from "@/assets/slides/the-basket-of-apples/hero-small.jpg";
import theBoyInTheRedVest from "@/assets/slides/the-boy-in-the-red-vest/hero-small.jpg";
import arnolfiniPortrait from "@/assets/slides/arnolfini-portrait/hero-small.jpg";
import monaLisa from "@/assets/slides/mona-lisa/hero-small.jpg";
import theSwing from "@/assets/slides/the-swing/hero-small.jpg";
import { computed } from "vue";

const props = defineProps({
    slug: {
        type: String,
        required: true
    }
})

const icon = computed(() => {
    switch (props.slug) {
        case 'starry-night':
            return starryNight;
            break;
        case 'girl-with-pearl-earring':
            return girlWithPearlEarring;
            break;
        case 'guernica':
            return guernica;
            break;
        case 'penitent-magdalene':
            return penitentMagdalene;
            break;
        case 'the-storm-on-the-sea-of-galilee':
            return theStormOnTheSeaOfGalilee;
            break;
        case 'the-great-wave-off-kanagawa':
            return theGreatWaveOffKanagawa;
            break;
        case 'van-gogh-self-portrait':
            return vanGoghSelfPortrait;
            break;
        case 'the-sleeping-gypsy':
            return theSleepingGypsy;
            break;
        case 'lady-with-an-ermine':
            return ladyWithAnErmine;
            break;
        case 'the-night-cafe':
            return theNightCafe;
            break;
        case 'the-basket-of-apples':
            return theBasketOfApples;
            break;
        case 'the-boy-in-the-red-vest':
            return theBoyInTheRedVest;
            break;
        case 'arnolfini-portrait':
            return arnolfiniPortrait;
            break;
        case 'mona-lisa':
            return monaLisa;
            break;
        case 'the-swing':
            return theSwing;
            break;

        default:
            return null;
            break;
    }
})


</script>

<template>
    <img :src="icon" class="slide-hero__image slide-hero__image--small" alt="hero-small-icon">
</template>