<template>
  <div class="landing-page">
    <h1>Budgeting should be simple</h1>

    <Button
      classes="btn"
      color="orange"
      size="large"
      type="button"
      v-on:click="signup()"
    >
      Create an account
    </Button>
  </div>
</template>

<script>
import Button from '@/components/forms/Button.vue';

export default {
  name: 'landing-page',
  data() {
    return {};
  },
  components: {
    Button,
  },
  methods: {
    signup() {
      window.scrollTo(0, 0);
      this.$router.push('signup');
    },
  },
};
</script>

<style lang="scss">
.landing-page {
  width: 900px;
  margin: 0 auto;

  h1 {
    color: #176F90;
    font-size: 50px;
    width: 100%;
    text-align: center;
    margin: 10px 0 25px;
  }

  .content {
    display: flex;
    justify-content: space-between;
  }
}

@media screen and (max-width: 900px) {
  .landing-page {
    width: calc(100vw - 30px);
    height: 100%;
    padding: 15px;

    .content {
      justify-content: flex-start;
      flex-direction: column;
    }
  }
}
</style>
