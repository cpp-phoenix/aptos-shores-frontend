<template>
  <component
    :is="props.to ? 'a' : 'button'"
    :type="type"
    :href="props.to"
    :disabled="props.disabled"
    :class="[
      'button--component',
      `button--component-${props.size}`,
      `button--component-${props.usage}`,
      `button--component-${props.variant}`,
      {
        'button--component-disabled': props.disabled,
        'button--component-full': props.fullWidth,
        'button--component-icononly': props.prefixIcon && !$slots.default,
      },
    ]"
  >
    <div class="button--wrapper">
      <Icon
        v-if="props.prefixIcon"
        :name="props.prefixIcon"
        :size="props.size === 'small' ? 'small' : 'medium'"
      />
      <span v-if="$slots.default">
        <slot />
      </span>
      <Icon
        v-if="props.suffixIcon"
        :name="props.suffixIcon"
        :size="props.size === 'small' ? 'small' : 'medium'"
      />
    </div>
  </component>
</template>

<script lang="ts" setup>
import { Icon } from '@/components';
import type { IconName } from '@/components';

interface ButtonProps {
  disabled?: boolean;
  fullWidth?: boolean;
  prefixIcon?: IconName;
  size?: 'large' | 'medium' | 'small';
  suffixIcon?: IconName;
  to?: string;
  type?: 'submit' | 'reset' | 'button';
  usage?: 'cta' | 'neutral' | 'destructive';
  variant?: 'primary' | 'secondary' | 'plain';
}

const props = withDefaults(defineProps<ButtonProps>(), {
  disabled: false,
  fullWidth: false,
  prefixIcon: undefined,
  size: 'medium',
  suffixIcon: undefined,
  to: undefined,
  type: 'button',
  usage: 'cta',
  variant: 'primary',
});
</script>
