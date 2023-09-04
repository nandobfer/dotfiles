import React from "react"
import CurrencyFormat from "react-currency-format"
import colors from "../colors"

interface CurrencyTextProps {
    value: number | string
    color?: string
    style?: React.CSSProperties
}

export const CurrencyText: React.FC<CurrencyTextProps> = ({ value, color, style }) => {
    return (
        <CurrencyFormat
            value={value}
            displayType="text"
            thousandSeparator="."
            decimalSeparator=","
            decimalScale={2}
            fixedDecimalScale={true}
            prefix={"R$ "}
            style={{ ...style, color: color || style?.color || colors.primary }}
        />
    )
}
