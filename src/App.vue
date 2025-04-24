<template>
  <div class="text-center m-3" v-if="loading">
    <v-progress-circular
      indeterminate
      color="primary"
    />
  </div>

  <div v-else>
    <Header />
    <RouterView />
  </div>
</template>

<script setup>

import { RouterView } from "vue-router";
import Header from "./components/navigation/header.vue";
import {firstLoad} from "@/composables/auth.js";


const {loading} = firstLoad();

</script>

<style scoped>

</style>  








the future of programming les in the hands of the next generation of developers.
these days, programming is not just a skill; it's a superpower. And with great power comes great responsibility. As we navigate the complexities of the digital world, we must remember that our code can shape the future in ways we can't even imagine.
surely, the future of programming lies in the hands of the next generation of developers. They are the ones who will take our ideas and turn them into reality, who will push the boundaries of what is possible and create new technologies that we can't even dream of yet.
frontend\
hencefort we are the best in the painting industry so let us handle all yout painting works
homenovation at its best