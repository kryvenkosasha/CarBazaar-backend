import { getAllCars, getCarById } from '../services/cars.js';

export const getCarsController = async (req, res) => {
  const cars = await getAllCars();
  res.status(200).json({
    status: 200,
    message: 'Successfully found cars!',
    data: cars,
  });
};

export const getCarByIdController = async (req, res) => {
    const {carId} = req.params;
    console.log(carId);
  const car = await getCarById(carId);

  if (!car) {
    res.status(404).json({
      message: 'Car not found',
    });
    return;
    }
    
      res.status(200).json({
        status: 200,
        message: 'Successfully found car!',
        data: car,
      });
};
