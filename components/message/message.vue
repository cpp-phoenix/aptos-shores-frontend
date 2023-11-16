<template>
  <small class="message--component">
    <Icon
      v-if="type != 'help'"
      name="exclamationTriangle"
      size="small"
      class="message--icon"
    />
    <span
      class="message--text"
      :class="{
        'message--error': type === 'error',
      }"
    >
      <slot />
    </span>
  </small>
</template>

<script lang="ts" setup>
import { Icon } from '@/components';

const props = withDefaults(
  defineProps<{
    type: 'error' | 'help' | 'warning';
  }>(),
  {
    type: 'help',
  }
);
</script>
