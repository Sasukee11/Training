import HomeContent from "./HomeContent";
import Image from "./Image";

const blog = {
  title: "Wander the world",
  description: "From short breaks to long adventures",
  content:
    "Travel blog featuring long travel tips, guides, and photography from around the world. Whether you need guidance for your first trip, or you're a seasoned traveler looking for a destination inspiration, you've come to the right place!",
  buttonContent: "Read our blog",
  to: "/blog",
};

const travel = {
  title: "About Us",
  description: "Adventurers and Storytellers",
  content:
    "Through our award-winning blog, we love to provide travelers with guidance and inspiration and connect them to meaningful experiences as they travel the world with curiosity",
  buttonContent: "Learn about us",
  to: "/about",
};

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 p-2 mb-8">
        <HomeContent blog={blog} />
        <Image src="blog.jpg" />
      </div>
      <div className="grid grid-cols-2 gap-4 p-2">
        <Image src="Travel.jpg" />
        <HomeContent blog={travel} />
      </div>
    </div>
  );
}
