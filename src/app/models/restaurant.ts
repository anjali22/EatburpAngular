export class Restaurant {
    id: number;
    name: string;
    address: {
        building: string;
        coord: [number];
        streat: string;
        locality: string;
        zipcode: number
    };
    phone: string;
    avg_cost_two: number;
    openTime: string;
    closeTime: string;
    category: [string];
    famousFor: [string];
    images: [string];
}
