export const useDate = () => {
    const getDifference = (date: Date | undefined) => {
        if (!date) return

        const today = new Date()
        console.log(today.toLocaleString("pt-br"))
        const difference = (today.getTime() - date.getTime()) / 1000 / 60 / 60

        console.log(difference)
    }

    return { getDifference }
}
