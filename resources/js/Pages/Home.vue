<template>
    <h1 class="text-4xl text-bold">Home</h1>
  
    <p>In this series, we will use the following frameworks:</p>
  
    <ul>
      <li v-for="framework of frameworks" v-text="framework"></li>
    </ul>
    <Nav />
  </template>
  
  <script>
import Nav from '../Shared/Nav.vue';
  export default {
    props: {
      name: String,
      frameworks: Array,
    },
    components: { Nav },
  };
  </script>