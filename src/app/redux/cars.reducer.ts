import * as fromUser from './cars.actions';
import { CarBrand, CarModel } from '../models/cars.model';

export interface CarsSetState {
    carBrand: CarBrand[];
    carModel: CarModel[];
}

const initState: CarsSetState = {
    carBrand: [],
    carModel: [],
}

export function carsReducer(state = initState, action: fromUser.actions): CarsSetState {
    switch (action.type) {
        case fromUser.SET_CARS_BRAND:
            return { ...state, carBrand: [...action.cars] };
        case fromUser.SET_CARS_MODEL:
            return { ...state, carModel: [...action.cars] };
        case fromUser.UNSET_CARS:
            return initState;
        default:
            return state;
    }
}