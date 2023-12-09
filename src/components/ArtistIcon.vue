<script setup>
import starryNight from "@/assets/slides/starry-night/artist.jpg";
import girlWithPearlEarring from "@/assets/slides/girl-with-pearl-earring/artist.jpg";
import guernica from "@/assets/slides/guernica/artist.jpg";
import penitentMagdalene from "@/assets/slides/penitent-magdalene/artist.jpg";
import theStormOnTheSeaOfGalilee from "@/assets/slides/the-storm-on-the-sea-of-galilee/artist.jpg";
import theGreatWaveOffKanagawa from "@/assets/slides/the-great-wave-off-kanagawa/artist.jpg";
import vanGoghSelfPortrait from "@/assets/slides/van-gogh-self-portrait/artist.jpg";
import theSleepingGypsy from "@/assets/slides/the-sleeping-gypsy/artist.jpg";
import ladyWithAnErmine from "@/assets/slides/lady-with-an-ermine/artist.jpg";
import theNightCafe from "@/assets/slides/the-night-cafe/artist.jpg";
import theBasketOfApples from "@/assets/slides/the-basket-of-apples/artist.jpg";
import theBoyInTheRedVest from "@/assets/slides/the-boy-in-the-red-vest/artist.jpg";
import arnolfiniPortrait from "@/assets/slides/arnolfini-portrait/artist.jpg";
import monaLisa from "@/assets/slides/mona-lisa/artist.jpg";
import theSwing from "@/assets/slides/the-swing/artist.jpg";
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
    <img :src="icon" alt="artist-icon">
</template>