<template>
  <Head>
    <title>Home</title>
    <meta type="description" content="Home information" head-key="description">
  </Head>

  <h1 class="text-3xl">
    Blog
  </h1>

  <pre>
    <code>
      class Controller extends BaseController
      {
          use AuthorizesRequests, ValidatesRequests;
      }
    </code>
  </pre>

  <div id="example2">
    <pre>
      <code ref="code">
        class Controller extends BaseController
        {
            use AuthorizesRequests, ValidatesRequests;
        }
      </code>
    </pre>
  </div>
</template>

<script setup>

import { onMounted, ref } from "vue";
import { highlightAll,highlight,highlightElement } from "@/Services/SyntaxHighlighting";

defineProps({ name: String })

const code = ref([])

onMounted(() => {
  // highlightAll(); 
  // highlight("#example2")
  highlightElement(code.value);

})
// import Layout from "@/Shared/Layout";

// export default {
//   // components: { Layout },
//   layout: Layout,
// };
</script>