export async function generateStaticParams() {
  let photos = Array.from({ length: 6 }, (_, i) => i + 1);
  return photos.map((id) => ({ id: String(id) }));
}

export default function PhotoPage({ params: { id } }: { params: { id: string } }) {
  return <div className="card">{id}</div>;
}
