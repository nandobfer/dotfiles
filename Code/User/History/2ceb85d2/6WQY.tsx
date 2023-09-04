import React, { useEffect } from "react"
import { Box } from "@mui/material"
import { CategoriesList } from "./CategoriesList"
import { Banners } from "./Banners"
import { NearYouList } from "./NearYouList"
import { CropsList } from "./CropsList"
import { useHeader } from "../../hooks/useHeader"
import { BusinessList } from "./BusinessList"

interface BusinessProps {}

export const Business: React.FC<BusinessProps> = ({}) => {
    const header = useHeader()

    const images = [
        "https://s2-autoesporte.glbimg.com/RCvihgx1v0YBjHilWE_eri049ow=/0x0:1600x989/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2022/l/0/BAGv60Q96UENhOaK7FBw/3sd.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSkAvBQbSTGdGVXlDb4BORFlY9rwPNhzcgHQ&usqp=CAU",
    ]

    useEffect(() => {
        header.setTitle("Lojas & Serviços")
    }, [])

    return (
        <Box
            sx={{
                flexDirection: "column",
                padding: "0 5vw",
                gap: "5vw",
                width: "100vw",
                height: "100%",
                overflowX: "hidden",
                justifyContent: "space-between",
            }}
        >
            <CategoriesList />
            <Banners images={images} />
            <NearYouList />
            <BusinessList />
        </Box>
    )
}
