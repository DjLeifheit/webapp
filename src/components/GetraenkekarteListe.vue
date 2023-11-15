<template>
  <header>
    <h1>Getränke Karte</h1>
  </header>
  <body class="getraenke">
    <ul class="liste" style="text-align: left">
      <h3>Biere</h3>
      <li
        v-for="(bier, index) in biertest"
        :key="index"
        class="indented-list-item"
      >
        {{ bier.name }} - {{ bier.price }} -
        {{ bier.beschreibung }}
      </li>
    </ul>
    <ul class="liste" style="text-align: left">
      <h3>Alkoholfreie Getränke</h3>
      <li
        v-for="(alkF, index) in alkFrei"
        :key="index"
        class="indented-list-item"
      >
        {{ alkF.getDishName() }} - {{ alkF.getPrice() }} -
        {{ alkF.getBeschreibung() }}
      </li>
    </ul>
    <ul class="liste" style="text-align: left">
      <h3>Cocktails</h3>
      <li
        v-for="(cocktail, index) in cocktails"
        :key="index"
        class="indented-list-item"
      >
        {{ cocktail.getDishName() }} - {{ cocktail.getPrice() }} -
        {{ cocktail.getBeschreibung() }}
      </li>
    </ul>
  </body>
</template>

<script>
import SpeisekartenItem from "@/classes/SpeisekartenItem";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Speisekarten liste",

  data() {
    return {
      biertest: [
        { name: "Weizenbier", price: "4,20€", beschreibung: "" },
        { name: "Helles", price: "3,90€", beschreibung: "" },
        { name: "Kristall Weizen", price: "3,90€", beschreibung: "" },
      ],
      biere: [
        new SpeisekartenItem("Weizenbier", "4,20€", ""),
        new SpeisekartenItem("Helles", "3,90€", ""),
        new SpeisekartenItem("Kristall Weizen", "3,90€"),
      ],
      alkFrei: [
        new SpeisekartenItem("Cola", "3,50€", ""),
        new SpeisekartenItem("Fanta", "3,50€", ""),
        new SpeisekartenItem("Flötzinger Spezi", "3,50€", ""),
        new SpeisekartenItem("Wasser", "3,50€", ""),
        new SpeisekartenItem(
          "Flötzinger Zitronenlimo",
          "3,50€",
          "Colazum trinken"
        ),
      ],
      cocktails: [
        new SpeisekartenItem("SVG-Gemmingen Cocktail", "6,00€"),
        new SpeisekartenItem("Aperol Spritz", "5,50€"),
        new SpeisekartenItem("", ""),
      ],
    };
    /*function addSpeisekartenItem({ name = "", price = "", beschreibung = "" }) {
      let item = new SpeisekartenItem(name, price, beschreibung);
    }*/
  },
};
</script>
<style scoped>
.indented-list-item {
  margin-left: 30px; /* oder andere gewünschte Einrückung */
}
.getraenke {
  border-right: white;
  border-left: white;
}
li {
  color: #2c3e50;
}
</style>
