<template>
  <div
    :class="[
      'input--component',
      {
        'input--component-error': !!props.error,
        'input--component-disabled': props.disabled,
        'input--component-full': props.fullWidth,
      },
    ]"
  >
    <Label v-if="!!props.label" :for="props.id" :required="props.required">
      {{ props.label }}
    </Label>

    <div class="input--wrapper">
      <div
        v-if="!!props.prefixIcon"
        class="input--icon input--icon-prefix"
        @click="emit('click:prefixIcon')"
      >
        <Icon size="medium" :name="props.prefixIcon" />
      </div>
      <input
        :id="props.id"
        :type="props.type"
        :placeholder="props.placeholder"
        :readonly="props.readonly"
        :required="props.required"
        :disabled="props.disabled"
        :value="props.modelValue"
        :min="props.min"
        :max="props.max"
        :name="props.name"
        :step="props.step"
        :inputMode="props.inputMode"
        :autocapitalize="props.autocapitalize"
        :autocomplete="props.autocomplete"
        :autocorrect="props.autocorrect"
        :spellcheck="props.spellcheck"
        @input="(event) => emit('update:modelValue', (event.target as HTMLInputElement).value)"
      />
      <div
        v-if="!!props.suffixIcon"
        class="input--icon input--icon-suffix"
        @click="emit('click:suffixIcon')"
      >
        <Icon size="medium" :name="props.suffixIcon" />
      </div>
    </div>

    <Message v-if="!!props.help" type="help">{{ props.help }}</Message>
    <Message v-if="!!props.error && typeof error === 'string'" type="error">{{
      props.error
    }}</Message>
  </div>
</template>

<script lang="ts" setup>
import { Icon, Label, Message } from '@/components';
import type { IconName } from '@/components';

const props = defineProps<{
  autocapitalize?: string;
  autocomplete?: string;
  autocorrect?: string;
  disabled?: boolean;
  error?: boolean | string;
  fullWidth?: boolean;
  help?: string;
  id: string;
  inputMode?:
    | 'none'
    | 'text'
    | 'decimal'
    | 'numeric'
    | 'tel'
    | 'search'
    | 'email'
    | 'url';
  label?: string;
  max?: string;
  min?: string;
  modelValue: string | number | undefined;
  name?: string;
  placeholder?: string;
  prefixIcon?: IconName;
  readonly?: boolean;
  required?: boolean;
  spellcheck?: string;
  step?: number;
  suffixIcon?: IconName;
  type?: 'text' | 'tel' | 'number' | 'email';
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'click:prefixIcon'): void;
  (e: 'click:suffixIcon'): void;
}>();
</script>
