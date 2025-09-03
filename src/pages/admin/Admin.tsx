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
 * title and body of a new blog post.
 */
const NewPostPopup = () => {
  return (
    <div
      className={`bg-night w-screen h-screen hidden flex-col justify-center items-center fixed inset-0`}
    >
      New Blog Popup
      <button>CLOSE</button>
    </div>
  );
};

/**
 * Admin page that allows the admin to add or remove blog posts
 */
const Admin = () => {
  /**
   * Function that handles opening the popup
   * to create a new blog post
   */
  // TODO: add logic to opening popup window
  const handleOpenPopup = () => {}

  /**
   * Handle POST request for creating a new blog.
   * Stringify postTitle and postBody, then send
   * POST request to postBlog Netlify function.
   */
  const handlePost = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Create submission object from user input
    // TODO: replace test with user input from popup
    const submission = { postTitle: "test title", postBody: "test body" };

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

  return (
    <main>
      {/* Admin page container */}
      <div className="container mp-default flex flex-col gap-8">
        {/* Admin page header */}
        <h1 className="pt-16 sm:pt-0">Admin</h1>

        {/* Button and blogs container */}
        <div className="flex flex-col gap-4">
          {/* Button container */}
          <div className="flex gap-4">
            {/* Add new blog post button */}
            <button className="primary-button text-sm cursor-pointer">
              Add Blog Post +
            </button>

            {/* Remove blog post button */}
            <button
              className="gradient-border cursor-pointer"
              onClick={handlePost}
            >
              <div className="bg-night gradient-border-content text-sm">
                Delete Blog Post -
              </div>
            </button>
          </div>

          {/* Blogs container */}
          <div className="grid md:grid-cols-2 gap-4">
            <Blog
              title="Test title"
              body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat reprehenderit eum harum ducimus repudiandae officiis eaque veniam placeat? Harum saepe ratione autem mollitia facilis a consequuntur iste sequi odio facere?"
            />
            <Blog
              title="Test title"
              body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat reprehenderit eum harum ducimus repudiandae officiis eaque veniam placeat? Harum saepe ratione autem mollitia facilis a consequuntur iste sequi odio facere?"
            />
            <Blog
              title="Test title"
              body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat reprehenderit eum harum ducimus repudiandae officiis eaque veniam placeat? Harum saepe ratione autem mollitia facilis a consequuntur iste sequi odio facere?"
            />
            <Blog
              title="Test title"
              body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat reprehenderit eum harum ducimus repudiandae officiis eaque veniam placeat? Harum saepe ratione autem mollitia facilis a consequuntur iste sequi odio facere?"
            />
            <Blog
              title="Test title"
              body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat reprehenderit eum harum ducimus repudiandae officiis eaque veniam placeat? Harum saepe ratione autem mollitia facilis a consequuntur iste sequi odio facere?"
            />
            <Blog
              title="Test title"
              body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat reprehenderit eum harum ducimus repudiandae officiis eaque veniam placeat? Harum saepe ratione autem mollitia facilis a consequuntur iste sequi odio facere?"
            />
          </div>
        </div>
      </div>

      <NewPostPopup />
    </main>
  );
};

export default Admin;
