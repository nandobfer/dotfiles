export const useDate = () => {
    const getDifference = (date: Date | undefined) => {
        if (!date) return

        const today = new Date()
        const hours = (today.getTime() - date.getTime()) / 1000 / 60 / 60
        const months = hours / 24 / 30

        return Math.floor(months)
    }

    const getHours = (date: Date | undefined) => {
        if (!date) return

        const today = new Date()
        const hours = (today.getTime() - date.getTime()) / 1000 / 60 / 60

        return Math.floor(hours)
    }

    const timestampImage = (url: string) => `${url}?time=${new Date().getTime()}`

    return { getDifference, getHours, timestampImage }
}
