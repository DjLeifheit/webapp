<template>
  <Header>
    <h1>Öffnungszeiten</h1>
  </Header>
  <body>
    <ul class="liste" style="text-align: left">
      <h2>Das Sportheim hat an folgenden Tagen offen:</h2>
      <h3 v-for="(tag, index) in oeffnZeiten" :key="index">
        {{ tag.tag }}{{ tag.start }}{{ tag.ende }}
      </h3>
    </ul>
  </body>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Öffnungszeiten",

  data() {
    return {
      oeffnZeiten: [
        { tag: "Montags", start: " von 15:30 Uhr", ende: " bis 23:00 Uhr" },
        { tag: "Dienstags", start: " von 15:30 Uhr", ende: " bis 23:00 Uhr" },
        {
          tag: "Mittwochs",
          start: " ist Ruhetag",
          ende: " außer an Championsleague Speiltagen (dann ab 19 Uhr geöffnet) oder zu Heimspielen des SV Gemmingen",
        },
        { tag: "Donnerstags", start: " von 15:30 Uhr", ende: " bis 23:00 Uhr" },
        { tag: "Freitags", start: " von 15:30 Uhr", ende: " bis 23:00 Uhr" },
        { tag: "Samstags", start: " von 15:30 Uhr", ende: " bis 23:00 Uhr" },
        { tag: "Sonntags", start: " von 15:30 Uhr", ende: " bis 23:00 Uhr" },
      ],
    };
  },
};
</script>

<style scoped>
body {
  border-left: 100px white;
  border-right: white;
}
ul {
  left: 100px;
  padding: 50px;
}
</style>
