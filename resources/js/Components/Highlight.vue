<template>
    <div>
        <header v-if="supported" class="bg-gray-800 text-white flex justify-end px-2 py-1 text-xs border-b border-gray-700">
            <button @click="copy">{{(!copied)?'Copy':'Copied'}}</button>
        </header>
        <pre>
            <code ref="block">
                {{code}}
            </code>
        </pre>
    </div>
</template>

<script setup>
import { highlightAll,highlight,highlightElement } from "@/Services/SyntaxHighlighting";
import { onMounted, ref } from "vue";
import { useClipborad } from "@/Composables/useClipborad";

const block = ref([])
let props = defineProps({ code: String });

let {copy, copied, supported} = useClipborad(props.code);

onMounted(() => {
  // highlightAll(); 
  // highlight("#example2")
  highlightElement(block.value);

})
</script>

<style>

</style>