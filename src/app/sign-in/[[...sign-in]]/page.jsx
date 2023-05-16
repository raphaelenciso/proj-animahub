import { SignIn } from "@clerk/nextjs/app-beta";
import { dark } from "@clerk/themes";

const page = () => {
  return (
    <div className="flex justify-center items-center bg-bg-main min-h-[calc(100vh-56px)]">
      <SignIn
        appearance={{
          baseTheme: dark,
          elements: {
            formButtonPrimary:
              "bg-gradient-to-r from-primary-main via-pink-400 to-secondary-main hover:opacity-80 ",
          },
        }}
      />
    </div>
  );
};
export default page;
