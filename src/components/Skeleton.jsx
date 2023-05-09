const Skeleton = ({ className }) => {
  return (
    <div
      class={`bg-gray-200  dark:bg-gray-700 mb-4 animate-pulse
      ${className}
   `}
    ></div>
  );
};
export default Skeleton;
