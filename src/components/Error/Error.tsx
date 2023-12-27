import React from "react";
import Button from "../Button/Button";
import HomeFooter from "../HomeFooter/HomeFooter";
import { useRouter } from "next/navigation";

const Error = () => {
  const router = useRouter();
  return (
    <>
      <div>Error</div>
      <div>
        <Button enable onClick={() => router.push("/")} content="Home" />
      </div>
      {/* Footer */}
      <HomeFooter />
    </>
  );
};

export default Error;
