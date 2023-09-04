import React from "react"
import { IMaskInput } from "react-imask"

const MaskedInput = React.forwardRef((props, ref) => {
    return <IMaskInput {...props} inputRef={ref} />
})

export default MaskedInput
