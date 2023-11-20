<template>
  <nav class="nav--component">
    <div class="nav--container">

      <!-- Logo -->
      <Logo />

      <!-- Menu Primary -->
      <ul class="nav--menuprimary">
        <li class="nav--item">
          <NavLink to="/">Quests</NavLink>
        </li>
        <li class="nav--item">
          <NavLink to="/profil">Profil</NavLink>
        </li>
        <li class="nav--item">
          <NavLink to="/store">Store</NavLink>
        </li>
      </ul>

      <!-- Menu Secondary -->
      <ul class="nav--menusecondary">
        <li>
          <Button to="/auth/register" variant="secondary" size="small">Register</Button>
        </li>
        <li>
          <Button to="/auth/login" size="small">Login</Button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { Button, Logo, NavLink } from '@/components';
</script>
