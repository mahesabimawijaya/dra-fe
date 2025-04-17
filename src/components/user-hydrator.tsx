"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useUserStore } from "@/store/auth";
import api from "@/service/axios";

const PUBLIC_ROUTES = ["/login", "/register"];

export function UserHydrator() {
  const { setUser } = useUserStore();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (PUBLIC_ROUTES.includes(pathname)) return;

    const fetchUser = async () => {
      try {
        const res = await api.get("/me");
        setUser(res.data);
      } catch {
        router.push("/login");
      }
    };

    fetchUser();
  }, [pathname]);

  return null;
}
