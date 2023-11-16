<template>
  <component
    :is="icons[name] ?? null"
    :class="['icon--component', `icon--component-${size}`]"
  />
</template>

<script lang="ts" setup>
import * as icons from './svg';
import type { IconName } from './types';

/*
 |--------------------------------------------------------------------------
 | Props and emits
 |--------------------------------------------------------------------------
 */

defineProps<{
  name: IconName;
  size?: 'large' | 'medium' | 'small' | 'xsmall';
}>();
</script>
