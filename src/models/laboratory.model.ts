export interface ILaboratory {
    _id: string
    name: string
    location: string
    capacity: number
    deskList: Array<any>
    isAvailable: boolean
    createdAt: number
    __v: number
}