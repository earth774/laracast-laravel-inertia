<template>
  <Head>
    <title>Home</title>
    <meta type="description" content="Home information" head-key="description">
  </Head>

  <h1 class="text-3xl">
    Blog
  </h1>

  <Highlight :code="snappet"/>
</template>

<script setup>

import Highlight from "@/Components/Highlight.vue";

let snappet = 
`
  class Controller extends BaseController
  {
      use AuthorizesRequests, ValidatesRequests;
  }
`;
// import Layout from "@/Shared/Layout";

// export default {
//   // components: { Layout },
//   layout: Layout,
// };
</script>