import { useState, useContext, useEffect } from "react";
import { NewBlogPopupContext } from "../contexts/NewBlogPopupContext";
import { useGetAllBlogs } from "../hooks/useGetAllBlogs";
import { useAuth0 } from "@auth0/auth0-react";
import { motion } from "motion/react";

// Prop types for blogs
interface BlogProps {
  postId: number;
  title: string;
  postDate: string;
  body: string;
}

/**
 * Blog object that creates a blog card
 * @param props postId, title, body
 */
const Blog = ({ postId, title, postDate, body }: BlogProps) => {
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

  /**
   * Handle DELETE request for deleting an existing blog.
   * Stringify postId, then send DELETE request to deleteBlog
   * Netlify function. On successful response, trigger website rebuild.
   */
  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/.netlify/functions/deleteBlog", {
        method: "DELETE",
        body: JSON.stringify(postId),
      });

      if (response.ok) {
        handleClose();

        // Try POST request to build hook to trigger rebuild
        try {
          const buildResponse = await fetch(
            "/.netlify/functions/postBuildHook",
            {
              method: "POST",
            }
          );

          if (buildResponse.ok) {
            console.log(buildResponse.body);
          } else {
            console.log(buildResponse.body);
          }
        } catch (err) {
          console.error(err);
        }
      }
    } catch (err) {
      console.error("Unsuccessful DELETE request", err);
    }
  };

  /**
   * On popup open, prevent background scrolling.
   * On close, allow for background scrolling.
   * Cleanup after unmount.
   */
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
        <div className="bg-night max-w-256 mp-default pt-24 w-full h-full flex flex-col gap-4 overflow-y-auto">
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
          <p className="lg:text-lg paragraph-shade">{body}</p>

          <motion.button
            className="primary-button cursor-pointer"
            onClick={handleDelete}
            whileHover={{ scale: 1.1 }}
          >
            DELETE
          </motion.button>
        </div>
      </div>
    </div>
  );
};

/**
 * Popup component that collects user input for the
 * title and body of a new blog post. Handles POST request
 * on submit.
 */
const NewPostPopup = () => {
  // Get state context value and function
  const { isOpen, setIsOpen } = useContext(NewBlogPopupContext);

  // Hold in state the post title and post body
  const [postTitle, setPostTitle] = useState<string>("");
  const [postBody, setPostBody] = useState<string>("");

  /**
   * Function that sets post title and body
   * to empty strings, then close popup window.
   */
  const handleClose = () => {
    if (setIsOpen) {
      setPostTitle("");
      setPostBody("");
      setIsOpen(false);
    }
  };

  /**
   * Handle POST request for creating a new blog.
   * Stringify postTitle and postBody, then send
   * POST request to postBlog Netlify function.
   * On successful submission, trigger website rebuild.
   */
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Create submission object from user input
    const submission = { postTitle: postTitle, postBody: postBody };

    /**
     * Try POST request to postBlog Netlify function with
     * stringified submission object. On successful response,
     * close the popup and try POST request to postBuildHook
     * Netlify function with empty body. Console log response
     * of build response fetch.
     */
    try {
      const response = await fetch("/.netlify/functions/postBlog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submission),
      });

      if (response.ok) {
        handleClose();

        // Try POST request to build hook to trigger rebuild
        try {
          const buildResponse = await fetch(
            "/.netlify/functions/postBuildHook",
            {
              method: "POST",
            }
          );

          if (buildResponse.ok) {
            console.log(buildResponse.body);
          } else {
            console.log(buildResponse.body);
          }
        } catch (err) {
          console.error(err);
        }
      }
    } catch (err) {
      console.error("Unsuccessful POST request", err);
    }
  };

  /**
   * On popup open, prevent background scrolling.
   * On close, allow for background scrolling.
   * Cleanup after unmount.
   */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div
      className={`${
        isOpen ? `flex` : `hidden`
      } bg-night/95 w-screen h-screen fixed inset-0`}
    >
      {/* Popup form container */}
      <div className="container w-full h-full mp-default pt-20 lg:pt-24 flex flex-col gap-4 overflow-y-auto">
        {/* Popup heading and close container */}
        <div className="flex justify-between items-center">
          {/* Popup heading */}
          <h1>New Blog Post</h1>

          {/* Close popup button */}
          <button onClick={handleClose}>CLOSE</button>
        </div>

        {/* Form for new blog post */}
        <form className="flex flex-col gap-4">
          {/* Blog post title label and input */}
          <div className="flex flex-col gap-1">
            <label htmlFor="postTitle" className="text-lg font-semibold">
              Blog Post Title:
            </label>
            <input
              id="postTitle"
              name="postTitle"
              type="text"
              placeholder="Post title"
              value={postTitle}
              onChange={(e) => {
                setPostTitle(e.target.value);
              }}
              className="bg-smoke text-night p-2 rounded-md"
            />
          </div>

          {/* Blog post body label and input */}
          <div className="h-full flex flex-col gap-1">
            <label htmlFor="postBody" className="text-lg font-semibold">
              Blog Post Body:
            </label>
            <textarea
              id="postBody"
              name="postBody"
              placeholder="Post body"
              value={postBody}
              onChange={(e) => {
                setPostBody(e.target.value);
              }}
              className="bg-smoke text-night w-full h-[250px] p-2 rounded-md"
            ></textarea>
          </div>

          {/* Submit post title and body */}
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
};

