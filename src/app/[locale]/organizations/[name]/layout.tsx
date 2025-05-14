import { prismaL } from "@/lib/prisma";
import { Helpline } from "@/types/types";
import { Metadata } from "next";


export async function generateMetadata({ params: { name } }: { params: { name: string } }): Promise<Metadata> {

  const decodedName = decodeURIComponent(name);

  const helplines = await prismaL.helpline.findMany();

  const helpline = helplines.find(h =>
    h.name.replaceAll(" ", "-").toLowerCase() === decodedName.toLowerCase()
  );
  
  return {
    title: helpline?.name,
    description: helpline?.specializations?.join(", ") || "",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
