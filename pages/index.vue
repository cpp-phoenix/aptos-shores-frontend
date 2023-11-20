<template>
  <h1>Quests</h1>
  <div v-if="user">{{ user.username }}</div>
</template>

<script lang="ts" setup>
const user = useStrapiUser();
console.log(user.value);
</script>
