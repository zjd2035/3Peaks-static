<template>
  <div class="login">
    <h1>Login</h1>

    <div class="content">
      <form class="form" @submit.prevent="validateRecaptcha()">
        <n-field :errorText="loginError">
          <n-text-input
            type="text"
            v-model="email"
            label="Email"
            name="email"
            @input="(value) => email = value"
          />
        </n-field>

        <n-field>
          <n-text-input
            type="password"
            :value="password"
            label="Password"
            name="password"
            @input="(value) => password = value"
          />
        </n-field>

        <n-field>
          <vue-recaptcha
            ref="recaptcha"
            size="invisible"
            :sitekey="sitekey"
            @verify="login"
            @expired="onCaptchaExpired"
          />
          <n-button
            type="submit"
            size="medium"
            color="orange"
          >
            Log in
          </n-button>
        </n-field>
      </form>
    </div>
  </div>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha';

import { LOGIN_MUTATION } from '@/services/users';

import NButton from '@/components/forms/Button.vue';
import NTextInput from '@/components/forms/TextInput.vue';
import NField from '@/components/forms/Field.vue';

export default {
  name: 'login',
  components: {
    VueRecaptcha,
    NButton,
    NTextInput,
    NField,
  },
  data() {
    return {
      email: '',
      loginError: '',
      password: '',

      sitekey: process.env.VUE_APP_RECAPTCHA_SITE_KEY,
    };
  },
  methods: {
    login(recaptchaToken) {
      this.removeFormErrors();

      this.$apollo.mutate({
        mutation: LOGIN_MUTATION,
        variables: {
          email: this.email,
          password: this.password,
          recaptchaToken,
        },
      }).then((response) => {
        sessionStorage.setItem('auth-token', response.data.login.token);
        this.$router.push({ name: 'dashboard' });
      }).catch((error) => {
        this.loginError = error.message.replace('GraphQL error:', '').trim();
      });
    },
    removeFormErrors() {
      this.loginError = '';
    },
    validateRecaptcha() {
      this.$refs.recaptcha.execute();
    },
    onCaptchaExpired() {
      this.$refs.recaptcha.reset();
    },
  },
};
</script>

<style lang='scss'>
@import '@/styles/common.scss';

.login {
  width: 900px;
  margin: 0 auto;

  .content {
    font-family: 'PT Sans', sans-serif;
    font-size: 22px;
    color: $font-color;

    p {
      margin: 0 auto;
      text-align: center;
      width: 70%;
    }

    .form {
      margin-top: 8vh;

      .form-group {
        margin-top: 2vh;
        display: flex;
        justify-content: center;

        &.error {
          color: $form-error;
          display: none;
          width: 597px;
          margin: 0 auto;
        }
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .login {
    width: calc(100vw - 30px);
    height: 100%;
    padding: 15px;

    .content p {
      width: 100%;
    }

    form {
      margin-top: 3vh !important;
    }

    .form-group.emailbtn {
      flex-direction: column;

      input[type='text'] {
        width: 100% !important;
        margin-bottom: 20px;
        box-sizing: border-box;
      }
    }
  }
}
</style>
