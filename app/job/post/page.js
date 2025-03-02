import PageHeader from "@/components/PageHeader";
import JobPostCart from "@/components/ui/JobPostCart";
import Pagination from "@/components/ui/Pagination";
import posts from "@/utils/data/job-post";

const page = () => {
  return (
    <>
      <PageHeader name={"Job Post"} />
      <div className="bg-white">
        <div className="py-20 md:px-0 px-4 container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <JobPostCart key={post.id} data={post} />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
