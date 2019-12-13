<template>
  <span class="wrapper">
    <label :for="name">{{ label }}:</label>
    <input
      :type="type"
      v-model="localValue"
      :class="inputClasses"
      :id="name"
    />
  </span>
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    size: {
      type: String,
      default: 'large',
    },
    width: {
      type: String,
      default: 'full',
    },
    label: String,
  },
  // watch: {
  //   value() {
  //     this.$emit('input', this.value);
  //   },
  // },
  computed: {
    inputClasses: function inputClasses() {
      return `${this.size} ${this.width}`;
    },
    localValue: {
      get() { return this.value; },
      set(newValue) { this.$emit('input', newValue); },
    },
  },
};
</script>

<style lang='scss' scoped>

.wrapper {

  label {
    display: block;
    font-size: 18px;
  }

  input {
    background-color: $form-input-background;
    color: $font-color;
    border: 1px solid $form-input-border;

    &.full {
      width: 400px;
    }

    &.half {
      width: 190px;
    }

    &.large {
      border-radius: 5px;
      font-size: 22px;
      padding: 3px 6px;
    }
  }
}
</style>
