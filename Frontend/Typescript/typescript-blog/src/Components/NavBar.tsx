import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="w-10/12  mx-auto flex justify-between items-center mb-10">
      <Link to="/">
        <div className="p-2 flex gap-4 items-center justify-center">
          <img
            alt="Starter Site"
            loading="lazy"
            width="230"
            height="300"
            decoding="async"
            data-nimg="1"
            className="h-14 sm:h-20 w-auto"
            style={{ color: "transparent" }}
            srcset="https://cdn.aglty.io/blog-starter-2021-template/logos/travel-blog-logo.png?q=60&amp;w=230&amp;format=auto 1x, https://cdn.aglty.io/blog-starter-2021-template/logos/travel-blog-logo.png?q=60&amp;w=230&amp;format=auto 2x"
            src="https://cdn.aglty.io/blog-starter-2021-template/logos/travel-blog-logo.png?q=60&amp;w=230&amp;format=auto"
          />
          <p className="text-xl text-sky-900 font-semibold">My Starter Site</p>
        </div>
      </Link>
      <div className="flex justify-between items-center gap-6">
        <Link to="/">
          <p className="text-lg hover:underline cursor-pointer">Home</p>
        </Link>
        <Link to="/Blog">
          <p className="text-lg hover:underline cursor-pointer">Blog</p>
        </Link>
        <Link to="/about">
          <p className="text-lg hover:underline cursor-pointer">About</p>
        </Link>
      </div>
    </div>
  );
}
