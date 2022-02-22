<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

</script>

<template>
  <h1>Hello App!</h1>
  <p>
    <!-- use the router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
    <router-link to="/">Go to Home</router-link>
    {{' '}}
    <router-link to="/about">Go to About</router-link>
    {{' '}}
    <router-link to="/todo">Go to Todo</router-link>
    {{' '}}
    <router-link to="/reactivity">Go to Reactivity VueTest</router-link>
  </p>
  <router-view></router-view>
</template>

