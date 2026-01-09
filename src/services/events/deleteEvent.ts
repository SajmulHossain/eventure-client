import { serverFetch } from "@/lib/server-fetch";

export default async function (id: string) {
  try {
    const result = await serverFetch
      .delete("/events/" + id, {
        body: JSON.stringify({}),
      })
      .then((res) => res.json());

    return result;
  } catch (error: any) {
    if (error?.digest?.startsWith("NEXT_REDIRECT")) {
      throw error;
    }
    console.log(error);
    return {
      success: false,
      error,
      message:
        process.env.NODE_ENV === "development"
          ? error?.message
          : "Login Failed",
    };
  }
}
