import { Helpline } from "@/types/types";
import { Metadata } from "next";


export async function generateMetadata({ params: { name } }: { params: { name: string } }): Promise<Metadata> {

  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/helplines`);
    const data: Helpline[] = await response.json();
    
    const decodedName = decodeURIComponent(name);
  
    const helpline = data.find(
      (helpline: any) => helpline.name.replaceAll(" ", "-") === decodedName
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
