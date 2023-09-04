export const useDate = () => {
    const getDifference = (date: Date | undefined) => {
        if (!date) return

        const today = new Date()
        const difference = new Date(today.getTime() - date.getTime())

        console.log(difference)
    }

    return { getDifference }
}
