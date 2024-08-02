import { carInfoCollection } from '../db/models/carInfo.js';

export const getAllCars = async () => {
  const cars = await carInfoCollection.find();
  return cars;
};

export const getCarById = async (carId) => {
    console.log(carId);
  const car = await carInfoCollection.findById(carId);
  return car;
};
