<template>
  <hello-world />
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "../components/HelloWorld.vue";
import { Component } from "vue-property-decorator";

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
