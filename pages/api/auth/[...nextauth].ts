import NextAuth, {AuthOptions} from "next-auth";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import prisma from "@/app/libs/prismadb";
import GoogleProvider from "next-auth/providers/google";
import CredentialProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        CredentialProvider({
            name: 'credentials',
            credentials: {
                email: {label: "Username", type: "text"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error('Email o contraseña incorrectos')
                }

                const user = await prisma.user.findUnique({
                    where: {email: credentials.email}
                });
                if(!user || user?.hashedPassword) {
                    throw new Error('Email o contraseña incorrectos')
                }

                const isCorrectPasssword = bcrypt.compare(
                    credentials.password,
                    user.hashedPassword
                );

                if(!isCorrectPasssword) {
                    throw new Error('Email o contraseña incorrectos')
                }

                return user;

            }
        })
    ],
    pages: {
        signIn: '/',
    },
    debug: process.env.NODE_ENV === 'development',
    session : {
        strategy: 'jwt',
    },
    secret : process.env.NEXTAUTH_SECRET
}

export default NextAuth(authOptions);