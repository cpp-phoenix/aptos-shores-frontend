<template>
  <h1>Settings</h1>
  <Button 
    prefix-icon="signOutAlt"
    variant="secondary"
    usage="neutral"
    @click="handleLogout"
  >
    Logout
  </Button>
</template>

<script lang="ts" setup>
import { Button } from '@/components';

const { logout } = useStrapiAuth();
const router = useRouter();

definePageMeta({
  middleware: 'auth',
});

const handleLogout = () => {
  logout()
  router.push('/')
}
</script>
