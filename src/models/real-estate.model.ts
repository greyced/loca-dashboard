export interface RealEstate {
    id: string;
    title: string;
    description: string;
    numberOfPieces: number | null;
    livingArea: number | null;
    totalArea: number | null; 
    price: number;
    ownerId: string;
}