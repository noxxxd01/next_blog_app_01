import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProdiver from "next-auth/providers/credentials";
import connectDb from "@/utils/dbConnect";
import bcrypt from "bcryptjs";
import User from "@/models/User";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProdiver({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        await connectDb();

        try {
          const user = await User.findOne({ email: credentials.email });

          if (user) {
            const isPasswordValid = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isPasswordValid) {
              return user;
            } else {
              throw new Error("Wrong credentials");
            }
          } else {
            throw new Error("User not found");
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
  ],
  pages: {
    error: "/dashboard/sign-in",
  },
});

export { handler as GET, handler as POST };
