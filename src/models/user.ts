export interface User {
    id: string;
    name: string;
    mail: string;
    password: string;
    role: Role;
    organisations: Array<string>;
    capabilities: Array<Capability>;
    phone?: string;
  }
  
  export enum Role {
    SUPER_ADMIN = 'SUPER_ADMIN',
    ADMIN = 'ADMIN',
  }
  
  export enum Capability {
    READ = 'READ',
    WRITE = 'WRITE',
  }
  