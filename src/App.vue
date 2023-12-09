<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="App logo" class="logo" src="@/assets/galleria-logo.svg" width="170" height="48" />

    <nav>
      <RouterLink to="/" class="text-link-1">START SLIDESHOW</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>
