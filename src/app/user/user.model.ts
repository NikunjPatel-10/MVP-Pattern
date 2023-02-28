export class user {
    id: number;
    name: string;
    address: string;
    gender: string;
    email: string;
    mobileNo: string;
    birthDate: string
profile:string
    constructor(
        id: number,
        name: string,
        address: string,
        gender: string,
        email: string,
        mobileNo: string,
        birthDate: string,
        profile:string
    ) {
        this.id = id,
            this.name = name,
            this.address = address,
            this.gender = gender,
            this.email = email,
            this.mobileNo = mobileNo,
            this.birthDate = birthDate,
            this.profile = profile
    }

}