import { createApp, h } from 'vue'
import { createInertiaApp,Link,Head } from '@inertiajs/vue3'
import Layout from "./Shared/Layout.vue";

createInertiaApp({
  resolve: async (name) => {
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })

    // New code added
    let page = await (pages[`./Pages/${name}.vue`]).default
    
    if (page.layout === undefined) {
      page.layout = Layout;
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
      .component("Head", Head)
      .mount(el)
  },

  title: title => `My App - ${title}`
}) 
