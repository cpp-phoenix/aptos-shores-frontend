<template>
  <component
    :is="icons[props.name] ?? null"
    :class="['icon--component', `icon--component-${props.size}`]"
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

const props = defineProps<{
  name: IconName;
  size?: 'large' | 'medium' | 'small' | 'xsmall';
}>();
</script>
