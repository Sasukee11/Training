import Button from "./Button";

type homeContentProps = {
  blog: {
    title: string;
    description: string;
    content: string;
    buttonContent: string;
    to: string;
  };
};

export default function HomeContent({ blog }: homeContentProps) {
  return (
    <div className="p-4">
      <p className="uppercase text-blue-900 mb-6 font-semibold">{blog.title}</p>
      <p className="text-5xl text-sky-900 w-8/12 font-bold mb-6">
        {blog.description}
      </p>
      <p className="text-gray-600 text-lg mb-6">{blog.content}</p>
      <Button text={blog.buttonContent} to={blog.to} />
    </div>
  );
}
