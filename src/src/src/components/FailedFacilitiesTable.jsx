export default function FailedFacilitiesTable({ metrics, onSelectFacility }) {
  const rows = metrics.flatMap((m) =>
    m.failed_facility_ids.map((id) => ({
      facilityId: id,
      date: m.date
    }))
  );

  return (
    <div className="bg-gray-900 p-4 rounded">
      <h2 className="text-lg mb-2">Failed Facilities – Last Runs</h2>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-left border-b border-gray-700">
            <th>Facility ID</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.facilityId} className="border-b border-gray-800">
              <td>{r.facilityId}</td>
              <td>{r.date}</td>
              <td>
                <button
                  onClick={() => onSelectFacility(r.facilityId)}
                  className="text-blue-400"
                >
                  View JSON
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
