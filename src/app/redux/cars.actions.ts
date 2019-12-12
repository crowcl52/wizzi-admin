import { Action } from '@ngrx/store';
import { CarBrand, CarModel } from '../models/cars.model';

export const SET_CARS_BRAND = '[Cars Brand] Set';

export const SET_CARS_MODEL = '[Cars Model] Set';
export const UNSET_CARS = '[Cars Model] UnSet';

// Cars brand
export class SetCarsBrand implements Action {
    readonly type = SET_CARS_BRAND;
    constructor(public cars: CarBrand[]) { }
}

// Cars Model
export class SetCarsModel implements Action {
    readonly type = SET_CARS_MODEL;
    constructor(public cars: CarModel[]) { }
}
export class UnsetCars implements Action {
    readonly type = UNSET_CARS;
}



export type actions = SetCarsBrand |
    SetCarsModel | UnsetCars;
