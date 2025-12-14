"use client";

import { logoutUser } from "@/services/auth/logoutUser";
import { ComponentProps } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const LogoutBtn = (props: ComponentProps<"button">) => {
  const router = useRouter();
  return (
    <Button
      variant={"destructive"}
      onClick={() => {
        logoutUser();
        router.push("/login");
      }}
      {...props}
    >
      Logout
    </Button>
  );
};

export default LogoutBtn;
