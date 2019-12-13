<template>
  <header>
    <a href="/">
      <img alt="flex fund logo" src="@/assets/logo.svg" />
    </a>
  </header>
</template>

<script>
/* Nothing yet */
</script>

<style lang='scss' scoped>
header {
  font-family: 'PT Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: calc(100% - 6vw);
  padding: 5px 3vw;
  color: #176F90;
  font-size: 40px;

  a {
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    color: inherit;

    .title {
      padding-top: 5px;
    }
  }
}
</style>
