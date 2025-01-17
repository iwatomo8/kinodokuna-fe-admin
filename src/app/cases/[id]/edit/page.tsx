import CaseEditPageClient from "./CaseEditPageClient";

type Params = Promise<{ id: string }>;

export default async function CaseEditPage({ params }: { params: Params }) {
  const { id } = await params;
  return <CaseEditPageClient id={id} />;
}
