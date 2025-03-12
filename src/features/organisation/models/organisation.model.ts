import { User } from "../../../models/user";

export interface Organisation {
    id: string;
    name: string;
    members: User[];
    phone: string;
    nbRealEstates: number;
  }
  