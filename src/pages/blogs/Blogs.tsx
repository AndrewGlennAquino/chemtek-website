import { useState, useEffect } from "react";
import { useGetAllBlogs } from "../../hooks/useGetAllBlogs";

// Prop types for blogs
interface BlogProps {
  title: string;
  body: string;
}

/**
 * Blog object that creates a blog card
 * @param props title, body
 */
const Blog = ({ title, body }: BlogProps) => {
  // Hold in state if read more was clicked
  const [readMore, setReadMore] = useState(false);

  // Function that expands a popup window to read enitre body
  const handleReadMore = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setReadMore(true);
  };

  // Function that closes popup window
  const handleClose = (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (e) {
      e.preventDefault();
    }

    setReadMore(false);
  };

  // /**
  //  * On popup open, prevent background scrolling.
  //  * On close, allow for background scrolling.
  //  * Cleanup after unmount.
  //  */
  useEffect(() => {
    if (readMore) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [readMore]);

  return (
    <div className="card-shadow p-4 rounded-md flex flex-col gap-2">
      <h2 className="text-balance">{title}</h2>
      <button
        className="gradient-border mr-auto cursor-pointer"
        onClick={handleReadMore}
      >
        <div className="bg-night gradient-border-content">Read more</div>
      </button>

      {/* Read more popup window */}
      <div
        className={`${
          readMore ? `block` : `hidden`
        } bg-night/95 w-full h-full max-h-screen absolute inset-0`}
      >
        {/* Read more content container */}
        <div className="bg-night max-w-256 mp-default pt-24 w-full h-full overflow-y-auto">
          {/* Blog title and close button container */}
          <div className="flex justify-between items-center gap-2">
            {/* Blog title */}
            <h2 className="lg:text-2xl text-balance">{title}</h2>

            {/* Close button */}
            <button className="gradient-border ml-auto cursor-pointer" onClick={handleClose}>
              <div className="bg-night gradient-border-content w-full h-full">CLOSE</div>
            </button>
          </div>

          {/* Blog body */}
          <p className="lg:text-lg paragraph-shade pt-4">{body}</p>
        </div>
      </div>
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
      <div className="container mp-default pt-24 md:pt-8 flex flex-col gap-4">
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
