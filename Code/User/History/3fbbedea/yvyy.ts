import { useContext } from 'react'
import Context from '../contexts/Context'

export const use = () => {
    const Context = useContext(Context);
    const  = Context.value
    const set = Context.setValue

    return {, set}
}