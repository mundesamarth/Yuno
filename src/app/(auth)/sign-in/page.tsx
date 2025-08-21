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
import { Loader, Lock, Mail } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getSession, signIn } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface SignInFormData {
  email: string;
  password: string;
}

const signInSchema = z.object({
  email: z.string().email("Invalid email address "),
  password: z
    .string()
    .min(8, "Password must be atleast 8 character long")
    .max(32, "Password must be less than 32 character"),
});

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });
  const router = useRouter();
  const submitData = async (data: SignInFormData) => {
    setIsLoading(true);
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });
      if (res?.error) {
        toast.error("Invalid email or password");
      } else {
        const session = await getSession();
        const firstName = session?.user?.name?.split(" ")[0] || "User";
        toast.success(`🎊 Welcome Back, ${firstName}`);
        reset();
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side */}
      <div className="hidden lg:block lg:w-1/2 bg-gradient-to-tr from-indigo-500 to-violet-500 ">
        <h1>YUNO</h1>
      </div>
      {/* Right Side */}
      <div className="flex justify-center items-center lg:w-1/2 lg:p-10 w-full border border-r border-slate-900 bg-[#fafbfc]">
        <div className="w-full max-w-md shadow-lg  border-slate-500">
          <Card>
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl font-bold "> Sign In</CardTitle>
              <CardDescription className="text-base text-muted-foreground mt-2">
                Welcome back! Please sign in to your account.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit(submitData)}>
                <FormInput
                  id="email"
                  label="Email Address"
                  placeholder="Enter your Registered Email"
                  type="email"
                  icon={Mail}
                  required
                  {...register("email")}
                  error={errors.email?.message}
                />
                <FormInput
                  id="password"
                  label=" Password"
                  placeholder="Enter your password"
                  type="password"
                  icon={Lock}
                  required
                  {...register("password")}
                  error={errors.password?.message}
                />
                <div>
                  <Button
                    className="w-full mt-3 bg-gradient-to-tr from-indigo-500 to-violet-500 text-white hover:cursor-pointer hover:opacity-90"
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader className="w-4 h-4 mr-2 animate-spin" />
                        Signing in ....
                      </>
                    ) : (
                      <span>Sign In</span>
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
