<template>
  <component
    :is="icons[props.name] ?? null"
    :class="['icongame--component', `icongame--component-${props.size}`]"
  />
</template>

<script lang="ts" setup>
import * as icons from './svg';
import type { IconGameName } from './types';

/*
 |--------------------------------------------------------------------------
 | Props and emits
 |--------------------------------------------------------------------------
 */

const props = defineProps<{
  name: IconGameName;
  size?: 'large' | 'medium' | 'small' | 'xsmall';
}>();
</script>
