<template>
  <div class="layoutauth--container">
    <img src="/img/auth-background.jpg" alt="Auth background" class="layoutauth--background" />
    <Logo />
    <div class="layoutauth--card">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Logo } from '@/components';
</script>
