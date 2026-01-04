import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  rightContent?: ReactNode;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export const PageHeader = ({
  title,
  description,
  rightContent,
  className,
  titleClassName,
  descriptionClassName,
}: PageHeaderProps) => {
  return (
    <div className={cn("mb-6", className)}>
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <h1
            className={cn(
              "text-3xl font-bold tracking-tight",
              titleClassName
            )}
          >
            {title}
          </h1>
          {description && (
            <p
              className={cn(
                "text-muted-foreground mt-1",
                descriptionClassName
              )}
            >
              {description}
            </p>
          )}
        </div>
        {rightContent && (
          <div className="flex items-center gap-2 shrink-0">
            {rightContent}
          </div>
        )}
      </div>
    </div>
  );
};

