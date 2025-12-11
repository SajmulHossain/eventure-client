import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";

const RegisterForm = ({ className, ...props }: ComponentProps<"div">) => {
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
          <form>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <Input
                  name="name"
                  id="name"
                  placeholder="John Doe"
                />
                {/* {getFieldErrors("email") && (
                    <FieldError>{getFieldErrors("email")}</FieldError>
                  )} */}
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  name="email"
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                />
                {/* {getFieldErrors("email") && (
                    <FieldError>{getFieldErrors("email")}</FieldError>
                  )} */}
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
                {/* {getFieldErrors("password") && (
                    <FieldError className="text-red-600/70">
                      {getFieldErrors("password")}
                    </FieldError>
                  )} */}
              </Field>
              <Field>
                <Button type="submit">
                  {/* {isPending ? "Logging in..." : "Login"} */}
                  Register
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
};

export default RegisterForm;
