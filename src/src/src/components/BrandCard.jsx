export default function BrandCard({ metric }) {
  const status =
    metric.success_rate === 100
      ? "green"
      : metric.success_rate > 0
      ? "yellow"
      : "red";

  const color =
    status === "green"
      ? "border-green-500"
      : status === "yellow"
      ? "border-yellow-500"
      : "border-red-500";

  return (
    <div className={`border ${color} p-3 rounded bg-gray-900`}>
      <div className="font-bold">DATE</div>
      <div>{metric.date}</div>

      <div className="mt-2">
        ✔ Success: {metric.successes}
        <br />
        ✖ Failed: {metric.failures}
      </div>

      <div className="mt-2 font-semibold">
        Status: {status.toUpperCase()}
      </div>

      <button className="mt-2 text-sm text-blue-400">
        View Failures
      </button>
    </div>
  );
}


