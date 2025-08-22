import React from 'react';
import  { tableData1, tableData2 } from "../../utils/constants/pricingTableData"
import PricingTable from './PricingTable';

const CoOwnerShipModel = () => {
  return (
    <div id='ownership-model' className="flex flex-col items-center px-4 sm:px-6 lg:px-8 mb-12">
      <p className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl text-center text-[#37584F] font-bold gravesendSans mb-6 sm:mb-12">
        Smart Propery Unit<br />Payment Plan
      </p>
      
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center justify-center w-full max-w-7xl">
        <PricingTable 
          className="w-full lg:max-w-lg xl:max-w-2xl"
          title="01 UNIT OF 50 SQFT AREA"
          tableData={tableData1}
        />
        
        <PricingTable
          className="w-full lg:max-w-lg xl:max-w-2xl"
          title="ROI CALCULATION"
          tableData={tableData2}
        />
      </div>
    </div>
  );
};

export default CoOwnerShipModel;