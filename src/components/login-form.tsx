"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { toast } from "sonner";
import api from "@/service/axios";
import { useRouter } from "next/navigation";
import axios from "axios";

export function LoginForm({ className, ...props }: React.ComponentProps<"div">) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        const res = await api.post("/login", values);
        if (res.status === 200) {
          setError("");
          toast.success("Login successful");
          router.push("/");
        }
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          const status = error.response?.status;
          const message = error.response?.data?.message || "An error occurred";

          if (status === 400) {
            setError(message);
          } else {
            toast.error("Something went wrong");
          }
        } else {
          console.error("Unexpected error:", error);
          toast.error("Login failed. Please try again.");
        }
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>Enter your email below to login to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="text" value={formik.values.email} onChange={formik.handleChange} placeholder="johndoe@mail.com" />
                {formik.touched.email && formik.errors.email ? <div className="text-red-500 text-sm">{formik.errors.email}</div> : null}
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" type="password" value={formik.values.password} onChange={formik.handleChange} />
                {formik.touched.password && formik.errors.password ? <div className="text-red-500 text-sm">{formik.errors.password}</div> : null}
              </div>
              <div className="text-red-500 text-sm">{error}</div>
              <div className="flex flex-col gap-3">
                <Button disabled={isLoading} type="submit" className="w-full cursor-pointer">
                  Login
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="/register" className="underline underline-offset-4">
                Sign up
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
