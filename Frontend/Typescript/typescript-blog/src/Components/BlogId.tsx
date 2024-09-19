import { useParams } from "react-router-dom";
import NavBar from "./NavBar";

const blogContent = [
  {
    travel: "Travel Guide",
    date: "Mar. 31, 2021",
    title: "Virtual Tours - Ways to Travel From Home",
    content:
      "Virtual tours can open up amazing and awe-inspiring locations around the world that may otherwise be inaccessible to you. You can experience the majesty of the Sistine Chapel, the wonder of the Great Wall of China, or the beauty of Hawaii from the comfort of your own home.",
    places: ["Vatican Museums", "Great Wall of China", "Louvre", "Taj Mahal"],
  },
  {
    travel: "Travel Guide",
    date: "Mar. 23, 2021",
    title: "Am-EH-zing Places to Visit in Canada!",
    content:
      "Canada's cities and towns offer travelers a diverse choice of experiences, from chic, cosmopolitan centers to mountain resorts and maritime cities. Determining the best places to visit may depend on your interests and the type of trip you're hoping to create.",
    places: ["Vancouver", "Niagara Falls", "Toronto", "Montreal", "Banff"],
  },
  {
    travel: "Travel Tips",
    date: "Mar. 23, 2021",
    title: "Travel Photography Tips: 101",
    content:
      "Photographs are often the best souvenir of your travels. But the worst thing is when they come out blurry, blown out, or just not all that exciting to look at. If you want to learn how to take better pictures on your travels around the world, this article is packed with everything you need to improve your photography skills.",
    places: [
      "Set your camera to shoot in burst mode",
      "Carry a small tripod",
      "Shoot early and late",
      "Don’t be afraid of a little rain (or clouds!)",
      "Get a different perspective",
    ],
  },
];
export default function BlogId() {
  const { blogId } = useParams();

  if (blogId === undefined) return <></>;

  const num: number = +blogId;

  const content = blogContent[num - 1];

  return (
    <>
      <NavBar />
      <div className="w-10/12  mx-auto ">
        <p className="uppercase text-blue-900 mt-8 font-semibold">
          {content.travel}
        </p>
        <div className="h-0.5 bg-sky-300 w-1/12 mb-4"></div>
        <p className="text-gray-500 text-sm mb-4 ">{content.date}</p>
        <p className="text-2xl font-bold  text-sky-900 mb-4">{content.title}</p>
        <ul>
          {content.places.map((item) => (
            <li key={item} className="text-xl font-bold text-gray-900">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
