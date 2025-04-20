"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useUserStore } from "@/store/auth";
import api from "@/service/axios";

const PROTECTED_ROUTES = ["/anjay"];

export function UserHydrator() {
  const { setUser, setLoading } = useUserStore();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const res = await api.get("/me");
        setUser(res.data);
      } catch {
        if (PROTECTED_ROUTES.includes(pathname)) {
          router.push("/login");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [pathname]);

  return null;
}
