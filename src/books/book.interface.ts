import { Document } from 'mongoose';

export interface Book extends Document {
    title: string;
    description: string;
    price: number;
  }