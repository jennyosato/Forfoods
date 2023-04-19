import rice from "../../public/images/rice.jpg";
import food from "../../public/images/food.jpg";
import suya from "../../public/images/suya.jpg";
import jollof from "../../public/images/jollof.jpg";
import mac from "../../public/images/mac.jpg";
import noodles from "../../public/images/noodles.jpg";
import pancake from "../../public/images/pancake.jpg";
import wedding from "../../public/images/wedding.jpg";
import others from "../../public/images/others.jpeg";
import home from "../../public/images/home.jpg";
import birthday from "../../public/images/birthday.jpeg";
import corperate from "../../public/images/corperate.jpeg";
import amala from "../../public/images/amala.jpg";
import afang from "../../public/images/afang.jpeg";
import banga from "../../public/images/banga.jpeg";
import egusi from "../../public/images/egusi.jpg";
import ogbono from "../../public/images/ogbono.jpeg";
import okra from "../../public/images/okra.jpeg";
import chicken from "../../public/images/chicken.jpg";
import cheese from "../../public/images/cheese.jpg";
import ricestew from "../../public/images/rice&stew.jpg";
import karaoke from "../../public/images/mic.jpg";
import soul from "../../public/images/soul.jpg";
import bparty from "../../public/images/parties.jpg";
import party from "../../public/images/dj.jpg";

const menuData = [
  {
    id: 1,
    title: "Rice",
    price: 2200,
    type: "breakfast",
    image: rice,
  },
  {
    id: 2,
    title: "Soup",
    price: 1500,
    type: "breakfast",
    image: food,
  },
  {
    id: 15,
    title: "Salad",
    price: 1900,
    type: "breakfast",
    image: home,
  },
  {
    id: 16,
    title: "Cheese",
    price: 2500,
    type: "breakfast",
    image: cheese,
  },
  {
    id: 17,
    title: "Rice and Stew",
    price: 3900,
    type: "breakfast",
    image: ricestew,
  },
  {
    id: 3,
    title: "Suya",
    price: 3000,
    type: "brunch",
    image: suya,
  },
  {
    id: 4,
    title: "Jollof Rice",
    price: 2800,
    type: "dinner",
    image: jollof,
  },
  {
    id: 5,
    title: "Pasta",
    price: 2100,
    type: "brunch",
    image: mac,
  },
  {
    id: 6,
    title: "Noodles",
    price: 3700,
    type: "breakfast",
    image: noodles,
  },
  {
    id: 7,
    title: "Pancake",
    price: 1300,
    type: "breakfast",
    image: pancake,
  },
  {
    id: 8,
    title: "Grilled Chicken",
    price: 2350,
    type: "dinner",
    image: chicken,
  },
  {
    id: 9,
    title: "Amala and Ewedu",
    price: 3200,
    type: "breakfast",
    image: amala,
  },
  {
    id: 10,
    title: "Egusi Soup",
    price: 2100,
    type: "brunch",
    image: egusi,
  },
  {
    id: 11,
    title: "Ogbono Soup",
    price: 3800,
    type: "dinner",
    image: ogbono,
  },
  {
    id: 12,
    title: "Okra Soup",
    price: 1900,
    type: "breakfast",
    image: okra,
  },
  {
    id: 13,
    title: "Banga and Starch",
    price: 4900,
    type: "brunch",
    image: banga,
  },
  {
    id: 14,
    title: "Afang Soup",
    price: 4900,
    type: "brunch",
    image: afang,
  },
];

export default menuData;

export const slideArr = [
  {
    img: karaoke,
    text: "Karoke night with an incredible ambience and good music 1",
  },
  {
    img: party,
    text: "Saturday night dance hall with our super duper DJ Jayfo 2",
  },
  {
    img: soul,
    text: "Sunday soul night, where good music meets excellent food and incredible company 3",
  },
  {
    img: bparty,
    text: "We host all sorts of parties like birthdays, Get-together, team bonding, Engagement, reunion and so on 4",
  },
];

export const specialsArr = [
  {
    id: 1,
    title: "Amala",
    price: 1900,
    image: amala,
    description:
      "incidunt nemo numquam ad repellendus sapiente repellat porro qui et? Qui",
  },
  {
    id: 2,
    title: "Banga and Starch",
    price: 2900,
    image: banga,
    description:
      "Lorem ipsum dolor sit amet repellendus sapiente repellat porro qui et? Qui",
  },
  {
    id: 3,
    title: "Ogbono soup",
    price: 1200,
    image: ogbono,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit,Soluta incidunt nemo numquam ad Qui",
  },
  {
    id: 4,
    title: "Afang",
    price: 1700,
    image: afang,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing sapiente repellat porro qui et? Qui",
  },
  {
    id: 5,
    title: "Egusi",
    price: 2300,
    image: egusi,
    description:
      "Lorem ipsum ng elit,Soluta incidunt nemo numquam ad repellendus sapiente repellat porro qui et? Qui",
  },
  {
    id: 6,
    title: "Okra",
    price: 1600,
    image: okra,
    description:
      "Lorem ipsum dolor numquam ad repellendus sapiente repellat porro qui et? Qui",
  },
];
export const eventArr = [
  {
    image: wedding,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit,",
  },
  {
    image: others,
    text: "Soluta incidunt nemo numquam ad repellendus sapiente repellat",
  },
  {
    image: birthday,
    text: "numquam ad repellendus sapiente repellat porro qui et? Qui",
  },
  {
    image: corperate,
    text: "Soluta incidunt nemo numquam ad repellendus sapiente repellat",
  },
];

export const reviewsArr = [
  {
    username: "Jennifer Osato",
    review: "I had the Amala and ewedu, i promise you its to die for",
  },
  {
    username: "Jayfo",
    review:
      "Some time ago, i needed to take my partner out for a romantic date, you guys came through...YOU ROCK",
  },
  {
    username: "Mimi",
    review:
      "I ordered from your breakfast menu, i was disappointed when i got the meal",
  },
  {
    username: "Anonymous",
    review:
      "I feel your dinning hall will come alive with better music, but i really like your meals",
  },
  {
    username: "Stephanie",
    review:
      "Please don't waste your money going to forfoods restaurant, their service sucks. Yikes ",
  },
];
