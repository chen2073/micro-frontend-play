<script setup lang="ts">
import { defineAsyncComponent } from "vue"
import Error from "./Error.vue"

const RemoteApp1 = defineAsyncComponent({
  loader: () => import("remote1/APP"),
  delay: 200,
  errorComponent: Error,
  timeout: 3000,
})
</script>

<template>
  <h1>
    Hello This is host app
  </h1>
  <div>Remote Component:
    <RemoteApp1 />
  </div>
</template>