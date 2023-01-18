export type depositType = {
    id?: number,
    name: string,
    value: number,
    day: number | Date
}

export type Deposit = Omit<depositType, "id" | "day">