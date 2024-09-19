import NavBar from "./NavBar";

export default function AboutUs() {
  return (
    <>
      <NavBar />
      <div className="w-10/12  mx-auto h-svh ">
        <div className="w-1/2 mx-auto h-svh mt-8 p-8">
          <p className="text-5xl text-gray-900 font-bold mb-8">About Us</p>
          <p className="text-gray-600 text-xl tracking-wide mb-12">
            We are a travel blog featuring travel tips, guides, and photography
            from around the world. Whether you need guidance for your first
            trip, or you're a seasoned traveler looking for destination
            inspiration, you've come to the right place!
          </p>
          <blockquote className="border-l-4 border-gray-200 solid pl-4 text-xl tracking-wide italic mb-12">
            "Jobs fill your pockets, adventures fill your soul."
          </blockquote>
          <p className="text-3xl text-gray-900 font-semibold mb-8">
            Our Mission
          </p>
          <p className="text-gray-600 text-xl  tracking-wide mb-8">
            Through our award-winning blog, we love to provide travelers with
            guidance and inspiration and connect them to meaningful experiences
            as they travel the world with curiosity...
          </p>
        </div>
      </div>
    </>
  );
}
