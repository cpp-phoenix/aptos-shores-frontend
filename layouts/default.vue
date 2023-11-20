<template>
  <div>
    <Nav />
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { Nav } from "@/components";

const user = useStrapiUser();
console.log(user.value);
</script>