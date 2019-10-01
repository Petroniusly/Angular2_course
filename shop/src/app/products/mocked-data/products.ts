import {Category} from '../interfaces/products-category.interface';

export const productList = [
    {
        name: 'Fisrt Item',
        description: 'This is a cool item',
        price: 23.2,
        colors: [
            'blue',
            'red',
            'orange'
        ],
        category: Category.Wear,
        isAvailable: true,
        discount: 10
    },
    {
        name: 'Second Item',
        description: 'This is another cool item',
        price: 29.2,
        colors: [
            'red',
            'orange',
            'white'
        ],
        category: Category.Wear,
        isAvailable: true,
        discount: 5
    },
    {
        name: 'Third Item',
        description: 'This is one more cool item',
        price: 19.2,
        colors: [
            'white'
        ],
        category: Category.Wear,
        isAvailable: false,
        discount: 15
    }
];
