<template>
  <div>
    <h1>{{ msg }}</h1>
    <button
      v-on:click="alertFunction('Clicked!!')"
      v-shortkey="['a']"
      @shortkey="alertFunction('pressed a')"
    >
      a
    </button>
    <button
      v-on:click="alertFunction('Clicked!!')"
      v-shortkey="['b']"
      @shortkey="alertFunction('pressed b')"
    >
      b
    </button>
    <button
      v-on:click="alertFunction('Clicked!!')"
      v-shortkey="['c']"
      @shortkey="alertFunction('pressed c')"
    >
      c
    </button>
    <button
      v-on:click="alertFunction('Clicked!!')"
      v-shortkey="['d']"
      @shortkey="alertFunction('pressed d')"
    >
      d
    </button>
    <button
      v-on:click="alertFunction('Clicked!!')"
      v-shortkey="['ctrl', 'a']"
      @shortkey="alertFunction('pressed ctrl + a')"
    >
      ctrl + a
    </button>
    <button
      v-on:click="alertFunction('Clicked!!')"
      v-shortkey="['alt', 'c']"
      @shortkey="alertFunction('pressed alt + c')"
    >
      alt + c
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
    alertFunction(key) {
      alert(`You ${key}`);
      console.warn("Function Triggered!!");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  box-sizing: border-box;
  line-height: 80px;
  font-size: 22px;
  text-align: center;
  width: 80px auto;
  color: #555;
  padding: 0px 25px 0px 25px;
  cursor: pointer;
  margin: 0 8px;
  /* height: 80px; */
  border-color: #f2f2f2;
  border-style: solid;
  text-shadow: 0 0.5px 1px #777, 0 2px 6px #f2f2f2;
  border-width: 1px;
  border-radius: 10px;
  background: -webkit-linear-gradient(
    top,
    #f9f9f9 0%,
    #d2d2d2 80%,
    #c0c0c0 100%
  );

  display: inline-block;
  transition: box-shadow 0.3s ease, transform 0.15s ease;
}
</style>
