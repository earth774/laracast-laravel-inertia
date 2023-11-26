<template>
  <Head :title=user.name />

  <h1 class="text-3xl">
    {{user.name}}
  </h1>
  <p>{{ user.email }}</p>
  <p>Register: {{ user.created_at }}</p>
</template>

<script setup>
defineProps({user: Object});
</script>