<template>
  <h1>Login</h1>
  <Form fullWidth>
    <Input
      v-model="user.email"
      fullWidth
      id="email"
      label="Email"
      placeholder="Email"
      required
    />
    <Input
      v-model="user.password"
      fullWidth
      id="password"
      label="Password"
      placeholder="Password"
      required
      type="password"
    />
    <Button @click.prevent="handleLogin">Login</Button>
  </Form>
  <Message>Don't have an account? <NuxtLink to="/auth/register" class="link">Register</NuxtLink></Message>
</template>

<script setup lang="ts">
const { login } = useStrapiAuth();
const router = useRouter();
import { Button, Form, Input, Message } from '@/components';

definePageMeta({
  middleware: 'auth',
  layout: 'auth'
});

const user = ref({
  email: '',
  password: '',
});

const handleLogin = async () => {
  try {
    await login({ identifier: user.value.email, password: user.value.password })
    router.push('/');
  } catch (e) {
    console.log(e);
  }
}
</script>
