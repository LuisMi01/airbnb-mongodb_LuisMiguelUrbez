import { Listing, User } from "@prisma/client";

export type SafeListing = Omit<Listing, "createdAt"> & {
    createdAt: Date;
};

export type SafeUser = Omit<
    User,
    "createdAt" | "updatedAt" | "emailVerified"
> & {
    createdAt: Date;
    updatedAt: Date;
    emailVerified: string | null;
};