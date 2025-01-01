import Post from "@/models/Post";
import connectDb from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const url = new URL(request.url);
  const username = url.searchParams.get("username");

  try {
    await connectDb();

    const posts = await Post.find(username && { username });

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse("Failed to fetch posts", { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();
  const newPost = new Post(body);

  try {
    await connectDb();

    await newPost.save();

    return new NextResponse(JSON.stringify(newPost), { status: 200 });
  } catch (error) {
    console.error("Error creating post:", error);
    return new NextResponse("Failed to create post", { status: 500 });
  }
};
