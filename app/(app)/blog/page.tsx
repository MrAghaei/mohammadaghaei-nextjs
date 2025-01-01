import BlogHeader from "@/app/(app)/(components)/BlogHeader";
import BlogPostCard from "@/app/(app)/(components)/BlogPostCard";

function Page() {
  return (
    <div className="dark:bg-darkModeBlack dark:text-white bg-white h-screen mx-auto">
      <BlogHeader />
      <BlogPostCard />
    </div>
  );
}

export default Page;
