export const useDocumentMask = () => {
    const documentMask = (value: string | number) => {
        const numbersOnly = value.toString().replace(/[^\d]/g, "")
        let mask

        if (numbersOnly.length <= 11) {
            mask = [/\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, "-", /\d/, /\d/]
        } else {
            mask = [/\d/, /\d/, ".", /\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/]
        }

        return mask
    }

    return documentMask
}
