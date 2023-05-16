import { UserProfile } from "@clerk/nextjs/app-beta";
import { dark } from "@clerk/themes";

const page = () => {
  return (
    <div className="flex justify-center items-center bg-bg-main min-h-[calc(100vh-64px)] pt-[64px]">
      <UserProfile
        appearance={{
          baseTheme: dark,
          variables: {
            colorPrimary: "#0080ff",
          },
        }}
      />
    </div>
  );
};
export default page;
