<template>
  <Head>
    <title>Home</title>
    <meta type="description" content="Home information" head-key="description">
  </Head>

  <h1 class="text-3xl">
    Home {{ name }}
  </h1>
</template>

<script setup>
defineProps({ name: String })
// import Layout from "@/Shared/Layout";

// export default {
//   // components: { Layout },
//   layout: Layout,
// };
</script>