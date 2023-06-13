
<script setup lang="ts">
import { computed } from "@vue/runtime-core"
import { ref } from "vue";

const focused = ref(false)
export interface Props {
  modelValue: string | number,
  typeValue: "string" | "number" | "password",
  placeValue?: string
  backgroundColor?: string
  borderRadius?: string
  color?: string
  borderColor?: string
  focusBorderColor?: string,
  focusBackgroundColor?: string
  minLength?: string
  maxLength?: string
  pattern?: string
  minWidth?: string
  maxWidth?: string
  width?: string
  height?: string
  minHeight?: string
  maxHeight?: string
}

export interface Emits {
  (e: 'update:modelValue', value: string | number): void
}

const probs = defineProps<Props>()

const emit = defineEmits<Emits>()

const value = computed({
  get() {
    return probs.modelValue
  },
  set(value: string | number) {
    emit("update:modelValue", value)
  }
})

const inputValue = computed({
  get() {
    return value.value
  },
  set(value) {
    if (probs.typeValue === "number") {
      value = Number(value)
    }
    emit("update:modelValue", value)
  }
})

</script>
<template>
  <input 
    class="input-style"
    v-model="inputValue"
    :type="typeValue" 
    :placeholder="placeValue"
    :minlength="minLength"
    :maxlength="maxLength"
    :pattern="pattern"
    :style="[{
      'background-color': backgroundColor,
      'border-radius': borderRadius,
      'color': color,
      'border-color': focused ? focusBorderColor : borderColor,
      'background': focused ? focusBackgroundColor : backgroundColor,
      'min-width': minWidth,
      'max-width': maxWidth,
      'width': width,
      'height': height,
      'min-height': minHeight,
      'max-height': maxHeight
    }]"
    @focus="focused = true"
    @blur="focused = false">
</template>

<style scoped src="../assets/style.css">

</style>



