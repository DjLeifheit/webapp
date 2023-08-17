<template>
  <header class="speisen">
    <div class="getränkekarte">
      <GetraenkekarteListe />
    </div>
  </header>
  <body>
    <table></table>
  </body>
</template>
<script>
import GetraenkekarteListe from "@/components/GetraenkekarteListe.vue";

export default {
  name: "SpeisekartteView",
  components: { GetraenkekarteListe },
  data() {},
};
</script>

<style scoped></style>
