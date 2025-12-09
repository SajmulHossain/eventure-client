/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import envConfig from "@/config/env.config";
import { cn } from "@/lib/utils";
import { loginUser } from "@/services/auth/loginUser";
import Link from "next/link";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [state, formAction, isPending] = useActionState(loginUser, null);

  console.log(envConfig.next_public_server_api_url);

    useEffect(() => {
      if (state && !state?.success && state?.message) {
        toast.error(state.message);
      }
    }, [state]);

    console.log(state, "state");

      const getFieldErrors = (fieldName: string) => {
        if (state?.errors) {
          const error = state.errors.find(
            (error: any) => error.field === fieldName
          );

          return error?.message;
        }
      };
  
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input name="email" id="email" type="email" placeholder="m@example.com" />
                {getFieldErrors("email") && (
                  <FieldError>{getFieldErrors("email")}</FieldError>
                )}
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                </div>
                <Input name="password" id="password" type="password" placeholder="*******" />
                {getFieldErrors("password") && (
                  <FieldError className="text-red-600/70">
                    {getFieldErrors("password")}
                  </FieldError>
                )}
              </Field>
              <Field>
                <Button disabled={isPending} type="submit">
                  {isPending ? "Logging in..." : "Login"}
                </Button>
                <Button variant="outline" type="button">
                  Login with Google
                </Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account?{" "}
                  <Link href="/register">Sign up</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
