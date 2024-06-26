import { withDynamicParams } from "next-static-utils";
import { Modal } from "./modal";

let generateFunc = (): Promise<Record<string, string>[]> => {
  let photos = Array.from({ length: 6 }, (_, i) => i + 1);
  return Promise.resolve(photos.map((id) => ({ id: String(id) })));
};

export const generateStaticParams = withDynamicParams(generateFunc);

export default function PhotoModal({ params: { id: photoId } }: { params: { id: string } }) {
  return <Modal>{photoId}</Modal>;
}
