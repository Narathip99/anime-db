export default function Footer() {
  return (
    <div>
      <div className="text-center py-4 text-white bg-slate-800">{import.meta.env.VITE_COPYRIGHT}</div>
    </div>
  );
}