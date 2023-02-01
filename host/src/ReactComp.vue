<script setup lang="ts">
import { ref } from 'vue'
import ReactDOMServer from "react-dom/server"

const html = ref(`<h3>loading</h3>`)

const fetchImport = () => new Promise(async (resolve, reject) => {
  try {
    const res = (await import("remote2/APP")).default
    resolve(res())
  } catch (err) {
    reject(err);
  }
})


fetchImport()
  .then(react_dom => {
    const react_html = ReactDOMServer.renderToString(react_dom)
    html.value = react_html
    console.log(html.value)
  })


// const getHtml = (text) => `<h3>${text}</h3>`
</script>


<template>
  <div v-html="html" />
  <!-- <div v-html="getHtml('this is react component')" /> -->
</template>