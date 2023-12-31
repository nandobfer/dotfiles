import { bulkWebPConvert } from "@caldwell619/bulk-webp-converter"
import { createWriteStream, existsSync, mkdirSync } from "fs"
import { join } from "path"

export const saveImage = (path: string, file: ArrayBuffer) => {
    const buffer = Buffer.from(file)
    const uploadDir = `static/${path}`
    if (!existsSync(uploadDir)) {
        mkdirSync(uploadDir, { recursive: true })
    }

    const filepath = join(uploadDir, filename)
    createWriteStream(filepath).write(buffer)

    bulkWebPConvert({ pathToOutput: uploadDir, pathToSource: uploadDir, quality: 70 })
}
