<template>
  <div>
    <h1>Aptos Shores</h1>

    <h2>Button component</h2>
    <Button prefix-icon="circle">Button</Button>

    <h2>Input component</h2>
    <Input required prefix-icon="circle" help="Help text" label="Label" placeholder="Placeholder" />

    <h2>Label component</h2>
    <Label required>Label</Label>

    <h2>Message component</h2>
    <Message type="error">Message</Message>
  </div>
</template>

<script lang="ts" setup>
import { Button, Input, Label, Message } from '@/components';
</script>
