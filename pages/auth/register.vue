<template>
  <h1>Register</h1>
  <Form fullWidth>
    <Input
      v-model="user.username"
      fullWidth
      id="username"
      label="Username"
      placeholder="Username"
      required
    />
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
    <Button @click.prevent="handleRegister">Register</Button>
  </Form>
  <Message>You already have an account? <NuxtLink to="/auth/login" class="link">Login</NuxtLink></Message>
</template>

<script setup lang="ts">
import { Button, Form, Input, Message } from '@/components';

const { register } = useStrapiAuth();
const router = useRouter();

definePageMeta({
  middleware: 'auth',
  layout: 'auth'
});

const user = ref({
  username: '',
  email: '',
  password: '',
});

const handleRegister = async () => {
  try {
    await register({
      username: user.value.username,
      email: user.value.email,
      password: user.value.password
    })
    router.push('/');
  } catch (e) {
    console.log(e);
  }
}
</script>
