import Hashids from "hashids"

const hashid = new Hashids("mira", 10)

const encrypt = (id: number) => {
    return hashid.encode(id)
}
