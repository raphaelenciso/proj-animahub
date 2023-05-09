const Skeleton = ({ className }) => {
  return (
    <div
      className={`bg-gray-200  dark:bg-gray-700 mb-4 animate-pulse
      ${className}
   `}
    ></div>
  );
};
export default Skeleton;
