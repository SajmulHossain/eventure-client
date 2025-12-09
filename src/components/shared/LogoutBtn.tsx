"use client";

import { logoutUser } from "@/services/auth/logoutUser";
import { ComponentProps } from "react";
import { Button } from "../ui/button";

const LogoutBtn = (props: ComponentProps<"button">) => {
  return (
    <Button variant={"destructive"} onClick={logoutUser} {...props}>
      Logout
    </Button>
  );
};

export default LogoutBtn;
