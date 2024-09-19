import { Link, Outlet } from "react-router-dom";
import BlogItem from "./BlogItem";
import Image from "./Image";
import NavBar from "./NavBar";
import VirtualTour from "./VirtualTour";

const blogs = [
  {
    title: "Travel Guide",
    date: "Mar. 31, 2021",
    content: "Virtual Tours - Ways to Travel From Home",
    image: "blog.jpg",
  },
  {
    title: "Travel Guide",
    date: "Mar. 23, 2021",
    content: "Am-EH-zing Places to Visit in Canada!",
    image: "Travel.jpg",
  },
  {
    title: "Travel Tips",
    date: "Mar. 23, 2021",
    content: "Travel Photography Tips: 101",
    image: "virtualtour.jpg",
  },
];

export default function Blog() {
  return (
    <>
      <NavBar />
      <div className="w-10/12  mx-auto mb-8">
        <p className="text-4xl text-sky-900 mb-8 font-bold">Blog posts</p>

        <div className="grid grid-cols-3 gap-6 p-2 h-svh">
          <div className="col-span-2">
            <Image src="virtualtour.jpg" />
          </div>
          <VirtualTour />
        </div>

        <ul className="grid grid-cols-3 gap-4 p-2 ">
          {blogs.map((blog, index) => (
            <Link to={`/blog/${index + 1}`} key={blog.image}>
              <BlogItem blog={blog} />
            </Link>
          ))}
        </ul>
        <Outlet />
      </div>
    </>
  );
}
