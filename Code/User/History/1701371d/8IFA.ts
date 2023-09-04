import { Crop } from "@prisma/client"
import promptObj from "prompt-sync"

const prompt = promptObj()

const crop: Crop = {
    id: 0,
    date: new Date(),
    name: prompt("name: "),
    description: prompt("description: "),
    price: Number(prompt("price: ")),
    weight: Number(prompt("weight: ")),
    producerId: Number(prompt("producerId: ")),
    image: prompt("image: "),
    gallery: prompt("gallery: "),
    rating: Number(prompt("rating: ")),
    sold: Number(prompt("sold: ")),
}

console.log({ crop })
