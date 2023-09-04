import React from "react"
import { Box } from "@mui/material"

interface NewServiceProps {}

export const NewService: React.FC<NewServiceProps> = ({}) => {
    return (
        <Box sx={{}}>
            <Formik initialValues={initialValues} onSubmit={handleNewService}>
                {({ values, handleChange }) => (
                    <Form>
                        <TextField variant="standard" sx={{ width: "5vw" }} />
                    </Form>
                )}
            </Formik>
        </Box>
    )
}
