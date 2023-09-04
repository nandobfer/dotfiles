import { useNavigate } from "react-router-dom"
import PeopleAltIcon from "@mui/icons-material/PeopleAlt"
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter"

export const useAdminTabs = () => {
    const navigate = useNavigate()

    const tabs: Menu[] = [
        {
            id: 1,
            name: "usuários",
            path: "/",
            icon: <PeopleAltIcon />,
            onClick: () => navigate("/admin"),
        },
        {
            id: 2,
            name: "clientes",
            path: "/customers",
            icon: <BusinessCenterIcon />,
            onClick: () => navigate("/admin/customers"),
        },
        {
            id: 3,
            name: "departamentos e funções",
            path: "/departments",
            icon: <BusinessCenterIcon />,
            onClick: () => navigate("/admin/departments"),
        },
    ]

    return tabs
}
