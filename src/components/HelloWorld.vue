<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button
      v-on:click="ClickH('hello babess')"
      v-shortkey="['ctrl', 'a']"
      @shortkey="ClickH('ctrl + a')"
    >
      Call hello
    </button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    ClickH(prop) {
      alert(`You pressed ${prop}`);
      console.warn("Function Triggered!!");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
