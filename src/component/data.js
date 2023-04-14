import rice from '../../public/images/rice.jpg'
import food from '../../public/images/food.jpg'
import suya from '../../public/images/suya.jpg'
import jollof from '../../public/images/jollof.jpg'
import mac from '../../public/images/mac.jpg'
import noodles from '../../public/images/noodles.jpg'
import pancake from '../../public/images/pancake.jpg'
import backdrop from '../../public/images/backdrop.jpg'
import dinner from '../../public/images/dine.jpg'
import home from '../../public/images/home.jpg'
import dine from '../../public/images/dinning.jpg'

const menuData = [
    {
        id: 1,
        title: "Mac and Cheese",
        price: 2200,
        type: 'breakfast',
        image: rice
    },
    {
        id: 2,
        title: "Spaghett1",
        price: 1500,
        type: 'breakfast',
        image: food
    },
    {
        id: 3,
        title: "Suya",
        price: 3000,
        type: 'brunch',
        image: suya
    },
    {
        id: 4,
        title: "Jollof Rice",
        price: 2800,
        type: 'dinner',
        image: jollof
    },
    {
        id: 5,
        title: "Spaghett1",
        price: 2100,
        type: 'brunch',
        image: mac
    },
    {
        id: 6,
        title: "Noodles",
        price: 3700,
        type: 'breakfast',
        image: noodles
    },
    {
        id: 7,
        title: "Pancake",
        price: 1300,
        type: 'breakfast',
        image: pancake
    },
    {
        id: 8,
        title: "Spaghett1",
        price: 2350,
        type: 'dinner',
        image: food
    },
    {
        id: 9,
        title: "Suya",
        price: 3200,
        type: 'breakfast',
        image: suya
    },
    {
        id: 10,
        title: "Mac and Cheese",
        price: 2100,
        type: 'brunch',
        image: rice
    },
    {
        id: 11,
        title: "Spaghett1",
        price: 800,
        type: 'dinner',
        image: food
    },
    {
        id: 12,
        title: "Suya",
        price: 1900,
        type: 'breakfast',
        image: suya
    },
]

export default menuData

export const slideArr = [
    {
        img: backdrop,
        text: "Karoke night with an incredible ambience and good music 1"
    },
    {
        img: home,
        text: "Saturday night dance hall with our super duper DJ Jayfo 2"
    },
    {
        img: dine,
        text: 'Sunday soul night, where good music meets excellent food and incredible company 3'
    },
    {
        img: dinner,
        text: 'We host all sorts of parties like birthdays, Get-together, team bonding, Engagement, reunion and so on 4'
    }
]
    
export const specialsArr = [
    {
        id: 1,
        title: "Suya",
        price: 1900,
        image: suya,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit,Soluta incidunt nemo numquam ad repellendus sapiente repellat porro qui et? Qui'
    },
    {
        id: 2,
        title: "Jollof Rice",
        price: 2900,
        image: jollof,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit,Soluta incidunt nemo numquam ad repellendus sapiente repellat porro qui et? Qui'
    },
    {
        id: 3,
        title: "Noodles",
        price: 1200,
        image: noodles,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit,Soluta incidunt nemo numquam ad repellendus sapiente repellat porro qui et? Qui'
    },
    {
        id: 4,
        title: "Rice",
        price: 1700,
        image: rice,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit,Soluta incidunt nemo numquam ad repellendus sapiente repellat porro qui et? Qui'
    },
    {
        id: 5,
        title: "Mac and Cheese",
        price: 2300,
        image: food,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit,Soluta incidunt nemo numquam ad repellendus sapiente repellat porro qui et? Qui'
    },
    {
        id: 16,
        title: "Pasta",
        price: 1600,
        image: mac,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit,Soluta incidunt nemo numquam ad repellendus sapiente repellat porro qui et? Qui'
    },

]
export const eventArr = [
    {
        image: mac,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit,'
    },
    {
        image: food,
        text: 'Soluta incidunt nemo numquam ad repellendus sapiente repellat'
    },
    {
        image: rice,
        text: 'numquam ad repellendus sapiente repellat porro qui et? Qui'
    },
    {
        image: dinner, 
        text: 'Soluta incidunt nemo numquam ad repellendus sapiente repellat'
    }
]