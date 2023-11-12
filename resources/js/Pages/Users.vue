<template>
  <Head title="Users" />

  <h1 class="text-3xl">
    Users
  </h1>

  <!-- <div style="margin-top: 400px">
    <p>The current time is {{ time }}.</p>

    <Link href="/users" class="text-blue-500" preserve-scroll>
    Refresh
    </Link>
  </div> -->

  <ul>
    <li
      v-for="user in users"
      :key="user.id"
      v-text="user.name"
    />
  </ul>
</template>

<script setup>
// import Layout from "../Shared/Layout";

defineProps({ users: Array });
// export default {
  // components: { Layout },
  // layout: Layout,
  // props: { time: String }
// };
</script>