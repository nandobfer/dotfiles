import express, { Express, Request, Response } from "express"
import { PrismaClient, categories, products } from "@prisma/client"
import fileUpload from "express-fileupload"
import { existsSync, mkdirSync, readdirSync } from "fs"
import { join } from "path"
const router = express.Router()
const prisma = new PrismaClient()

router.get("/", async (request: Request, response: Response) => {
    const total = await prisma.products.count()
    const count = Array.from({ length: Math.floor(total / 100) }, (_, i) => i + 1)
    const batch = 100

    const list = await Promise.all(
        count.map(
            async (index) =>
                await prisma.products.findMany({
                    include: { categories: true, supplier: true },
                    orderBy: { id: "asc" },
                    skip: index * batch,
                    take: batch,
                })
        )
    )

    const products = list.flat()

    // const productsList = await prisma.products.findMany({
    //     include: { categories: true, supplier: true },
    //     orderBy: { id: "asc" },
    // })
    response.json(products)
})

router.post("/", async (request: Request, response: Response) => {
    const data = request.body

    const product = await prisma.products.findUnique({
        where: { id: Number(data.id) },
        include: { categories: true, supplier: true },
    })
    response.json(product)
})

router.post("/name", async (request: Request, response: Response) => {
    const data = request.body
    const total = await prisma.products.count()
    const count = Array.from({ length: Math.floor(total / 100) }, (_, i) => i + 1)
    const batch = 100

    const list = await Promise.all(
        count.map(
            async (index) =>
                await prisma.products.findMany({
                    where: { name: { contains: data.name } },
                    include: { categories: true, supplier: true },
                    skip: index * batch,
                    take: batch,
                })
        )
    )

    const products = list.map((item) => ({ ...item }))


    // const product = await prisma.products.findMany({
    //     where: { name: { contains: data.name } },
    //     include: { categories: true, supplier: true },
    // })
    response.json(products)
})

router.post("/add", async (request: Request, response: Response) => {
    const data = JSON.parse(request.body.data)
    const imageFile = request.files?.file! as fileUpload.UploadedFile

    const gallery = Object.entries(request.files || [])
        .filter(([key, value]) => key.split("gallery-").length > 1)
        .map(([key, value]) => value)

    const gallery_list: string[] = []

    if (gallery.length > 0) {
        const uploadDir = `images/products/${data.id}`

        gallery.map((item) => {
            const file = item as fileUpload.UploadedFile

            if (!existsSync(uploadDir)) {
                mkdirSync(uploadDir, { recursive: true })
            }

            const filepath = join(uploadDir, file.name)
            gallery_list.push(`https://app.agenciaboz.com.br:4102/${filepath}`)

            file.mv(filepath, (err) => {
                if (err) {
                    console.log(err)
                }
            })
        })
    }

    data.stock = Number(data.stock.toString().replace(/\D/g, ""))
    data.aliquot = Number(data.aliquot.toString().replace(/\D/g, ""))
    data.stock_warehouse = Number(data.stock_warehouse.toString().replace(/\D/g, ""))
    data.price = Number(
        data.price
            .toString()
            .replace(/[^,\d]/g, "")
            .replace(",", ".")
    )
    data.cost = Number(
        data.cost
            .toString()
            .replace(/[^,\d]/g, "")
            .replace(",", ".")
    )
    data.profit = Number(
        data.profit
            .toString()
            .replace(/[^,\d]/g, "")
            .replace(",", ".")
    )
    data.weight = Number(
        data.weight
            .toString()
            .replace(/[^,\d]/g, "")
            .replace(",", ".")
    )
    data.width = Number(
        data.width
            .toString()
            .replace(/[^,\d]/g, "")
            .replace(",", ".")
    )
    data.height = Number(
        data.height
            .toString()
            .replace(/[^,\d]/g, "")
            .replace(",", ".")
    )
    data.length = Number(
        data.length
            .toString()
            .replace(/[^,\d]/g, "")
            .replace(",", ".")
    )
    data.preparation = Number(data.preparation.toString().replace(/\D/g, "").replace(",", "."))

    const categories: categories[] = data.categories

    const product = await prisma.products.create({
        data: {
            name: data.name,
            description: data.description,
            brand: data.brand,
            supplier_id: data.supplier_id,
            price: data.price,
            ncm: data.ncm,
            aliquot: data.aliquot,
            profit: data.profit,
            stock_warehouse: data.stock_warehouse,
            shelf: data.shelf,
            cost: data.cost,
            stock: data.stock,
            image: data.image,
            gallery: gallery_list.toString(),
            video: data.video,
            story: data.story,
            usage: data.usage,
            weight: data.weight,
            width: data.width,
            height: data.height,
            length: data.length,
            preparation: data.preparation,
            prep_unit: data.prep_unit,
            stock_type: Number(data.stock_type),
            specifications: JSON.stringify([{ name: "teste", value: "5kg" }]),
            categories: { connect: categories.map((category) => ({ id: category.id })) },
        },
    })

    const uploadDir = `images/products/${product.id}`
    if (!existsSync(uploadDir)) {
        mkdirSync(uploadDir, { recursive: true })
    }
    const filepath = join(uploadDir, imageFile.name)

    imageFile.mv(filepath)

    const updatedProduct = await prisma.products.update({
        data: { image: `https://app.agenciaboz.com.br:4102/${filepath}` },
        where: { id: product.id },
        include: { categories: true, supplier: true },
    })

    response.json(updatedProduct)
})

