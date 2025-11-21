/**
 * AreaCard component that takes a children as props
 */
export const AreaCard = ({ children }: { children: string }) => {
  return (
    <li className="card-shadow font-semibold p-4 rounded-md">{children}</li>
  );
};
