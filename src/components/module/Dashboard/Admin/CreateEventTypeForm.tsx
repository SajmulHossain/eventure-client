"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { Textarea } from "@/components/ui/textarea";
import { createEventType } from "@/services/events/create-event-type";
import { useActionState } from "react";

export const CreateEventTypeForm = () => {
  const [state, formAction, isPending] = useActionState(createEventType, null);

  const getFieldErrors = (fieldName: string) => {
    if (state?.errors) {
      const error = state.errors.find(
        (error: any) => error.field === fieldName
      );

      return error?.message;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Event Type</CardTitle>
        <CardDescription>
          Enter the event type details below to create a new event type
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Name</FieldLabel>
              <Input
                name="name"
                id="name"
                type="text"
                defaultValue={state?.previouseData?.name}
                placeholder="e.g., Programming, Networking, Workshop"
                required
              />
              <FieldDescription>
                Enter a unique name for the event type
              </FieldDescription>
              {getFieldErrors("name") && (
                <FieldError>{getFieldErrors("name")}</FieldError>
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor="description">Description</FieldLabel>
              <Textarea
                name="description"
                id="description"
                defaultValue={state?.previouseData?.description}
                placeholder="Enter a detailed description of the event type"
                required
              />
              <FieldDescription>
                Provide a clear description of what this event type represents
              </FieldDescription>
              {getFieldErrors("description") && (
                <FieldError>{getFieldErrors("description")}</FieldError>
              )}
            </Field>
            <Field>
              <Button disabled={isPending} type="submit">
                {isPending ? "Creating event type..." : "Create Event Type"}
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
};

