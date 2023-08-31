<template>
  <header>
    <h1>Dienste</h1>
  </header>
  <body>
    <ul>
      <li v-for="(dienst, index) in dienste" :key="index">
        {{ dienst.name }}
      </li>
    </ul>
  </body>
</template>

<script>
export default {
  name: "FussballDienst",

  data() {
    return {
      dienste: [{ name: "Sky" }, { name: "Dazn" }, { name: "Amazon Prime" }],
      spiele: [
        "Bundesliga",
        "2. Bundesliga",
        "Championsleague",
        "Europaleague",
        "Europa Conference League",
      ],
    };
  },
};
</script>

<style scoped></style>
