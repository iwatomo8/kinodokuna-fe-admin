import OrganizationEditPageClient from "./OrganizationEditPageClient";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function OrganizationEditPage({ params }: PageProps) {
  const { id } = await params;
  return <OrganizationEditPageClient id={id} />;
}
