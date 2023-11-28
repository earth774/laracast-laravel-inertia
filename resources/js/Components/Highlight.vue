<template>
    <pre>
    <code ref="refCode">
    {{code}}
    </code>
</pre>
</template>

<script setup>
import { highlightAll,highlight,highlightElement } from "@/Services/SyntaxHighlighting";
import { onMounted, ref } from "vue";

const refCode = ref([])

defineProps({ code: String })


onMounted(() => {
  // highlightAll(); 
  // highlight("#example2")
  highlightElement(refCode.value);

})
</script>

<style>

</style>