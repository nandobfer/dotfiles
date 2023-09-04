import React, { useEffect, useReducer, useState } from "react"
import { QrReader, OnResultFunction } from "react-qr-reader"
import "./style.scss"
import { ReactComponent as Border } from "../../images/scanner/border.svg"

interface ScannerProps {
    handleResult: (result: string) => void
    scanning: boolean
}

export const Scanner: React.FC<ScannerProps> = ({ handleResult, scanning }) => {
    const [, forceUpdate] = useReducer((x) => x + 1, 0)

    const onResult: OnResultFunction = (result, error) => {
        if (result?.getText() && result.getText() != "e") {
            handleResult(result.getText())
        }
    }

    useEffect(() => {
        forceUpdate()
    }, [])

    return (
        <div className="Scanner-Component">
            <QrReader
                constraints={{ facingMode: "environment" }}
                scanDelay={scanning ? 500 : Number.MAX_SAFE_INTEGER}
                onResult={onResult}
                videoStyle={{ width: null, left: null }}
                videoContainerStyle={{
                    height: "100vh",
                    justifyContent: "center",
                    position: "absolute",
                    top: 0,
                    left: 0,
                }}
            />
            <Border className="scanner-placeholder" />
        </div>
    )
}
