import React, { useEffect, useState } from "react"
import "./style.scss"
import { useNavigate, useParams } from "react-router-dom"
import { useApi } from "../../hooks/useApi"
import { User } from "../../definitions/user"
import { Button, CircularProgress, Skeleton, SxProps, TextField, Box, MenuItem } from "@mui/material"
import { Form, Formik } from "formik"
import { useSnackbar } from "burgos-snackbar"
import { useUser } from "../../hooks/useUser"
import { useConfirmDialog } from "burgos-confirm"
import { ContractContainer } from "./Contracts"
import { useRoles } from "../../hooks/useRoles"
import { useCpfMask, useCepMask, usePhoneMask } from "burgos-masks"
import MaskedInput from "react-text-mask"
interface SellerProps {}

interface FormValues {
    password: string
}

export const Seller: React.FC<SellerProps> = ({}) => {
    const id = useParams().id
    const navigate = useNavigate()
    const api = useApi()
    const roles = useRoles()
    const { snackbar } = useSnackbar()
    const { confirm } = useConfirmDialog()
    const { user } = useUser()

    const [seller, setSeller] = useState<User>()
    const [idError, setIdError] = useState(false)
    const [passwordLoading, setPasswordLoading] = useState(false)
    const [passwordError, setPasswordError] = useState("")
    const [updateUserLoading, setUpdateUserLoading] = useState(false)

    const initialValues: FormValues = {
        password: "",
    }

    const userFormValues: User = seller!

    const skeleton_style: SxProps = {
        width: "100%",
        flexShrink: 0,
    }

    const textfield_style = {
        padding: "0vw",
    }

    const handleUpdateUser = (values: User) => {
        if (updateUserLoading) return

        confirm({
            title: "Atualizar usuário",
            content: "Confirma atualização do usuário?",
            onConfirm: () => {
                setUpdateUserLoading(true)
                api.user.update({
                    data: values,
                    callback: (response: { data: User }) => {
                        snackbar({
                            severity: "success",
                            text: "Usuário atualizado",
                        })
                    },
                    finallyCallback: () => setUpdateUserLoading(false),
                })
            },
        })
    }

    const handlePasswordSubmit = (values: FormValues) => {
        if (passwordLoading) return

        if (!values.password) {
            setPasswordError("Nova senha não pode ser vazia")
            return
        }

        confirm({
            title: "Alterar senha",
            content: "Deseja alterar a senha do usuário?",
            onConfirm: () => {
                setPasswordLoading(true)
                setPasswordError("")

                api.user.password({
                    data: { password: values.password, id: seller!.id },
                    callback: (response: { data: User }) => {
                        setSeller(response.data)
                        snackbar({
                            severity: "success",
                            text: "Senha atualizada",
                        })
                    },
                    finallyCallback: () => setPasswordLoading(false),
                })
            },
        })
    }

    useEffect(() => {
        if (!id) navigate("/dashboard/sellers")

        api.user.find.id({
            data: { id },
            callback: (response: { data: User }) => {
                const user = response.data
                if (user) {
                    setSeller(user)
                } else {
                    setIdError(true)
                }
            },
        })
    }, [])

    return id ? (
        <div className="Seller-Component">
            {idError ? (
                <div className="user-error">
                    <p>Usuário não encontrado</p>
                </div>
            ) : !seller ? (
                <>
                    <Skeleton variant="rectangular" sx={skeleton_style} height={"21vw"} />
                </>
            ) : (
                <>
                    <div className="info-container">
                        <Formik initialValues={userFormValues} onSubmit={handleUpdateUser}>
                            {({ values, handleChange }) => (
                                <Form style={{ flexDirection: "column", display: "flex", gap: "1vw" }}>
                                    <Box sx={{ gap: "1vw" }}>
                                        <div className="data-container">
                                            <p>Dados Pessoais</p>
                                            <TextField
                                                label={"Nome"}
                                                name="name"
                                                value={values.name}
                                                InputProps={{ readOnly: !user!.adm, sx: textfield_style }}
                                            />
                                            <MaskedInput
                                                mask={useCpfMask}
                                                guide={false}
                                                name="cpf"
                                                value={values.cpf}
                                                render={(ref, props) => (
                                                    <TextField
                                                        label={"CPF"}
                                                        inputRef={ref}
                                                        {...props}
                                                        InputProps={{ readOnly: !user!.adm, sx: textfield_style }}
                                                    />
                                                )}
                                            />
                                            <TextField
                                                label={"E-mail"}
                                                name="email"
                                                value={values.email}
                                                InputProps={{ readOnly: !user!.adm, sx: textfield_style }}
                                            />
                                            <TextField
                                                label={"Data de nascimento"}
                                                name="birth"
                                                value={new Date(values.birth).toLocaleDateString()}
                                                InputProps={{ readOnly: !user!.adm, sx: textfield_style }}
                                            />
                                        </div>
                                        <div className="data-container">
                                            <TextField
                                                label={"Função"}
                                                name="role"
                                                value={values.role}
                                                InputProps={{ readOnly: !user!.adm, sx: textfield_style }}
                                                select
                                            >
                                                {roles.map((role) => (
                                                    <MenuItem key={role.id} value={role.id}>
                                                        {role.name}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                            <Box sx={{ gap: "1vw" }}>
                                                <MaskedInput
                                                    mask={usePhoneMask}
                                                    name="phone"
                                                    guide={false}
                                                    value={values.phone}
                                                    render={(ref, props) => (
                                                        <TextField
                                                            label={"Telefone"}
                                                            sx={{ width: "50%" }}
                                                            inputRef={ref}
                                                            {...props}
                                                            InputProps={{ readOnly: !user!.adm, sx: textfield_style }}
                                                        />
                                                    )}
                                                />
                                                <MaskedInput
                                                    mask={useCepMask}
                                                    name="cep"
                                                    guide={false}
                                                    value={values.cep}
                                                    render={(ref, props) => (
                                                        <TextField
                                                            label={"CEP"}
                                                            inputRef={ref}
                                                            {...props}
                                                            sx={{ width: "50%" }}
                                                            InputProps={{ readOnly: !user!.adm, sx: textfield_style }}
                                                        />
                                                    )}
                                                />
                                            </Box>
                                            <TextField
                                                label={"Endereço"}
                                                value={values.address}
                                                InputProps={{ readOnly: !user!.adm, sx: textfield_style }}
                                            />
                                            <div className="number-district">
                                                <TextField
                                                    label={"Número"}
                                                    value={values.number}
                                                    sx={{ width: "30%" }}
                                                    InputProps={{ readOnly: !user!.adm, sx: textfield_style }}
                                                />
                                                <TextField
                                                    label={"Bairro"}
                                                    value={values.district}
                                                    sx={{ width: "70%" }}
                                                    InputProps={{ readOnly: !user!.adm, sx: textfield_style }}
                                                />
                                            </div>
                                        </div>
                                    </Box>
                                    <Button variant="contained" type="submit" sx={{ alignSelf: "flex-end" }}>
                                        {updateUserLoading ? <CircularProgress size={"1.5rem"} sx={{ color: "white" }} /> : "Atualizar usuário"}
                                    </Button>
                                </Form>
                            )}
                        </Formik>
                    </div>

                    {user!.adm && (
                        <>
                            <div className="password-container">
                                <Formik initialValues={initialValues} onSubmit={handlePasswordSubmit}>
                                    {({ values, handleChange }) => (
                                        <Form>
                                            <p>Alterar senha do vendedor</p>
                                            <TextField
                                                name="password"
                                                type="password"
                                                label={"Atualizar senha"}
                                                value={values.password}
                                                onChange={handleChange}
                                                InputProps={{ sx: textfield_style }}
                                                error={Boolean(passwordError)}
                                                helperText={passwordError}
                                            />
                                            <Button type="submit" variant="contained">
                                                {passwordLoading ? <CircularProgress size={"1.5rem"} sx={{ color: "white" }} /> : "Alterar senha"}
                                            </Button>
                                        </Form>
                                    )}
                                </Formik>
                            </div>

                            <p>Contratos</p>
                            {seller.contracts.map((contract) => (
                                <ContractContainer key={contract.id} contract={contract} adm />
                            ))}
                        </>
                    )}
                </>
            )}
        </div>
    ) : (
        <></>
    )
}
