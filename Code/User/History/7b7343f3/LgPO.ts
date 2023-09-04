export const saveImage = (path: string, file: ArrayBuffer) => {
    const buffer = Buffer.from(file)
    const uploadDir = `static/${path}`
    if (!existsSync(uploadDir)) {
        mkdirSync(uploadDir, { recursive: true })
    }

    const filepath = join(uploadDir, "profile")
    createWriteStream(filepath).write(buffer)
}
