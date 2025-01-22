export interface PropertyProps {
    name: string;
    rating: number;
    address: { city: string; country: string };
    image: string;
    description: string;
    category: string[];
    price: number;
    reviews: {
        avatar: string;
        name: string;
        rating: number;
        comment: string;
    }[];
}
