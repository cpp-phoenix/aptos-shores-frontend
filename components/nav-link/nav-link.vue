<template>
  <NuxtLink
    :to="props.to"
    class="navlink--component"
    activeClass="navlink--component-active"
  >
    <slot />
  </NuxtLink>
</template>

<script lang="ts" setup>
/*
 |--------------------------------------------------------------------------
 | Props and emits
 |--------------------------------------------------------------------------
*/
const props = defineProps<{
  to: string;
}>();
</script>
