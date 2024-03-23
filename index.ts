// Question 36
function make_shirt(size:string,message:string) {
    console.log(`The size of the shirt is ${size} and ${message}`);
}

make_shirt("small","My name is Maham Jabbar");

// Question 37
function make_shirt_modify(size:string='large',message:string='I love TypeScript'){
    console.log(`The size of the shirt is ${size} and ${message}`);
}
make_shirt_modify();
make_shirt_modify("Small","My name is Maham Jabbar");

// Question 38
function describe_city(city:string,country:string="Pakistan") {
    console.log(`${city} is in ${country}`);
}

describe_city("Lahore");
describe_city("Jhang");
describe_city("Madinah","Saudi Arabia");

// Question 39
function city_country(city:string,country:string):string {
    return `${city},${country}`;
}
console.log(city_country("Lahore","Pakistan"));
console.log(city_country("Karachi","Pakistan"));
console.log(city_country("Makkah","Saudi Arabia"));

// Question 40

function make_album(artist:string,title:string):{artist:string,title:string} {
    const distionaries = {
        artist : artist.charAt(0).toUpperCase() + artist.slice(1),
        title : title.charAt(0).toUpperCase() + title.slice(1)
    }
    return distionaries;
}

console.log(make_album("Maham","Red"));
console.log(make_album("Sabar","Light wave"));
console.log(make_album("Daniyal","green"));
// let album:object = make_album("Maham","Maham Jabbar");
// console.log(album);

// Question 41
function show_magicians(names:string[]) {
    for(let name of names){
        console.log(name);
    }
}

let magicians:string[] = ["Maham","Sabar","Mahnoor","Menahil","Areeb"];
show_magicians(magicians);

// Question 42
let magicians2:string[] = ["Maham","Sabar","Mahnoor","Menahil","Areeb"];
function make_great(magicians:string[]) {
    for(let i =0;i<magicians.length;i++){
        magicians[i]=magicians[i] + " is the best.";
    }
}
make_great(magicians2);
show_magicians(magicians2);

// Question 43
let magicians3:string[] = ["Maham","Sabar","Mahnoor","Menahil","Areeb"];
function make_greet(magicians:string[]):string[] {
    const greet:string[] = [];
    for(let i =0;i<magicians.length;i++){
        greet[i]=magicians[i] + " is the best.";
        // greet[i] = magicians[i];
    }
    return greet;
}
let greet:string[]= make_greet(magicians3);
show_magicians(greet);
show_magicians(magicians3);

// Question 44

function sandwich(items:string[]) {
    console.log("Sandwich order ");
    for(let i=0;i<items.length;i++){
        console.log(` - ${items[i]}`)
    }
}
console.log("I want these type of order ");
sandwich(["Tomate","Potato","Chiken","Chilli"]);
sandwich(["Potato","Chiken","Chilli"]);
sandwich(["Potato","Chiken"]);

// Question 45

type car = {
    manufacturer : string,
    model : string,
    [key:string] : any
}

function createcar(manufacturer:string,model:string,optional:Record<string,any>):car {
    return {
        manufacturer,
        model,
        ...optional
    }
}

let mycar:car = createcar("Honda","Diecast",{year:2023,material:"plastic"});
console.log(mycar);