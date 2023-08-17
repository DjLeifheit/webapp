<template>
  <Header>
    <h1>Öffnungszeiten</h1>
    <ul class="liste" style="text-align: center">
      <h3>Das Sportheim hat an folgenden Tagen offen:</h3>
      <li v-for="(tag, index) in oeffnZeiten" :key="index">
        {% if tag.tag == "Mittwoch" %}
        <p>Am {{ tag.tag }} ist {{ tag.start }} außer {{ tag.ende }}</p>
        {% else %}
        <p>Am {{ tag.tag }} von {{ tag.start }} bis {{ tag.ende }}</p>
      </li>
    </ul>
  </Header>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Öffnungszeiten",

  data() {
    return {
      oeffnZeiten: [
        { tag: "montag", start: "15:30 Uhr", ende: "23:00 Uhr" },
        { tag: "Dienstag", start: "15:30 Uhr", ende: "23:00 Uhr" },
        {
          tag: "Mittwoch",
          start: "Geschlossen",
          ende: "an Championsleague Spieltagen da ist ab 19:00 Uhr geöffnet",
        },
        { tag: "Donnerstag", start: "15:30 Uhr", ende: "23:00 Uhr" },
        { tag: "Freitag", start: "15:30 Uhr", ende: "23:00 Uhr" },
        { tag: "Samstag", start: "15:30 Uhr", ende: "23:00 Uhr" },
        { tag: "Sonntag", start: "15:30 Uhr", ende: "23:00 Uhr" },
      ],
    };
  },
};
</script>

<style scoped></style>
