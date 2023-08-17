<template>
  <header>
    <h1>Getränke Karte</h1>
  </header>
  <body>
    <ul>
      <h1>Gericht des Tages</h1>
      <msg>Cheeseburger</msg>
    </ul>
    <ul>
      <h1>Baguettes</h1>
      <li v-for="(alkF, index) in alkFrei" :key="index">
        {{ alkF.getDishName() }} - {{ alkF.getPrice() }} -
        {{ alkF.getBeschreibung() }}
      </li>
    </ul>
    <ul>
      <h1>Wurst</h1>
      <li v-for="(cocktail, index) in cocktails" :key="index">
        {{ cocktail.getDishName() }} - {{ cocktail.getPrice() }} -
        {{ cocktail.getBeschreibung() }}
      </li>
    </ul>
  </body>
</template>

<script>
import SpeisekartenItem from "@/classes/SpeisekartenItem";
export default {
  name: "SpeisekarteListe",
  data() {
    return {
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

<style scoped></style>
