import { Promotion } from "../definitions/products"

export const usePromotions = () => {
    const promotions: Promotion[] = [
        {
            id: 1,
            image_url: "https://loja.casaludica.com.br/wp-content/uploads/2023/07/Peca-1-Marketplace-Doe-Esperanca-1.webp",
            subtitle: "Até 5x sem juros",
        },
        {
            id: 2,
            image_url: "https://loja.casaludica.com.br/wp-content/uploads/2023/07/Peca-1-Marketplace-Doe-Esperanca.webp",
            subtitle: "Até 8x sem juros",
        },
    ]

    return promotions
}