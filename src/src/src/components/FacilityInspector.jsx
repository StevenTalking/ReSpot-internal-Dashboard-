export default function FacilityInspector({ facilityId }) {
  if (!facilityId) {
    return (
      <div className="bg-gray-900 p-4 rounded">
        Select a facility to inspect
      </div>
    );
  }

  const mockJson = {
    facility_id: facilityId,
    status: "failed",
    scraped_at: new Date().toISOString()
  };

  return (
    <div className="bg-gray-900 p-4 rounded">
      <h2 className="text-lg mb-2">Facility Scrape Inspector</h2>
      <pre className="text-xs bg-black p-2 rounded overflow-auto">
        {JSON.stringify(mockJson, null, 2)}
      </pre>
    </div>
  );
}
 