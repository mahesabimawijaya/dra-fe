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

export function RegisterForm({ className, ...props }: React.ComponentProps<"div">) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      phone: Yup.string().required("Phone number is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string().min(6, "Password minimum length is 6").required("Password is required"),
    }),
    onSubmit: async (values) => {
      console.log(values);
      setIsLoading(true);
      try {
        const res = await api.post("/register", values);
        if (res.status === 201) {
          setError("");
          console.log(res.data);
          toast.success("Sign Up successful");
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
          <CardTitle className="text-2xl">Register</CardTitle>
          <CardDescription>Enter your data below to create your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="name" value={formik.values.name} onChange={formik.handleChange} placeholder="John Doe" />
                {formik.touched.name && formik.errors.name ? <div className="text-red-500 text-sm">{formik.errors.name}</div> : null}
              </div>
              <div className="grid gap-3">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="phone" value={formik.values.phone} onChange={formik.handleChange} placeholder="628xxxxxxxxxx" />
                {formik.touched.phone && formik.errors.phone ? <div className="text-red-500 text-sm">{formik.errors.phone}</div> : null}
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={formik.values.email} onChange={formik.handleChange} placeholder="johndoe@mail.com" />
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
                  Register
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <a href="/login" className="underline underline-offset-4">
                Sign in
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
