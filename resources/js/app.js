import { createApp, h } from 'vue'
import { createInertiaApp,Link } from '@inertiajs/vue3'
import Layout from "./Shared/Layout.vue";

createInertiaApp({
  resolve: (name) => {
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })

    // New code added
    let page = pages[`./Pages/${name}.vue`].default
    
    if(!page.layout){
      page.layout=Layout;
    }
    return page;
  },
  progress:{
      color: 'red',
      showSpinner: true,
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .component("Link", Link)
      .mount(el)
  },
}) 
