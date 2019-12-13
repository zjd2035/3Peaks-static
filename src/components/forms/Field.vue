<template>
  <div class="field">
    <div class="field-error" :class="{ active: !!errorText }">
      {{ errorText }}
    </div>
    <div class="inputs" :class="{ multiple: inputCount > 1 }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Field',
  props: {
    errorText: String,
    inputCount: {
      type: Number,
      default: 1,
    },
  },
};
</script>

<style lang='scss'>
.field {
  display: flex;
  justify-content: center;
  margin-top: 2vh;
  flex-direction: column;
}

.inputs {
  display: flex;
  justify-content: center;
  flex-direction: row;

  &.multiple {

    span:not(:first-child) {
      margin-left: 6px;
    }
  }
}

.field-error {
  color: $form-error;
  display: none;
  margin: 0 auto;

  &.active {
    display: block;
  }
}
</style>
