<template>
  <button
    :type="type"
    :class="buttonClasses"
    v-on:click="$emit('click')"
    @keyup.enter="$emit('click')"
    :aria-label="aria"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    aria: String,
    type: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    classes: String,
  },
  computed: {
    buttonClasses: function buttonClasses() {
      return `${this.size} ${this.color} ${this.classes || ''}`;
    },
  },
};
</script>

<style lang='scss' scoped>
button {
  border: none;
  color: $white;
  font-family: 'PT Sans', sans-serif;
  cursor: pointer;

  /* Colors */
  &.orange {
    background-image: linear-gradient(130deg, $orange-lt 0%, $orange 100%);
    background-color: $orange;
  }

  /* Sizes */
  &.medium {
    border-radius: 20px;
    font-size: 20px;
    padding: 3px 30px;
  }
  &.large {
    border-radius: 30px;
    font-size: 26px;
    padding: 5px 60px;
  }
}

@media screen and (max-width: 900px) {
  button {
    padding: 5px 30px !important;
    box-sizing: border-box;
    margin-left: 0 !important;
  }
}
</style>