/**
 * Admin page that allows the admin to add or remove blog posts
 */
export const Admin = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  // Hold in state if the popup is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Get all blogs using custom hook
  const allBlogs = useGetAllBlogs();

  return isAuthenticated ? (
    <main>
      {/* Provide isOpen and setIsOpen context to all children */}
      <NewBlogPopupContext.Provider value={{ isOpen, setIsOpen }}>
        {/* Admin page container */}
        <div className="container mp-default flex flex-col gap-8">
          {/* Admin page header */}
          <h1 className="pt-16 sm:pt-0">Admin</h1>

          {/* Button and blogs container */}
          <div className="flex flex-col gap-4">
            {/* Button container */}
            <div className="flex gap-4">
              {/* Add new blog post button that opens popup */}
              <motion.button
                className="primary-button text-sm cursor-pointer"
                onClick={() => setIsOpen(true)}
                whileHover={{ scale: 1.1 }}
              >
                Add Blog Post +
              </motion.button>

              {/* Logout button */}
              <motion.button
                className="gradient-border cursor-pointer"
                onClick={() =>
                  logout({
                    // Allowed logout url on Auth0
                    logoutParams: { returnTo: window.location.origin },
                  })
                }
                whileHover="animateHover"
              >
                <motion.div
                  className="gradient-border-content w-full h-full"
                  initial={{ background: "rgba(30, 27, 34, 1)" }}
                  whileHover="animateHover"
                  variants={{
                    animateHover: {
                      background: "rgba(30, 27, 34, 0)",
                      color: "var(--color-night)",
                    },
                  }}
                >
                  Logout
                </motion.div>
              </motion.button>
            </div>

            {/* Blogs container */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Create a new blog card for each blog from server */}
              {allBlogs.map((blog) => {
                // Create new date object with data and parse into variables
                const date = new Date(blog.created_at);
                const day = date.getDate();
                const month = date.getMonth();
                const year = date.getFullYear();

                return (
                  <Blog
                    key={blog.post_id}
                    postId={blog.post_id}
                    title={blog.post_title}
                    postDate={`${month}/${day}/${year}`}
                    body={blog.post_body}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Popup form for new blog post */}
        <NewPostPopup />
      </NewBlogPopupContext.Provider>
    </main>
  ) : (
    <main>
      {/* Login/Logout button container */}
      <div className="container mp-default pt-24 md:pt-8">
        {/* Button flexbox */}
        <div className="flex gap-2">
          {/* Login button */}
          <motion.button
            className="primary-button cursor-pointer"
            onClick={() => loginWithRedirect()}
            whileHover={{
              scale: 1.05,
            }}
          >
            Login
          </motion.button>

          {/* Logout button */}
          <motion.button
            className="gradient-border cursor-pointer"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
            whileHover="animateHover"
          >
            <motion.div
              className="gradient-border-content w-full h-full"
              initial={{ background: "rgba(30, 27, 34, 1)" }}
              whileHover="animateHover"
              variants={{
                animateHover: {
                  background: "rgba(30, 27, 34, 0)",
                  color: "var(--color-night)",
                },
              }}
            >
              Logout
            </motion.div>
          </motion.button>
        </div>
      </div>
    </main>
  );
};
