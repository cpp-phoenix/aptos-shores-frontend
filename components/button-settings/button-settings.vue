<template>
  <NuxtLink :to="props.to" class="buttonsettings--component">
    <div class="buttonsettings--wrapper">
      <IconGame name="settings" />
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
import { IconGame } from '@/components';

/*
 |--------------------------------------------------------------------------
 | Props and emits
 |--------------------------------------------------------------------------
*/
const props = defineProps<{
  to: string;
}>();
</script>
