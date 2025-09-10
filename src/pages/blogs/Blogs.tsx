import { useGetAllBlogs } from "../../hooks/useGetAllBlogs";

// Prop types for blogs
interface BlogProps {
  title: string;
  body: string;
}

/**
 * Blog object that creates a blog card
 * TODO: add functionality to read more button
 * @param props title, body
 */
const Blog = ({ title, body }: BlogProps) => {
  return (
    <div className="card-shadow p-4 rounded-md flex flex-col gap-2">
      <h2>{title}</h2>
      <p className="paragraph-shade">{body}</p>
      <button className="gradient-border mr-auto cursor-pointer">
        <div className="bg-night gradient-border-content">Read more</div>
      </button>
    </div>
  );
};

/**
 * Blogs page that gets pulls all blogs and creates
 * blog cards in ascending order of date.
 */
export const Blogs = () => {
  // Get all blogs using custom hook
  const allBlogs = useGetAllBlogs();

  return (
    <main>
      {/* Blogs containerr */}
      <div className="container mp-default pt-24 md:pt-8">
        {/* Blogs header */}
        <h1>Blog</h1>

        {/* Blog cards container */}
        <div className="grid md:grid-cols-2 gap-4">
          {allBlogs.map((blog) => (
            <Blog
              key={blog.post_id}
              title={blog.post_title}
              body={blog.post_body}
            />
          ))}
        </div>
      </div>
    </main>
  );
};
