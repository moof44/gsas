export interface Clients {
    tinNo: string,
    businessName:string,
    firstname: string,
    middlename: string,
    lastname: string,
    rdoCode: string,
    classification: string, // individual or non-individual
    lineOfBusiness: string,
    street:string,
    barangay:string,
    city:string,
    province:string,
    zipCode:string,
    landline:string,
    email:string,
    subInfo:ClientSubInfo,
    clientEmployees:ClientEmployee[],
    otherInformation: ClientOtherInfo
}

export interface ClientSubInfo{
    philhealthNo:string,
    phBusinessName: string,
    phAddress: string,
    pagibigNo: string,
    pagibigBusinessName: string,
    pagibigAddress: string,
    sssNo: string,
    sssBusinessName: string,
    sssAddress: string
}

export interface ClientEmployee{
    tinNo: string,
    lastName: string,
    firstName: string,
    middleName: string,
    address: string,
    contactNo: string,
    email: string,
    sssNo: string,
    philhealthNo: string,
    pagibigNo: string,
    position: string,
    birthday: Date,
    salary: number,
    sssContribution: number,
    philhealthContribution: number,
    pagibigContribution:number,
    employmentDate: Date,
    isActive: Boolean
}

export interface ClientOtherInfo{
    birthday: Date,
    homeAddress: string,
    personalContactNo: string,
    personalEmail: string,
    contactPersonnel: string,
    contactPersonnelEmail: string,
    contactPersonnelPhone: string
}