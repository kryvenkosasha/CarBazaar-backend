import { model, Schema } from 'mongoose';

const carInfoSchema = new Schema(
  {
    make: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    mileage_km: {
      type: Number,
      required: true,
    },
    engine_capacity_cm3: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    price: {
      type: Number,
      required: true,
    },
    seller_name: {
      type: String,
      required: true,
    },
    seller_phone: {
      type: Number,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const carInfoCollection = model('cars', carInfoSchema);
