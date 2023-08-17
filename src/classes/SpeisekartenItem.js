export default class SpeisekartenItem {
  dishname = "";
  price = "";
  beschreibung = "";

  constructor({ name = "", price = "", beschreibung = "" }) {
    this.dishname = name;
    this.price = price;
    this.beschreibung = beschreibung;
  }
  setName(name) {
    this.name = name;
  }
  getDishName() {
    return this.dishname;
  }
  setPrice(price) {
    this.price = price;
  }
  getPrice() {
    return this.price;
  }
  setBeschreibung(beschreibung) {
    this.beschreibung = beschreibung;
  }
  getBeschreibung() {
    return this.beschreibung;
  }
}