router.post("/update", async (request: Request, response: Response) => {
    const data = JSON.parse(request.body.data)
    const imageFile = request.files?.file! as fileUpload.UploadedFile

    if (imageFile) {
        const uploadDir = `images/products/${data.id}`
        if (!existsSync(uploadDir)) {
            mkdirSync(uploadDir, { recursive: true })
        }

        const filepath = join(uploadDir, imageFile.name)

        imageFile.mv(filepath, (err) => {
            if (err) console.log(err)
        })

        const imageProduct = await prisma.products.update({
            data: {
                image: `https://app.agenciaboz.com.br:4102/${filepath}`,
            },
            where: { id: data.id },
            include: { categories: true, supplier: true },
        })
    }

    const gallery = Object.entries(request.files || [])
        .filter(([key, value]) => key.split("gallery-").length > 1)
        .map(([key, value]) => value)

    const gallery_list = data.gallery?.split(",") || []

    if (gallery.length > 0) {
        const uploadDir = `images/products/${data.id}`

        gallery.map((item) => {
            const file = item as fileUpload.UploadedFile

            if (!existsSync(uploadDir)) {
                mkdirSync(uploadDir, { recursive: true })
            }

            const filepath = join(uploadDir, file.name)
            gallery_list.push(`https://app.agenciaboz.com.br:4102/${filepath}`)

            file.mv(filepath, (err) => {
                if (err) {
                    console.log(err)
                }
            })
        })
    }

    data.stock = Number(data.stock.toString().replace(/\D/g, ""))
    data.aliquot = Number(data.aliquot.toString().replace(/\D/g, ""))
    data.stock_warehouse = Number(data.stock_warehouse.toString().replace(/\D/g, ""))
    data.price = Number(
        data.price
            .toString()
            .replace(/[^,\d]/g, "")
            .replace(",", ".")
    )
    data.profit = Number(
        data.profit
            .toString()
            .replace(/[^,\d]/g, "")
            .replace(",", ".")
    )
    data.cost = Number(
        data.cost
            .toString()
            .replace(/[^,\d]/g, "")
            .replace(",", ".")
    )
    data.weight = Number(
        data.weight
            .toString()
            .replace(/[^,\d]/g, "")
            .replace(",", ".")
    )
    data.width = Number(
        data.width
            .toString()
            .replace(/[^,\d]/g, "")
            .replace(",", ".")
    )
    data.height = Number(
        data.height
            .toString()
            .replace(/[^,\d]/g, "")
            .replace(",", ".")
    )
    data.length = Number(
        data.length
            .toString()
            .replace(/[^,\d]/g, "")
            .replace(",", ".")
    )
    data.preparation = Number(data.preparation.toString().replace(/\D/g, "").replace(",", "."))

    const categories: categories[] = data.categories

    const product = await prisma.products.update({
        data: {
            name: data.name,
            description: data.description,
            brand: data.brand,
            supplier_id: data.supplier_id,
            price: data.price,
            ncm: data.ncm,
            aliquot: data.aliquot,
            profit: data.profit,
            cost: data.cost,
            stock: data.stock,
            stock_warehouse: data.stock_warehouse,
            gallery: gallery_list.toString(),
            shelf: data.shelf,
            video: data.video,
            usage: data.usage,
            story: data.story,
            weight: data.weight,
            width: data.width,
            height: data.height,
            length: data.length,
            preparation: data.preparation,
            prep_unit: data.prep_unit,
            stock_type: Number(data.stock_type),
            specifications: JSON.stringify([{ name: "teste", value: "5kg" }]),
            categories: { set: [], connect: categories.map((category) => ({ id: category.id })) },
        },
        where: { id: data.id },
        include: { categories: true, supplier: true },
    })

    response.json(product)
})

router.post("/delete", async (request: Request, response: Response) => {
    const data = request.body

    const product = await prisma.products.delete({ where: { id: data.id }, include: { categories: true, supplier: true } })
    response.json(product)
})

router.post("/apply_profit_margin", async (request: Request, response: Response) => {
    const data = request.body

    const product = await prisma.products.update({
        where: { id: data.product.id },
        data: { price: data.price },
    })

    response.json(product)
})


export default router
