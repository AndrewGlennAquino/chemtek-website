import { useState, useEffect } from "react";
import { useGetAllBlogs } from "../hooks/useGetAllBlogs";
import { motion } from "motion/react";

// Prop types for blogs
interface BlogProps {
  title: string;
  body: string;
  postDate: string;
}

/**
 * Blog object that creates a blog card
 * @param props title, body
 */
const Blog = ({ title, postDate, body }: BlogProps) => {
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
    <div className="card-shadow p-4 rounded-md flex flex-col gap-4">
      {/* Title and date container */}
      <div>
        <h2 className="text-balance">{title}</h2>
        <h3 className="text-smoke/50">{postDate}</h3>
      </div>

      <motion.button
        className="gradient-border mr-auto cursor-pointer"
        onClick={handleReadMore}
        whileHover="animateHover"
      >
        <motion.div
          className="bg-night gradient-border-content"
          whileHover="animateHover"
          variants={{
            animateHover: {
              backgroundColor: "rgba(0, 0, 0, 0)",
              color: "var(--color-night)",
            },
          }}
        >
          Read more
        </motion.div>
      </motion.button>

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
            <motion.button
              className="gradient-border ml-auto cursor-pointer"
              onClick={handleClose}
              whileHover="animateHover"
            >
              <motion.div
                className="bg-night gradient-border-content w-full h-full"
                whileHover="animateHover"
                variants={{
                  animateHover: {
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    color: "var(--color-night)",
                  },
                }}
              >
                CLOSE
              </motion.div>
            </motion.button>
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
          {allBlogs.map((blog) => {
            // Create new date object with data and parse into variables
            const date = new Date(blog.created_at);
            const day = date.getDate();
            const month = date.getMonth();
            const year = date.getFullYear();

            return (
              <Blog
                key={blog.post_id}
                title={blog.post_title}
                postDate={`${month}/${day}/${year}`}
                body={blog.post_body}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};
