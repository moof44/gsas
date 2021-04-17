export interface CashInOut {
    balance: number,
    cashIn: number,
    cashOut: number,
    dateTime: Date,
    employeeId: string,
    employeeName: string,
    description: string,
    isCheque: boolean
}

export interface CashEndingBalance{
    closingBalance: number,
    moneyCount: number,
    difference: number,
    dateTime: Date,
    countBy: string,
    countBydId: string
}
