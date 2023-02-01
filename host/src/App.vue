<script setup lang="ts">
import { ref, defineAsyncComponent, computed } from "vue"
import Error from "./Error.vue"
import fetchImport from "./asyncImport";

// const RemoteApp1 = defineAsyncComponent({
//   loader: () => import("remote1/APP"),
//   delay: 200,
//   errorComponent: Error,
//   timeout: 3000,
// })

// const RemoteApp2 = defineAsyncComponent({
//   loader: () => import("remote2/APP"),
//   delay: 200,
//   errorComponent: Error,
//   timeout: 3000,
// })
const data = ref(null);

data.value = await fetchImport();
const RemoteApp2 = computed(() => data.value)
</script>

<template>
  <h1>
    Hello This is host app
  </h1>
  <!-- <div>Vue Remote Component:
    <RemoteApp1 />
  </div> -->
  <div>
    React Remote Component:
    <div v-html="RemoteApp2"></div>
  </div>
</template>