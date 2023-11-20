<template>
  <form
    :class="[
      'form--component',
      `form--component-${props.direction}`,
      {
        'form--component-full': props.fullWidth,
      }
    ]"
  >
    <slot />
  </form>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
  direction?: 'left' | 'center' | 'right';
  fullWidth?: boolean;
}>(), {
  direction: 'center',
});
</script>
