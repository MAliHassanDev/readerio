import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import { Ellipsis } from "lucide-react";

const ArticleCard = () => {
  return (
    <article className="font-serif">
      <div className="mb-3 flex items-center gap-2 text-sm">
        <Avatar size="sm" />
        <p>Erick Zaneti</p>
      </div>
      <Link to="/">
        <div className="items-top flex gap-14">
          <div>
            <h2 className="mb-1 line-clamp-2 text-2xl font-extrabold">
              Common practices that kill Performance in Angular Applications
            </h2>
            <p className="text-light-content mb-4 line-clamp-2">
              Developing high-performance Angular apps requires avoiding common
              pitfalls. Here are key practices that harm performance and how to
              fix them.
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-light-content text-sm">Jul 25,2024</p>
              </div>
              <Ellipsis />
            </div>
          </div>
          <div className="min-w-[80px] md:min-w-[160px]">
            <img src="https://placehold.co/160x107" width={160} height={107} />
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ArticleCard;
