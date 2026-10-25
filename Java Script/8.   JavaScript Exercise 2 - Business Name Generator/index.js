/* Create a business name generator by combining list of adjectives
and shop name and another word

Adjectives:
Crazy
Amazing
Fire

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub
*/
randome1 = Math.random()





let Adjectives = {
    a1: "Crazy",
    a2: "Amazing",
    a3: "Fire"
}
let shop = {
    b1: "Engine",
    b2: "Foods",
    b3: "Garments"
}
let Another_Word = {
    c1: "Bros",
    c2: "Limited",
    c3: "Hub"
}


if (randome1 <= 0.333) {
    process.stdout.write(Adjectives.a1)
}
else if (0.333 < randome1 <= 0.666) {
    process.stdout.write(Adjectives.a2)
}
else {
    process.stdout.write(Adjectives.a3)
}


randome2 = Math.random()

if (randome2 <= 0.333) {
    process.stdout.write(shop.b1)
}
else if (0.333 < randome2 <= 0.666) {
    process.stdout.write(shop.b2)
}
else {
    process.stdout.write(shop.b3)
}


randome3 = Math.random()

if (randome3 <= 0.333) {
    process.stdout.write(Another_Word.c1)
}
else if (0.333 < randome3 <= 0.666) {
    process.stdout.write(Another_Word.c2)
}
else {
    process.stdout.write(Another_Word.c3)
}

