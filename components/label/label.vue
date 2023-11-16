<template>
  <label
    :class="[
      'label--component',
      {
        'label--component-required': props.required,
      },
    ]"
  >
    <slot />
  </label>
</template>

<script lang="ts" setup>
const props = defineProps<{
  required?: boolean;
}>();
</script>
