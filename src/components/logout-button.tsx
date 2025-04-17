"use client";

import { useUserStore } from "@/store/auth";
import { Button } from "./ui/button";

export default function LogoutButton() {
  const { logout } = useUserStore();
  return (
    <Button onClick={logout} className="cursor-pointer" variant="outline">
      Logout
    </Button>
  );
}
