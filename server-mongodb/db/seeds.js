const db = connect("mongodb://localhost:27017/naturereserves")


db.birds.drop()
db.ornithologists.drop()

db.birds.insertMany([
    { name: "Red Kite", colour: "Red", location: "Cotswolds", number: 3 },
    { name: "Big Bird", colour: "Yellow", location: "Sesame Street", number: 1 },
    { name: "Pigeons", colour: "Grey", location: "On the roof", number: 10 },
    { name: "Tweetie Pie", colour: "Yellow", location: "Television", number: 1 },
    { name: "Angry Birds", colour: "Black", location: "Phones", number: 17 },
    { name: "Non Ravens", colour: "Not Black", location: "Everywhere and nowehere", number: 3 },
    { name: "Buckbeak", colour: "Silver", location: "Forbidden Forest", number: 1 },
    { name: "Starling", colour: "Black with Metalic Sheen", location: "In the Late Summer Sky", number: 500 },
    { name: "Seaguls", colour: "White", location: "Near your food", number: 50 },
    { name: "Zazu", colour: "Blue", location: "The Pride Lands", number: 1 },
]);

db.ornithologists.insertMany([
    { name: 'Cerise' },
    { name: 'Abi' },
    { name: 'Jasmin' },
    { name: 'David Attenborough' }
]);