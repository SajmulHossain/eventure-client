/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { cn } from "@/lib/utils";
import { registerUser } from "@/services/auth/registerUser";
import Link from "next/link";
import { ComponentProps, useActionState, useEffect, useState } from "react";
import { UploadPhoto } from "./module/RegisterForm/UploadProfilePicture";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

const RegisterForm = ({ className, ...props }: ComponentProps<"div">) => {
  const [photo, setPhoto] = useState<File | null>(null);
  const [state, formAction, isPending] = useActionState(registerUser.bind(null, photo!), null);

      useEffect(() => {
        if (state && !state?.success && state?.message) {
          toast.error(state.message);
        }
      }, [state]);

      const getFieldErrors = (fieldName: string) => {
        if (state?.errors) {
          const error = state.errors.find(
            (error: any) => error.field === fieldName
          );

          return error?.message;
        }
      };

      console.log(state);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Create your account</CardTitle>
          <CardDescription>
            Enter your information below to register
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <Input name="name" id="name" placeholder="John Doe" />
                {getFieldErrors("name") && (
                  <FieldError>{getFieldErrors("name")}</FieldError>
                )}
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  name="email"
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                />
                {getFieldErrors("email") && (
                  <FieldError>{getFieldErrors("email")}</FieldError>
                )}
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                </div>
                <Input
                  name="password"
                  id="password"
                  type="password"
                  placeholder="*******"
                />
                {getFieldErrors("password") && (
                  <FieldError className="text-red-600/70">
                    {getFieldErrors("password")}
                  </FieldError>
                )}
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="location">Location</FieldLabel>
                </div>
                <Input
                  name="location"
                  id="location"
                  placeholder="Chittagong, Bangladesh"
                />
                {getFieldErrors("location") && (
                  <FieldError className="text-red-600/70">
                    {getFieldErrors("location")}
                  </FieldError>
                )}
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="interests">
                    Interest (Comma separated)
                  </FieldLabel>
                </div>
                <Input
                  name="interests"
                  id="interests"
                  placeholder="e.g. Swimming, Programming, Cycling"
                />
                {getFieldErrors("interests") && (
                  <FieldError className="text-red-600/70">
                    {getFieldErrors("interests")}
                  </FieldError>
                )}
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="bio">Bio</FieldLabel>
                </div>
                <Textarea
                  name="bio"
                  placeholder="e.g. I am an entrepreneur"
                  className="h-20"
                />
                {getFieldErrors("bio") && (
                  <FieldError>{getFieldErrors("bio")}</FieldError>
                )}
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="photo">Photo</FieldLabel>
                </div>
                <UploadPhoto setPhoto={setPhoto} />
                {getFieldErrors("profile_photo") && (
                  <FieldError>{getFieldErrors("profile_photo")}</FieldError>
                )}
              </Field>
              <Field>
                <Button type="submit">
                  {isPending ? "In Progress..." : "Register"}
                </Button>
                <Button variant="outline" type="button">
                  Login with Google
                </Button>
                <FieldDescription className="text-center">
                  Already have an account? <Link href="/login">Login</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterForm;
