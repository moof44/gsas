export interface Attendance {
    employeeId: string,
    name: string,
    position: string,
    date: Date,
    timeIn: string,
    timeOut: string,
    timeInConfirm: boolean,
    timeOutConfirm: boolean,
    timeInCorrection: string,
    timeOutCorrection: string,
    authorizedById: string,
    authorizedByName: string
}
