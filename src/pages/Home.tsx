import ArticleCard from "@/components/ui/ArticleCard";

const Home = () => {
  return (
    <main className="w-full">
      <div className="mx-auto w-full max-w-[800px] pt-6">
        <div className="border-base-300 border-b-1">
          <nav className="text-light-content flex gap-10 px-10">
            <button className="text-base-content border-b-1 py-3">
              For you
            </button>
            <button className="py-3">Following</button>
          </nav>
        </div>
        <section className="pt-12">
          <ArticleCard />
        </section>
      </div>
    </main>
  );
};

export default Home;
