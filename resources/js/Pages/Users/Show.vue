<template>
  <Head :title=user.data.name />

  <h1 class="text-3xl">
    {{user.data.name}}
  </h1>
  <p>{{ user.data.email }}</p>
  <p>Register: {{ user.data.created_at }}</p>
</template>

<script setup>
defineProps({user: Object});
</script>