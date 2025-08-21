const PricingTable = ({ title, tableData, className = "" }) => {
  return (
    <div 
      className={`bg-[#FEFEFB] rounded-[20px] overflow-hidden w-full min-h-[400px] sm:min-h-[500px] lg:h-[600px] xl:h-[600px] ${className}`} 
      style={{boxShadow: '0px 0px 4px 0px #00000040'}}
    >
      {/* Header */}
      <div className="bg-[#37584F] text-white text-center py-3 sm:py-4">
        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold gravesendSans px-2">
          {title}
        </h3>
      </div>
      
      {/* Table Headers */}
      <div className="bg-[#FEFEFB]">
        <div className="flex border-b border-white">
          <div className="w-[60%] px-3 sm:px-6 lg:px-11 py-4 sm:py-6">
            <h4 className="text-[#37584F] text-center font-bold gravesendSans text-sm sm:text-lg md:text-xl lg:text-2xl">
              DESCRIPTION
            </h4>
          </div>
          <div className="w-[40%] px-3 sm:px-6 lg:px-11 py-4 sm:py-6 border-l border-white">
            <h4 className="text-[#37584F] text-center font-bold gravesendSans text-sm sm:text-lg md:text-xl lg:text-2xl">
              PKR
            </h4>
          </div>
        </div>
      </div>
      
      {/* Horizontal divider */}
      <div className="bg-[#FEFEFB] px-3 sm:px-5">
        <div className="border-t border-[#222222] opacity-20"></div>
      </div>
      
      {/* Table Rows */}
      <div className="px-3 sm:px-5 py-4 sm:py-6 flex-1">
        <div className="space-y-2 sm:space-y-0">
          {tableData.map((row, index) => (
            <div 
              key={index} 
              className={`flex border-b-2 sm:border-b-4 border-white ${
                index % 2 === 0 ? 'bg-[#FCFCFC]' : 'bg-[#37584F0D]'
              }`}
            >
              <div className="w-[60%] py-3 sm:py-4 px-3 sm:px-6">
                <p className="text-[#37584F] workSans whitespace-pre-line text-xs sm:text-sm md:text-base leading-relaxed">
                  {row.description}
                </p>
              </div>
              <div className="w-[40%] py-3 sm:py-4 px-3 sm:px-6 border-l-2 sm:border-l-4 border-white">
                <p className="text-[#37584F] font-semibold workSans text-xs sm:text-sm md:text-base break-words">
                  {row.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingTable;