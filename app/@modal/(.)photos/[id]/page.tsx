import { Modal } from "./modal";

export function generateStaticParams() {
  let slugs = ["1", "2", "3", "4", "5", "6"];
  return slugs.map((slug) => ({ id: slug }));
}

export default async function PhotoModal(
  props: {
    params: Promise<{ id: string }>;
  }
) {
  const params = await props.params;

  const {
    id: photoId
  } = params;

  return <Modal>{photoId}</Modal>;
}
