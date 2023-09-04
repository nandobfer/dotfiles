import React from "react"
import { IMaskInput } from "react-imask"

const MaskedInput = (props, ref) => {
    return (
        <IMaskInput
            {...props}
            inputRef={ref} // pass ref to IMaskInput
        />
    )
}

export default MaskedInput