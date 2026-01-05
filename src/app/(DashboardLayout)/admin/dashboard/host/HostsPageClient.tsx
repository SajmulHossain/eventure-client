"use client";

import { UsersTable } from "@/components/shared/UsersTable";
import { IUser } from "@/types";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface HostsPageClientProps {
  hosts: IUser[];
}

export const HostsPageClient = ({ hosts }: HostsPageClientProps) => {
  const router = useRouter();

  const handleEdit = (userId: string) => {
    router.push(`/admin/dashboard/host/${userId}/edit`);
    toast.info("Redirecting to edit page...");
  };

  const handleDelete = async (userId: string) => {
    if (
      !confirm(
        "Are you sure you want to delete this host? This action cannot be undone."
      )
    ) {
      return;
    }

    try {
      toast.info("Delete functionality will be implemented with API endpoint");
    } catch (error) {
      console.error("Error deleting host:", error);
      toast.error("Failed to delete host");
    }
  };

  return (
    <UsersTable
      users={hosts}
      role="HOST"
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
};

