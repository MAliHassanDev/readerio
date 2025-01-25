import { Link } from "react-router";
import Avatar from "./Avatar";
import {
  ChatBubbleOvalLeftIcon,
  EllipsisHorizontalIcon,
  HeartIcon,
} from "@heroicons/react/16/solid";
import { DropDownTop } from "./DropDownTop";
import toast from "react-hot-toast";

export const ArticleCard = () => {
  return (
    <article className="font-serif">
      <AuthorInfo name="Eric John" image="" />
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
            <ArticleStats
              comments={3}
              favorites={22}
              publicationDate="Jul 25,2024"
              author="Eric John"
            />
          </div>
          <div className="min-w-[80px] md:min-w-[160px]">
            <img src="https://placehold.co/160x107" width={160} height={107} />
          </div>
        </div>
      </Link>
    </article>
  );
};

type AuthorInfoProp = {
  name: string;
  image: string;
};
function AuthorInfo({ image, name }: AuthorInfoProp) {
  return (
    <div className="mb-3 flex items-center gap-2 text-sm">
      <Avatar image={image} size="sm" />
      <p>{name}</p>
    </div>
  );
}

type ArticleStatsProp = {
  publicationDate: string;
  favorites: number;
  comments: number;
  author: string;
};
function ArticleStats({
  publicationDate,
  favorites,
  comments,
  author,
}: ArticleStatsProp) {
  return (
    <div className="text-light-content flex items-center justify-between">
      <div className="flex items-center gap-4">
        <p className="text-sm">{publicationDate}</p>
        <div className="flex items-center gap-[2px]">
          <HeartIcon className="size-5" />
          <span className="font-secondary text-sm">{favorites}</span>
        </div>
        <div className="flex items-center gap-[3px]">
          <ChatBubbleOvalLeftIcon className="mb-[2px] size-[17px]" />
          {comments > 0 ? (
            <span className="font-secondary text-sm">{comments}</span>
          ) : (
            ""
          )}
        </div>
      </div>
      <DropDownTop
        items={[
          {
            title: "Follow Author",
            onClick: () => {
              toast.success(`You're now following ${author}`);
            },
          },
        ]}
      >
        <EllipsisHorizontalIcon className="text-light-content size-5" />
      </DropDownTop>
    </div>
  );
}
