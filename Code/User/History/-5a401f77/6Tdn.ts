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
        [1]: "Domingo",
        [2]: "Segunda",
        [3]: "Terça",
        [4]: "Quarta",
        [5]: "Quinta",
        [6]: "Sexta",
        [7]: "Sábado",
    }

    const format = (date: Date) => {
        // @ts-ignore
        return `${days[date.getDay()]}, ${date.getDate()} de ${months[date.getMonth() + 1]} de ${date.getFullYear()}`
    }

    return format
}

// sexta, 08 de agosto de 2023
