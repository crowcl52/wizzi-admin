export interface CarBrand {
    id:number,
    created_at:number,
    updated_at:number,
    name: string
}

export interface CarModel {
    id:number,
    created_at:number,
    updated_at:number,
    brand:number,
    size:number,  
    name: string
}