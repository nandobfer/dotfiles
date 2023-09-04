import { Box, IconButton, Button, CircularProgress, MenuItem } from "@mui/material"
import { TextField } from "./TextField"
import ArrowCircleUpSharpIcon from "@mui/icons-material/ArrowCircleUpSharp"
import { Form, Formik, FormikProps } from "formik"
import { useEffect, useState } from "react"
import { Avatar } from "@files-ui/react"
import MaskedInput from "../components/MaskedInput"
import { useUser } from "../hooks/useUser"
import { useEstadosBrasil } from "../hooks/useEstadosBrasil"

interface EditProfileProps {
    user: User | null
    handleSubmit: (values: UpdateUserValues, file?: File) => void
    formRef: React.Ref<FormikProps<UpdateUserValues>>
}

export const EditProfile: React.FC<EditProfileProps> = ({ user, handleSubmit, formRef }) => {
    const { updateLoading } = useUser()
    const estados = useEstadosBrasil()

    const [image, setImage] = useState<File>()

    const styleBox = {
        flexDirection: "column",
        width: "100%",
        padding: "5.5vw",
        paddingTop: "3vw",
        // paddingBottom: "0",
        border: "1px solid gray",
        borderRadius: "2vw",
        gap: "3vw",
    }

    const inputStyle = {
        "& .MuiInputBase-input": {
            padding: "0 1vw",
            fontSize: "3.5vw",
        },
        "& .MuiInputLabel-root": {
            fontSize: "3.0vw",
        },
    }
    const webkitbg = {
        "& .MuiInputBase-input.MuiOutlinedInput-input:-webkit-autofill": {
            "-webkit-box-shadow": ` 0 0 0 100vw "white" inset`,
            borderRadius: "initial",
        },
    }

    const initialValues: UpdateUserValues = {
        name: user?.name || "",
        email: user?.email || "",
        cpf: user?.document || "",
        birth: new Date(user?.birth || 0).toLocaleDateString("pt-br") || "",
        phone: user?.phone || "",
        rg: user?.rg || "",
        address: user?.address || "",
        cep: user?.cep || "",
        image: user?.image || "",
        number: user?.number || "",
        city: user?.city || "",
        district: user?.district || "",
        uf: estados.find((estado) => estado.value == user?.uf)?.id || 0,
    }

    return (
        <Box
            sx={{
                width: "88%",
                flexDirection: "column",
                alignItems: "center",
                gap: "3vw",
                paddingTop: "10.5vw",
            }}
        >
            <Formik initialValues={initialValues} onSubmit={(values) => handleSubmit(values, image)} innerRef={formRef}>
                {({ values, handleChange }) => (
                    <Form>
                        <Avatar
                            src={image || user?.image}
                            onChange={(file) => setImage(file)}
                            smartImgFit={"orientation"}
                            changeLabel="Clique para trocar a imagem"
                            emptyLabel="Clique para enviar uma imagem"
                            // style={{ width: "100%", height: "30vw" }}
                            style={{
                                width: "22vw",
                                height: "22vw",
                                borderRadius: "20vw",
                                fontSize: "2.5vw",
                            }}
                        />
                        <p style={{ fontSize: "3.1vw", color: "gray" }}>@{user?.username}</p>
                        <TextField
                            sx={{
                                "& .MuiInputBase-input": {
                                    textAlign: "center",
                                    fontSize: "4vw",
                                },
                            }}
                            label="Nome"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                        />
                        <Box sx={styleBox}>
                            <Box sx={{ width: "100% ", gap: "3vw" }}>
                                <TextField
                                    onChange={handleChange}
                                    sx={{ ...inputStyle, width: "48%" }}
                                    label="CPF"
                                    name="cpf"
                                    variant="standard"
                                    value={values.cpf}
                                    InputProps={{
                                        inputComponent: MaskedInput,
                                        inputProps: { mask: "000.000.000-00" },
                                    }}
                                    disabled
                                />
                                <TextField
                                    onChange={handleChange}
                                    sx={{ ...inputStyle, width: "48%" }}
                                    label="RG"
                                    name="rg"
                                    type="text"
                                    InputProps={{
                                        inputComponent: MaskedInput,
                                        inputProps: { mask: "0000000000000", inputMode: "numeric" },
                                    }}
                                    variant="standard"
                                    value={values.rg}
                                />
                            </Box>
                            <TextField
                                onChange={handleChange}
                                sx={inputStyle}
                                label="Email"
                                name="email"
                                variant="standard"
                                value={values.email}
                                disabled
                            />
                            <Box sx={{ width: "100% ", gap: "3vw" }}>
                                <TextField
                                    onChange={handleChange}
                                    sx={{ ...inputStyle, width: "48%" }}
                                    label="Data de Nascimento"
                                    name="birth"
                                    variant="standard"
                                    value={values.birth}
                                    InputProps={{
                                        inputComponent: MaskedInput,
                                        inputProps: { mask: "00/00/0000" },
                                    }}
                                    disabled
                                />
                                <TextField
                                    onChange={handleChange}
                                    sx={{ ...inputStyle, width: "48%" }}
                                    label="Telefone"
                                    name="phone"
                                    variant="standard"
                                    value={values.phone}
                                    InputProps={{
                                        inputComponent: MaskedInput,
                                        inputProps: { mask: "(00) 0 0000-0000", inputMode: "numeric" },
                                    }}
                                />
                            </Box>
                        </Box>
                        <Box sx={styleBox}>
                            <Box sx={{ width: "100% ", gap: "3vw" }}>
                                <TextField
                                    onChange={handleChange}
                                    sx={{ ...inputStyle, width: "48%" }}
                                    label="CEP"
                                    name="cep"
                                    variant="standard"
                                    value={values.cep}
                                    InputProps={{
                                        inputComponent: MaskedInput,
                                        inputProps: { mask: "00.000-000", inputMode: "numeric" },
                                    }}
                                />
                                <TextField
                                    select
                                    onChange={handleChange}
                                    label="UF"
                                    name="uf"
                                    sx={{
                                        ...inputStyle,
                                        ...webkitbg,
                                        width: "48%",
                                    }}
                                    variant="standard"
                                    value={values.uf}
                                    InputProps={{
                                        style: {
                                            borderRadius: "10vw",
                                            fontSize: "3.5vw",
                                            flexGrow: "1",
                                            alignSelf: "stretch",
                                        },
                                    }}
                                    SelectProps={{
                                        MenuProps: { MenuListProps: { sx: { maxHeight: "80vw", overflowY: "auto" } } },
                                        // inputProps: {
                                        //     sx: {
                                        //         "MuiInputBase-input-MuiInput-input::before": {
                                        //             paddingRight: "0",
                                        //         },
                                        //     },
                                        // },
                                    }}
                                >
                                    <MenuItem
                                        value={0}
                                        sx={{
                                            display: "none",
                                        }}
                                    ></MenuItem>
                                    {estados.map((estado) => (
                                        <MenuItem
                                            key={estado.value}
                                            value={estado.id}
                                            sx={{
                                                width: "100%",
                                            }}
                                        >
                                            {estado.value}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Box>

                            <TextField onChange={handleChange} sx={inputStyle} label="Cidade" name="city" variant="standard" value={values.city} />
                            <TextField
                                onChange={handleChange}
                                sx={inputStyle}
                                label="Endereço"
                                name="address"
                                variant="standard"
                                value={values.address}
                            />
                            <Box sx={{ width: "100% ", gap: "3vw" }}>
                                <TextField
                                    onChange={handleChange}
                                    sx={{ ...inputStyle, width: "70%" }}
                                    label="Bairro"
                                    name="district"
                                    variant="standard"
                                    value={values.district}
                                />
                                <TextField
                                    onChange={handleChange}
                                    sx={{ ...inputStyle, width: "28%" }}
                                    label="Nº"
                                    name="number"
                                    variant="standard"
                                    value={values.number}
                                />
                            </Box>
                        </Box>
                        <Box sx={styleBox}>
                            <p style={{ fontSize: "3vw" }}>Documentação Enviada</p>

                            <Box sx={{ gap: "1vw", width: "100%" }}>
                                <img
                                    src="https://contratocerto.com.br/wp-content/uploads/2020/07/Contrato-de-coaching-pdf.jpg"
                                    style={{ width: "12vw" }}
                                    alt="Documento"
                                />
                                <img
                                    src="https://s2-g1.glbimg.com/_bCeHe8l8gGuZ6XfL0C_rYHhNB4=/0x0:1280x854/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/x/K/iF7eHyTky2IZDMsAvVHQ/whatsapp-image-2019-04-04-at-4.55.07-pm.jpeg"
                                    style={{ width: "12vw", transform: "rotate(90deg)" }}
                                    alt=""
                                />
                                <img
                                    src="https://manuais.ifsp.edu.br/uploads/images/gallery/2022-07/scaled-1680-/image-1657389184596.png"
                                    style={{ width: "12vw" }}
                                    alt=""
                                />
                                <img
                                    src="https://contratocerto.com.br/wp-content/uploads/2020/07/Contrato-de-coaching-pdf.jpg"
                                    style={{ width: "12vw" }}
                                    alt="Documento"
                                />
                                <IconButton sx={{ display: "flex", justifyContent: "end" }} onClick={() => {}}>
                                    <ArrowCircleUpSharpIcon color="primary" />
                                </IconButton>
                            </Box>
                        </Box>

                        <Button variant="contained" type="submit" sx={{ display: "none" }}>
                            {updateLoading ? <CircularProgress size="1.5rem" color="secondary" /> : "Salvar"}
                        </Button>
                    </Form>
                )}
            </Formik>
        </Box>
    )
}
