export const useFormatMessageTime = () => {
    const months = {
        [1]: "Janeiro",
        [2]: "Fevereiro",
        [3]: "Março",
        [4]: "Abril",
        [5]: "Maio",
        [6]: "Junho",
        [7]: "Julho",
        [8]: "Agosto",
        [9]: "Setembro",
        [10]: "Outubro",
        [11]: "Novembro",
        [12]: "Dezembro",
    }

    const days = {
        [1]: "Dom",
        [2]: "Seg",
        [3]: "Ter",
        [4]: "Qua",
        [5]: "Qui",
        [6]: "Sex",
        [7]: "Sáb",
    }

    const format = (date: Date) => {
        // @ts-ignore
        return `${days[date.getDay()]}, ${date.getDate()} de ${months[date.getMonth() + 1]} de ${date.getFullYear()}`
    }

    return format
}

// sexta, 08 de agosto de 2023
