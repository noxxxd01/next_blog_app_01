import {
  ChevronRight,
  PersonStanding,
  Pizza,
  Star,
  StarHalf,
  TentTree,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

async function fetchData() {
  const response = await fetch("https://bunbun.vercel.app/api/posts", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
}

export default async function Home() {
  const posts = await fetchData();
  return (
    <main className="px-4 md:px-[10%]">
      {/* Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-2 py-16 md:py-32 px-4 md:px-20 gap-8 ">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-scampi-900">
            Discover Your Next Favorite{" "}
            <i className="text-scampi-700">Read Today!</i>
          </h1>
          <p className="text-scampi-900 mt-6 md:mr-32">
            Welcome to BunBun, your go-to blog for insightful articles and
            engaging stories. Dive into our latest post and find inspiration for
            your next adventure!
          </p>
          <div className="mt-10 flex gap-4 text-scampi-900">
            <button className="border rounded-full border-scampi-400 px-6 py-2 hover:bg-scampi-400 transition-all ease-in-out duration-500">
              Explore
            </button>
            <button className="bg-scampi-800 rounded-full px-6 py-2 text-scampi-50 hover:bg-scampi-900 transition-all ease-in-out duration-500">
              Read
            </button>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="w-[300px] h-[300px] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[500px] bg-scampi-600 absolute rounded-full -bottom-2 right-15 blob"></div>
          <div className="relative rounded-full w-[300px] h-[300px] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[500px] overflow-hidden z-10 blob">
            <Image
              src="/hero.png"
              alt=""
              className="w-full h-full object-cover"
              width={300}
              height={300}
              priority
            />
          </div>
        </div>
      </div>

      {/* Explore */}
      <div className="py-20 flex flex-col gap-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-5">
            <span className="font-bold text-scampi-800">Explore</span>
            <h1 className="text-3xl md:text-4xl font-bold text-scampi-900">
              Discover Our Exciting Blog Categories
            </h1>
          </div>
          <div className="pl-0 md:pl-10 text-scampi-900">
            <p>
              At BunBun, we curate a diverse range of topics to inspire your
              adventures. From travel tips to culinary delights and lifestyle
              hacks, there's something for everyone. Dive into our categories
              and find your next favorite read!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-2xl bg-scampi-300 p-8">
            <TentTree size={48} className="text-scampi-800" />
            <h1 className="text-2xl text-scampi-900 font-bold mt-4">
              Travel: Your Gateway to Adventure
            </h1>
            <p className="text-scampi-800 mt-2">
              Explore breathtaking destinations and travel tips.
            </p>
          </div>
          <div className="rounded-2xl border border-scampi-300 p-8">
            <Pizza size={48} className="text-scampi-800" />
            <h1 className="text-2xl text-scampi-900 font-bold mt-4">
              Food: A Journey for Your Taste Buds
            </h1>
            <p className="text-scampi-800 mt-2">
              Savor delicious recipes and culinary experiences.
            </p>
          </div>
          <div className="rounded-2xl bg-scampi-300 p-8">
            <PersonStanding size={48} className="text-scampi-800" />
            <h1 className="text-2xl text-scampi-900 font-bold mt-4">
              Lifestyle: Embrace Your Unique Journey
            </h1>
            <p className="text-scampi-800 mt-2">
              Discover tips for a balanced and fulfilling life.
            </p>
          </div>
        </div>
        <div className="lg:mt-10 flex gap-4 text-scampi-900">
          <button className="border rounded-full border-scampi-400 px-6 py-2 hover:bg-scampi-400 transition-all ease-in-out duration-500">
            Learn More
          </button>
          <button className="flex items-center text-scampi-600 hover:text-scampi-900 transition-all ease-in-out duration-500">
            Join <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 text-scampi-900 flex flex-col gap-16">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold">What Readers Say</h1>
          <p>BunBun is my go-to for insightful content!</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-8">
          <div className="flex flex-col space-y-6">
            <div className="flex flex-row gap-2">
              <Star className="w-5 h-5" />
              <Star className="w-5 h-5" />
              <Star className="w-5 h-5" />
              <Star className="w-5 h-5" />
              <StarHalf className="w-5 h-5" />
            </div>
            <i className="mr-0 md:mr-32 font-medium">
              "BunBun has transformed my reading experience with its engaging
              articles! I always find something valuable here."
            </i>
            <div>
              <div className="flex items-center gap-2">
                <Image
                  src="/person1.jpg"
                  width={300}
                  height={300}
                  className="object-cover w-10 h-10 rounded-full"
                  alt=""
                />
                <div>
                  <h1 className="font-medium text-scampi-900">Emily Johnson</h1>
                  <p className="text-scampi-800">Editor, Daily News</p>
                </div>
              </div>
              <div></div>
            </div>
          </div>
          <div className="flex flex-col space-y-6">
            <div className="flex flex-row gap-2">
              <Star className="w-5 h-5" />
              <Star className="w-5 h-5" />
              <Star className="w-5 h-5" />
              <Star className="w-5 h-5" />
              <StarHalf className="w-5 h-5" />
            </div>
            <i className="font-medium">
              "The variety of topics on BunBun keeps me coming back! I love the
              fresh perspectives offered in every post."
            </i>
            <div>
              <div className="flex items-center gap-2">
                <Image
                  src="/person2.jpg"
                  width={300}
                  height={300}
                  className="object-cover w-10 h-10 rounded-full"
                  alt=""
                />
                <div>
                  <h1 className="font-medium text-scampi-900">Michael Smith</h1>
                  <p className="text-scampi-800">Writer, Tech Blog</p>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="py-32 text-scampi-900 text-center bg-scampi-50 rounded-2xl">
        <h1 className="text-3xl md:text-4xl font-bold">
          Stay Updated with BunBun
        </h1>
        <p className="mt-6 w-full md:w-[560px] mx-auto">
          Subscribe to our newsletter for the latest updates and exclusive
          content delivered straight to you.
        </p>
        <div className="mt-10 flex flex-col md:flex-row gap-4 text-scampi-900 justify-center">
          <button className="border rounded-full border-scampi-400 px-6 py-2 hover:bg-scampi-400 transition-all ease-in-out duration-500">
            Subscribe
          </button>
          <button className="bg-scampi-800 rounded-full px-6 py-2 text-scampi-50 hover:bg-scampi-900 transition-all ease-in-out duration-500">
            Learn More
          </button>
        </div>
      </div>

      <div className="py-20 text-scampi-900">
        <h1 className="text-3xl md:text-4xl font-bold">Blog Posts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          {posts.slice(0, 3).map((post) => (
            <div key={post._id} className="text-left space-y-2 shadow-lg">
              <div>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={400}
                  className="w-full h-[200px] sm:h-[300px] lg:h-[400px] object-cover rounded-t-xl"
                />
              </div>
              <div className="flex flex-col gap-3 px-3 pb-6">
                <h1 className="text-xl font-bold">{post.title}</h1>
                <p className="text-sm text-scampi-700">
                  <span>by {post.username}</span> |{" "}
                  <span className="text-xs text-scampi-700">
                    {new Date(post.createdAt).toDateString()}
                  </span>
                </p>
                <p>{post.desc.slice(0, 50)}...</p>
                <Link href={`/blog/${post._id}`}>
                  <button className="bg-scampi-800 mt-4 w-[150px] rounded-full px-6 py-2 text-scampi-50 hover:bg-scampi-900 transition-all ease-in-out duration-500">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
