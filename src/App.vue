<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  overflow: hidden;
  margin: 0;
  padding: 0;
  /* background-color: #eee; */
}
body {
  margin: 0;
  padding: 0;
}
ul {
  padding: 0;
  margin: 0;
}
ul li {
  list-style: none;
}
p {
  margin: 0;
  padding: 0;
}

h6 {
  margin: 0;
  padding: 0;
}
.clearfix:after { content: ""; display: block; visibility: hidden; height: 0; clear: both; }
.clearfix { zoom: 1; }
.new-box{
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
}
</style>
