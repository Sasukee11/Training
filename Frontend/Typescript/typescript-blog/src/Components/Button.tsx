import { Link } from "react-router-dom";

type buttonProps = {
  text: string;
  to: string;
};

export default function Button({ text, to }: buttonProps) {
  return (
    <Link to={to}>
      <button className="px-6 py-3 bg-violet-500 text-white rounded-md">
        {text}
      </button>
    </Link>
  );
}
