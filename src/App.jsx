import { useState } from "react";
import { metrics } from "./data/mockMetrics";
import GlobalHealthBar from "./components/GlobalHealthBar";
import BrandGrid from "./components/BrandGrid";
import FailedFacilitiesTable from "./components/FailedFacilitiesTable";
import FacilityInspector from "./components/FacilityInspector";

export default function App() {
  const [selectedFacility, setSelectedFacility] = useState(null);

  return (
    <div className="p-4 bg-gray-950 text-gray-100 min-h-screen">
      <GlobalHealthBar metrics={metrics} />

      <BrandGrid metrics={metrics} />

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="col-span-2">
          <FailedFacilitiesTable
            metrics={metrics}
            onSelectFacility={setSelectedFacility}
          />
        </div>

        <FacilityInspector facilityId={selectedFacility} />
      </div>
    </div>
  );
}
