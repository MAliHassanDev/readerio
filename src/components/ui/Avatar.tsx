type Props = {
  image?: string;
  size?: "sm" | "md";
};

const Avatar = ({
  image = "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
  size = "md",
}: Props) => {
  return (
    <div className="avatar">
      <div className={(size == "md" ? "w-8" : "w-5") + " rounded-full"}>
        <img src={image} />
      </div>
    </div>
  );
};

export default Avatar;
