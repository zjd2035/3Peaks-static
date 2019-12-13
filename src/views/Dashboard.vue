<template>
  <h1>To be continued, {{ currentUser.firstName }}...</h1>
</template>

<script>
import { CURRENT_USER_QUERY } from '@/services/users';

export default {
  name: 'dashboard',
  data() {
    return {
      currentUser: Object,
    };
  },
  created() {
    this.getCurrentUser();
  },
  methods: {
    getCurrentUser() {
      this.$apollo.query({
        query: CURRENT_USER_QUERY,
      }).then((response) => {
        this.currentUser = response.data.currentUser;
      }).catch((error) => {
        console.log(error);
        this.$router.replace('/login');
      });
    },
  },
};
</script>

<style lang='scss'>

</style>
