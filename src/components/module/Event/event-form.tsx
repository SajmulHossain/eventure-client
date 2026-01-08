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
import { createEvent } from "@/services/events/create-event";
import { useActionState, useState } from "react";
import { UploadPhoto } from "../RegisterForm/UploadProfilePicture";
import { IEventType, IUser } from "@/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

export const EventForm = ({
  user,
  types,
}: {
  user: IUser;
  types: IEventType[];
}) => {
  const [photo, setPhoto] = useState<File | null>(null);
  const [state, formAction, isPending] = useActionState(
    createEvent.bind(null, photo!),
    null
  );

  if (!state?.success && state?.error?.statusCode && state.message) {
    toast.error(state.message);
  }

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
    <Card>
      <CardHeader>
        <CardTitle>Create Event</CardTitle>
        <CardDescription>
          Enter your event details below to create an event
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction}>
          <input type="hidden" name="host_id" value={user?._id} />
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Name</FieldLabel>
              <Input
                name="name"
                id="name"
                type="text"
                defaultValue={state?.previouseData?.name}
                placeholder="Event Name"
              />
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
                placeholder="Event Description"
              />
              <FieldDescription>
                Enter a brief description of your event
              </FieldDescription>
              {getFieldErrors("description") && (
                <FieldError>{getFieldErrors("description")}</FieldError>
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor="date_and_time">Date and Time</FieldLabel>
              <Input
                name="date_and_time"
                id="date_and_time"
                type="datetime-local"
                defaultValue={state?.previouseData?.date_and_time || new Date().toISOString().slice(0, 16)}
                placeholder="Event Date and Time"
              />
              {getFieldErrors("date_and_time") && (
                <FieldError>{getFieldErrors("date_and_time")}</FieldError>
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor="type">Type</FieldLabel>
              <Select name="type">
                <SelectTrigger>
                  <SelectValue placeholder="Select event type..." />
                </SelectTrigger>
                <SelectContent>
                  {types.map(({ name, _id }) => (
                    <SelectItem key={_id} value={_id as string}>
                      {name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {getFieldErrors("type") && (
                <FieldError>{getFieldErrors("type")}</FieldError>
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor="location">Location</FieldLabel>
              <Input
                name="location"
                defaultValue={state?.previouseData?.location}
                id="location"
                type="text"
                placeholder="Event Location"
              />
              {getFieldErrors("location") && (
                <FieldError>{getFieldErrors("location")}</FieldError>
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor="joinning_fee">Joinning Fee</FieldLabel>
              <Input
                name="joinning_fee"
                id="joinning_fee"
                type="number"
                defaultValue={state?.previouseData?.joinning_fee}
                placeholder="Joinning Fee"
              />
              {getFieldErrors("joinning_fee") && (
                <FieldError>{getFieldErrors("joinning_fee")}</FieldError>
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor="required_participants">
                Required Participants
              </FieldLabel>
              <Input
                defaultValue={state?.previouseData?.required_participants}
                name="required_participants"
                id="required_participants"
                type="number"
                placeholder="Required Participants"
              />
              {getFieldErrors("required_participants") && (
                <FieldError>
                  {getFieldErrors("required_participants")}
                </FieldError>
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor="image_url">Image</FieldLabel>
              <UploadPhoto setPhoto={setPhoto} />
              {getFieldErrors("image_url") && (
                <FieldError>{getFieldErrors("image_url")}</FieldError>
              )}
            </Field>
            <Field>
              <Button disabled={isPending} type="submit">
                {isPending ? "Creating event..." : "Create Event"}
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
};
