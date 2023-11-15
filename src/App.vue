<template>
  <div id="app" :class="{ 'dark-mode': isDarkMode, 'light-mode': !isDarkMode }">
    <header class="d-flex justify-content-center">
      <div class="d-flex justify-content-start">
        <Navbar />
      </div>
    </header>
    <nav>
      <router-view />
    </nav>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: white;
}

nav a.router-link-exact-active {
  color: white;
}
</style>
<script setup>
import Navbar from "@/components/NavbarMain.vue";
</script>
