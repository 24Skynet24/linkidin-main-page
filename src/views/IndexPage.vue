<script setup>

import UserInfo from "../components/UserInfo.vue";
import UserPosters from "../components/UserPosters.vue";
</script>

<template>
  <main class="container">
    <user-info/>
    <user-posters/>
  </main>
</template>


<style lang="scss" scoped>

main {
  padding-bottom: rem(10);
}

</style>