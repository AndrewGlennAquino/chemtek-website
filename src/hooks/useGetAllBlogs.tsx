import { useState, useEffect } from "react";

// Types for blog object
export type BlogObject = {
  post_id: number;
  post_title: string;
  post_body: string;
  created_at: Date;
  updated_at: Date;
};

/**
 * Custom hook that fetches all blogs from server,
 * then returns array of blog objects
 */
export const useGetAllBlogs = (): BlogObject[] => {
  // Hold in state all blogs, initially an empty array
  const [allBlogs, setAllBlogs] = useState<BlogObject[]>([]);

  /**
   * Once on mount, try fetching all blogs from Render PostgreSQL database.
   * On successful fetch, setAllBlogs state to parsed response.
   * On failure, console.log error and response status.
   * On error, console.error message and error trace.
   */
  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const response = await fetch("/.netlify/functions/getAllBlogs", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data: BlogObject[] = await response.json();

          setAllBlogs(data);
        } else {
          console.log("Unsuccessful GET request", response.status);
        }
      } catch (err) {
        console.error("Unsuccessful GET request", err);
      }
    };

    fetchAllBlogs();
  }, []);

  return allBlogs;
};
