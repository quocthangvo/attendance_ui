import { Role } from './role.type'

export interface User {
    _id: string
    name: string
    fullname: string
    code: string
    gender: boolean
    email: string
    address: string
    avatar: string
    qr_code: string
    role: Role
    level_id: null
    major_id: null
    class_id: null
}
