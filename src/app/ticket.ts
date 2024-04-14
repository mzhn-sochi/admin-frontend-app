import { Status } from "@/app/tools";

export interface Ticket {
    id: string;
    userId: string;
    phone: string;
    lastName: string;
    firstName: string;
    middleName: string;
    shopAddress: string;
    shopName: string;
    imageUrl: string;
    status: Status;
    createdAt: number;
    updatedAt: number;
    reason?: string
}
