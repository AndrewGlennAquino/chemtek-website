import { useState, useContext, useEffect } from "react";
import { NewBlogPopupContext } from "../../contexts/NewBlogPopupContext";

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
 * Popup component that collects user input for the
 * title and body of a new blog post. Takes open prop
 * to open and close popup menu
 * @param props open
 */
const NewPostPopup = () => {
  // Get state context value and function
  const { isOpen, setIsOpen } = useContext(NewBlogPopupContext);

  // Hold in state the post title and post body
  const [postTitle, setPostTitle] = useState<string>("");
  const [postBody, setPostBody] = useState<string>("");

  /**
   * Function that handles closing the form.
   */
  const handleClose = () => {
    // set post title and body to empty strings, then close
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
   */
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Create submission object from user input
    const submission = { postTitle: postTitle, postBody: postBody };

    /**
     * Try POST request to postBlog Netlify function with
     * stringified submission object.
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
        console.log("Successful POST from Admin!");
      } else {
        console.log("There was a problem during POST from Admin!");
      }
    } catch (error) {
      console.error("There was an error during POST from Admin!", error);
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

          {/* Submit title and body */}
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
};

/**
 * Admin page that allows the admin to add or remove blog posts
 */
const Admin = () => {
  // Hold in state if the popup is open or closed
  const [isOpen, setIsOpen] = useState(false);

  return (
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
              <button
                className="primary-button text-sm cursor-pointer"
                onClick={() => setIsOpen(true)}
              >
                Add Blog Post +
              </button>

              {/* Remove blog post button */}
              <button className="gradient-border cursor-pointer">
                <div className="bg-night gradient-border-content text-sm">
                  Delete Blog Post -
                </div>
              </button>
            </div>

            {/* Blogs container */}
            <div id="blogs-container" className="grid md:grid-cols-2 gap-4">
              <Blog
                title="This is a test title!"
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum qui ipsam natus cupiditate iste, sequi odio doloremque eos quis itaque dolorum cum aliquam odit perferendis unde, nobis aperiam temporibus molestiae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum fuga earum soluta ea inventore accusamus? Inventore illo iure atque odio saepe maxime officia nam, vitae illum porro deserunt quidem doloremque."
              />
            </div>
          </div>
        </div>

        {/* Popup form for new blog post */}
        <NewPostPopup />
      </NewBlogPopupContext.Provider>
    </main>
  );
};

export default Admin;
