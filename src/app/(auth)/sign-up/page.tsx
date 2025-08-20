"use client";

import FormInput from "@/app/ui/components/formElements/form-input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader, Lock, Mail, User } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";
import { useState } from "react";

interface SignUpFormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const signUpSchema = z
  .object({
    fullName: z
      .string()
      .min(3, "Name must be at least 3 characters long")
      .max(15, "Name must be at most 15 characters long"),
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .max(32, "Password must be at most 32 characters long"),
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .max(32, "Password must be at most 32 characters long"),
  })
  .refine(
    (data) => {
      return data.password === data.confirmPassword;
    },
    {
      message: "Password do not match",
      path: ["confirmPassword"],
    }
  );

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });
  const submitData = async (data: SignUpFormData) => {
    setIsLoading(true);
    try {
      console.log("This shouldn't print if passwords don't match!", data);
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call

      toast.success("Account Created 🎉🎉", {
        description: "Welcome to Yuno. Redirecting to dashboard...",
      });

      reset();
    } catch (error) {
      toast.error("Error", {
        description: "something went wrong",
      });
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side on Large screen*/}

      {/* Right Side of sign up */}
      <div className="flex justify-center items-center lg:w-1/2 lg:p-10 w-full border border-r border-slate-900">
        <div className="w-full max-w-md shadow-lg">
          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl font-bold">
                Create Account
              </CardTitle>
              <CardDescription className="mt-2 text-muted-foreground">
                Join Yuno and take control of your finances today
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <form className="space-y-4" onSubmit={handleSubmit(submitData)}>
                <FormInput
                  id="name"
                  type="text"
                  label="Full Name"
                  placeholder="Enter your Full Name"
                  icon={User}
                  required
                  {...register("fullName")}
                  error={errors.fullName?.message}
                />
                <FormInput
                  id="email"
                  type="email"
                  label="Email Address"
                  placeholder="Enter your Email Address"
                  icon={Mail}
                  required
                  {...register("email")}
                  error={errors.email?.message}
                />
                <FormInput
                  id="password"
                  type="password"
                  label="Password"
                  placeholder="Enter your Password"
                  icon={Lock}
                  required
                  {...register("password")}
                  error={errors.password?.message}
                />
                <FormInput
                  id="confirmPassword"
                  type="password"
                  label="Confirm Password"
                  placeholder="Confirm your Password"
                  icon={Lock}
                  required
                  {...register("confirmPassword")}
                  error={errors.confirmPassword?.message}
                />

                <div className="">
                  <Button
                    className="w-full py-2 font-medium text-white border-0 hover:cursor-pointer bg-gradient-to-r from-indigo-500 to-violet-500 hover:opacity-90"
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader className="w-4 h-4 mr-2 animate-spin" />
                        Creating Account ....
                      </>
                    ) : (
                      <>
                        <span>Create Account</span>
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
