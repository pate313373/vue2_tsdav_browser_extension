<template>
  <div>
    <img :src="imageUrl" height="45" alt="" />
    <h1>
      <slot></slot>
    </h1>
    <button type="button" @click="increment">Clicks: {{ count }}</button>
  </div>
</template>

<script>
import logo from "@/assets/logo.svg";

export default {
  data(){
    return {
      count:0,
      imageUrl: new URL(logo, import.meta.url).href
    }
  },
  methods:{
    increment(){
      this.count=this.count+1
    }
  }
}
</script>

<style>
h1 {
  margin: 5px;
}

button {
  margin-top: 10px;
}
</style>
