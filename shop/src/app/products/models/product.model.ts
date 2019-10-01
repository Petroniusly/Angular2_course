import {Category} from '../interfaces/products-category.interface';

export interface Product {
    name: string;
    description: string;
    price: number;
    colors: string[];
    category: Category;
    isAvailable: boolean;
    discount: number;
}
