<template>
  <div class="signup">
    <div id="notification">
      <span>Thanks for signing up! We're working hard on bringing
        you the best possible app for keeping track of your
        spending. Look forward to hearing from us soon!</span>
      <span v-on:click="closeNotification()" class="btn">X</span>
    </div>

    <h1>Create your account</h1>

    <div class="content">
      <form class="form" @submit.prevent="validateRecaptcha()">
        <n-field :errorText="emailError">
          <n-text-input
            type="text"
            :value="email"
            label="Email"
            name="email"
            @input="(value) => email = value"
          />
        </n-field>

        <n-field :errorText="passwordError">
          <n-text-input
            type="password"
            :value="password"
            label="Password"
            name="password"
            @input="(value) => password = value"
          />
        </n-field>

        <n-field :errorText="verifyPasswordError">
          <n-text-input
            type="password"
            :value="verifyPassword"
            label="Verify password"
            name="verifyPassword"
            @input="(value) => verifyPassword = value"
          />
        </n-field>

        <n-field>
          <vue-recaptcha
            ref="recaptcha"
            size="invisible"
            :sitekey="sitekey"
            @verify="signup"
            @expired="onCaptchaExpired"
          />
          <n-button
            type="submit"
            size="medium"
            color="orange"
          >
            Sign Up!
          </n-button>
        </n-field>
      </form>
    </div>
  </div>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha';

import { SIGNUP_MUTATION } from '@/services/users';

import NButton from '@/components/forms/Button.vue';
import NTextInput from '@/components/forms/TextInput.vue';
import NField from '@/components/forms/Field.vue';

export default {
  name: 'signup',
  components: {
    VueRecaptcha,
    NButton,
    NTextInput,
    NField,
  },
  data() {
    return {
      email: '',
      emailError: '',

      password: '',
      passwordError: '',

      verifyPassword: '',
      verifyPasswordError: '',

      sitekey: process.env.VUE_APP_RECAPTCHA_SITE_KEY,
    };
  },
  methods: {
    signup(recaptchaToken) {
      this.removeFormErrors();

      if (this.password.length <= 7) {
        this.passwordError = 'Password must be at least 8 characters long.';
        return;
      }

      if (this.password !== this.verifyPassword) {
        this.verifyPasswordError = "Your passwords don't match.";
        return;
      }

      // eslint-disable-next-line no-useless-escape
      const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if (this.email.trim() === '' || !this.email.match(emailFormat)) {
        this.emailError = 'You must enter a valid email address';
        return;
      }

      this.$apollo.mutate({
        mutation: SIGNUP_MUTATION,
        variables: {
          input: {
            email: this.email,
            password: this.password,
            recaptchaToken,
          },
        },
      }).then((response) => {
        sessionStorage.setItem('auth-token', response.data.signUp.token.value);
        this.$router.push({ name: 'dashboard' });
      }).catch((error) => {
        this.emailError = error.message.replace('GraphQL error:', '').trim();
      });
    },
    validateRecaptcha() {
      this.$refs.recaptcha.execute();
    },
    onCaptchaExpired() {
      this.$refs.recaptcha.reset();
    },
    removeFormErrors() {
      this.emailError = '';
      this.passwordError = '';
      this.verifyPasswordError = '';
    },
    // TODO: move this to a notification component. It's no longer needed here.
    openNotification() {
      document.getElementById('notification').style.display = 'flex';
      document.getElementById('app').style.marginTop = '30px';
    },
    closeNotification() {
      document.getElementById('notification').style.display = 'none';
      document.getElementById('app').style.marginTop = '0';
    },
  },
};
</script>

<style lang='scss'>
@import '@/styles/common.scss';

.signup {
  width: 900px;
  margin: 0 auto;

  #notification {
    display: none;
    width: calc(100vw - 40px);
    position: absolute;
    top: 0;
    left: 0;
    background-color: $green;
    color: $white;
    font-family: 'PT Sans', sans-serif;
    padding: 0 20px;
    justify-content: space-between;

    span {
      padding: 8px 4px;
    }

    .btn {
      cursor: pointer;
    }
  }

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
    }
  }
}

@media screen and (max-width: 900px) {
  .signup {
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

      button {
        padding: 5px 30px !important;
        box-sizing: border-box;
        margin-left: 0 !important;
      }
    }
  }
}
</style>
