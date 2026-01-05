"use client";

import { UsersTable } from "@/components/shared/UsersTable";
import { IUser } from "@/types";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface AdminsPageClientProps {
  admins: IUser[];
}

export const AdminsPageClient = ({ admins }: AdminsPageClientProps) => {
  const router = useRouter();

  const handleEdit = (userId: string) => {
    router.push(`/admin/dashboard/admin/${userId}/edit`);
    toast.info("Redirecting to edit page...");
  };

  const handleDelete = async (userId: string) => {
    if (
      !confirm(
        "Are you sure you want to delete this admin? This action cannot be undone."
      )
    ) {
      return;
    }

    try {
      toast.info("Delete functionality will be implemented with API endpoint");
    } catch (error) {
      console.error("Error deleting admin:", error);
      toast.error("Failed to delete admin");
    }
  };

  return (
    <UsersTable
      users={admins}
      role="ADMIN"
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
};

