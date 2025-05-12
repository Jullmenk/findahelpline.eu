import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function LoadingContainer() {
  return (
    <div className="w-full gap-8  min-h-[70dvh] bg-bg-0 flex justify-center items-center flex-col">
      <Skeleton className="w-def h-8 bg-white rounded-xl " />
      <Skeleton className="w-def h-96 bg-white rounded-xl " />
      <Skeleton className="w-def h-96 bg-white rounded-xl " />
    </div>
  );
}
