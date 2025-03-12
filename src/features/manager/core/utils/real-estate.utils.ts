import { RealEstate } from "../../../../models/real-estate.model";

export function computeNewRealEstate(title: string, description: string) {
     const realEstate: RealEstate = {
            id: crypto.randomUUID(),
            description,
            title,
            livingArea: 0,
            numberOfPieces: 2,
            price: 0,
            ownerId: 'azea',
            totalArea: 0
          }
    return realEstate;
}