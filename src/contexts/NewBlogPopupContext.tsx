import { createContext, type Dispatch, type SetStateAction } from "react";

// Types for context object
interface NewBlogPopupContextTypes {
  isOpen?: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
};

// Context for admin new blog post popup
export const NewBlogPopupContext = createContext<NewBlogPopupContextTypes>({});
