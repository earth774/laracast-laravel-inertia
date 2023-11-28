import { ref } from "vue";

export function useClipborad(text) {
    let copied = ref(false);
    let supported = Boolean(navigator && 'clipboard' in navigator);
    let copy = async()=>{
        if (supported) {
            await navigator.clipboard.writeText(text);

            copied.value = true;

            setTimeout(() => {
                copied.value = false;
            }, 3000);

            alert("Copied!");

            return;
        }

        alert("Apologies, your browser does not support the Cilpboard API.");
}

    return { copy, copied, supported };
}
