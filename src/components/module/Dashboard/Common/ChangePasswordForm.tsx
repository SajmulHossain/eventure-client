"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { changePassword } from "@/services/auth/changePassword";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";
import { Eye, EyeOff, Lock, ShieldCheck, ArrowRight, KeyRound } from "lucide-react";
import { cn } from "@/lib/utils";

export const ChangePasswordForm = () => {
  const [state, formAction, isPending] = useActionState(changePassword, null);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [newPasswordValue, setNewPasswordValue] = useState("");

  useEffect(() => {
    if (state?.success) {
      toast.success(state.message || "Password changed successfully");
      setNewPasswordValue("");
      const form = document.querySelector("form");
      if (form) {
        form.reset();
      }
    } else if (state && !state?.success && state?.message) {
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

  return (
    <div className="max-w-md w-full relative">
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-indigo-100/50 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-rose-100/50 rounded-full blur-3xl -z-10" />

      <div className="bg-white rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] border border-slate-100 p-10 relative overflow-hidden">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-slate-200">
            <KeyRound className="text-white w-8 h-8" />
          </div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">
            Secure Your Account
          </h1>
          <p className="text-slate-500 text-sm font-medium">
            Update your password to keep your account safe.
          </p>
        </div>

        <form action={formAction}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="oldPassword">
                Old Password
              </FieldLabel>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors pointer-events-none" />
                <Input
                  id="oldPassword"
                  name="oldPassword"
                  type={showCurrentPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className={cn(
                    "h-14 pl-12 pr-12 rounded-2xl border-slate-100 bg-slate-50/50 focus:bg-white focus:ring-4 focus:ring-indigo-50 transition-all",
                    getFieldErrors("oldPassword") && "border-destructive"
                  )}
                />
                <button
                  type="button"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showCurrentPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
              {getFieldErrors("oldPassword") && (
                <FieldError>{getFieldErrors("oldPassword")}</FieldError>
              )}
            </Field>

            <Field>
              <FieldLabel htmlFor="newPassword">New Password</FieldLabel>
              <div className="relative group">
                <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors pointer-events-none" />
                <Input
                  id="newPassword"
                  name="newPassword"
                  type={showNewPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={newPasswordValue}
                  onChange={(e) => setNewPasswordValue(e.target.value)}
                  className={cn(
                    "h-14 pl-12 pr-12 rounded-2xl border-slate-100 bg-slate-50/50 focus:bg-white focus:ring-4 focus:ring-indigo-50 transition-all",
                    getFieldErrors("newPassword") && "border-destructive"
                  )}
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showNewPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
              {getFieldErrors("newPassword") && (
                <FieldError>{getFieldErrors("newPassword")}</FieldError>
              )}
            </Field>

            <Field>
              <FieldLabel htmlFor="confirmPassword">
                Confirm New Password
              </FieldLabel>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors pointer-events-none" />
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className={cn(
                    "h-14 pl-12 pr-12 rounded-2xl border-slate-100 bg-slate-50/50 focus:bg-white focus:ring-4 focus:ring-indigo-50 transition-all",
                    getFieldErrors("confirmPassword") && "border-destructive"
                  )}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
              {getFieldErrors("confirmPassword") && (
                <FieldError>{getFieldErrors("confirmPassword")}</FieldError>
              )}
            </Field>

            <Field>
              <Button
                type="submit"
                disabled={isPending}
                className="w-full h-14 rounded-2xl bg-slate-900 hover:bg-indigo-600 text-white font-bold text-lg shadow-xl shadow-indigo-100 transition-all group"
              >
                {isPending ? "Updating..." : "Update Password"}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </div>
    </div>
  );
};

