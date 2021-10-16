const drinksCateogary = ["Wine", "Water", "Juice"];

class DrinkItemsList {
  constructor(id, type, drinkType, name, price, quantity = 0, imgsrc) {
    this.id = id;
    this.type = type;
    this.drinkType = drinkType;
    this.name = name;
    this.price = `${"$" + price}`;
    this.quantity = quantity;
    this.imgsrc = imgsrc;
  }
}
const drinkItemsList = [
  new DrinkItemsList(
    1,
    "Drinks",
    "Wine",
    "Beaux Freres",
    7.5,
    0,
    "https://media.istockphoto.com/photos/red-wine-with-property-release-picture-id157405246?k=20&m=157405246&s=612x612&w=0&h=6ZpdTaBPuDJajqXvYAyFDzu588NW7sP-ev8kI1p9p6Q="
  ),
  new DrinkItemsList(
    2,
    "Drinks",
    "Wine",
    "Chateau Climens",
    3.0,
    0,
    "https://media.istockphoto.com/photos/red-wine-with-property-release-picture-id157405246?k=20&m=157405246&s=612x612&w=0&h=6ZpdTaBPuDJajqXvYAyFDzu588NW7sP-ev8kI1p9p6Q="
  ),
  new DrinkItemsList(
    3,
    "Drinks",
    "Wine",
    "Cabernet Sauvignon",
    9.25,
    0,
    "https://media.istockphoto.com/photos/red-wine-with-property-release-picture-id157405246?k=20&m=157405246&s=612x612&w=0&h=6ZpdTaBPuDJajqXvYAyFDzu588NW7sP-ev8kI1p9p6Q="
  ),
  new DrinkItemsList(
    4,
    "Drinks",
    "Wine",
    "Domaine Serene",
    6.0,
    0,
    "https://media.istockphoto.com/photos/red-wine-with-property-release-picture-id157405246?k=20&m=157405246&s=612x612&w=0&h=6ZpdTaBPuDJajqXvYAyFDzu588NW7sP-ev8kI1p9p6Q="
  ),
  new DrinkItemsList(
    5,
    "Drinks",
    "Wine",
    "Lewis Alecs",
    4.0,
    0,
    "https://media.istockphoto.com/photos/red-wine-with-property-release-picture-id157405246?k=20&m=157405246&s=612x612&w=0&h=6ZpdTaBPuDJajqXvYAyFDzu588NW7sP-ev8kI1p9p6Q="
  ),
  new DrinkItemsList(
    6,
    "Drinks",
    "Wine",
    "Federalist",
    8.8,
    0,
    "https://media.istockphoto.com/photos/red-wine-with-property-release-picture-id157405246?k=20&m=157405246&s=612x612&w=0&h=6ZpdTaBPuDJajqXvYAyFDzu588NW7sP-ev8kI1p9p6Q="
  ),
  new DrinkItemsList(
    7,
    "Drinks",
    "Wine",
    "Beaux Freres",
    0,
    0,
    "https://media.istockphoto.com/photos/red-wine-with-property-release-picture-id157405246?k=20&m=157405246&s=612x612&w=0&h=6ZpdTaBPuDJajqXvYAyFDzu588NW7sP-ev8kI1p9p6Q="
  ),
  new DrinkItemsList(
    8,
    "Drinks",
    "Water",
    "Water",
    13.5,
    0,
    "https://thumbs.dreamstime.com/b/bottle-water-12522351.jpg"
  ),
  new DrinkItemsList(
    9,
    "Drinks",
    "Juice",
    "Orange",
    20.5,
    0,
    "https://healthy-kids.com.au/wp-content/uploads/2013/12/Orangejuicebustingfromglass.jpg"
  ),
  new DrinkItemsList(
    10,
    "Drinks",
    "Juice",
    "Mango",
    30.5,
    0,
    "https://www.foodqualityandsafety.com/wp-content/uploads/2015/04/FQ_pg54a.png"
  ),
  new DrinkItemsList(
    11,
    "Drinks",
    "Juice",
    "Apple",
    30.5,
    0,
    "https://thumbs.dreamstime.com/b/apple-juice-10695981.jpg"
  ),
];

export { drinksCateogary, drinkItemsList };
