import Comments from "@/components/Comments";
import FormComment from "@/components/FormComment";

const BlogDetailPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold">Post 1</h1>
      <p>Post By : Veasna</p>
      <div className="mt-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
        quibusdam ut non ad nisi.
      </div>
      <div>
        <Comments />
        <FormComment />
      </div>
    </div>
  );
};

export default BlogDetailPage;
