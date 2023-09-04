import { useContext } from "react"
import CropsContext from "../contexts/cropsContext"

export const useCrops = () => {
    const cropsContext = useContext(CropsContext)

    return { ...cropsContext }
}
