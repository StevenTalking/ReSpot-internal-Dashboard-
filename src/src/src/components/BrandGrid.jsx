import BrandCard from "./BrandCard";

export default function BrandGrid({ metrics }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {metrics.map((m) => (
        <BrandCard key={m.date} metric={m} />
      ))}
    </div>
  );
}
