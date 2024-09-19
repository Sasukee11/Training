import Image from "./Image";

type blogItemProps = {
  blog: {
    title: string;
    date: string;
    content: string;
    image: string;
  };
};

export default function BlogItem({ blog }: blogItemProps) {
  return (
    <li className="bg-slate-100-100">
      <Image src={blog.image} />
      <p className="uppercase text-blue-900 mt-4 font-semibold">{blog.title}</p>
      <div className="h-0.5 bg-sky-300 w-1/12 mb-2"></div>
      <p className="text-gray-500 text-sm mb-2">{blog.date}</p>
      <p className="text-2xl font-bold  text-sky-900 mb-2">{blog.content}</p>
    </li>
  );
}
