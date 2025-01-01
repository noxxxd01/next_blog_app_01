import User from "@/models/User";
import connectDb from "@/utils/dbConnect";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (request) => {
  const { name, email, password } = await request.json();

  await connectDb();

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new NextResponse("Account already existed");
    }

    const hashedPassword = await bcrypt.hash(password, 5);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return new NextResponse(newUser, { status: 201 });
  } catch (error) {
    return new NextResponse(error.message, {
      status: 500,
    });
  }
};
