import { Modal } from "./modal";

export async function generateStaticParams() {
  let photos = Array.from({ length: 6 }, (_, i) => i + 1);
  return photos.map((id) => ({ id: String(id) }));
}

export default function PhotoModal({ params: { id: photoId } }: { params: { id: string } }) {
  return <Modal>{photoId}</Modal>;
}
