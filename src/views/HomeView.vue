<template>
  <div class="home">
    <HelloWorld msg="Willkommen im Sportheim des SV Gemmingen" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
