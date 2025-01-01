import Post from "@/models/Post";
import connectDb from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { id } = params;
  console.log(id);
  try {
    await connectDb();

    const post = await Post.findById(id);

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse("Failed to fetch post", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = params;
  console.log(id);
  try {
    await connectDb();

    const post = await Post.findByIdAndDelete(id);

    return new NextResponse("Post deleted successfully", { status: 200 });
  } catch (error) {
    return new NextResponse("Failed to delete post", { status: 500 });
  }
};
