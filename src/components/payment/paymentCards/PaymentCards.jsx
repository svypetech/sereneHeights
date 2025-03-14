import React from "react";

function PaymentCards({
  heading,
  price,
  body,
  basic,
  mainheading,
  currency,
  keys,
}) {
  return (
    <div className="cursor-pointer rounded-2xl text-center border-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      {/* {
      basic == "true" && (
        <div className="p-2 rounded-t-2xl text-white bg-[#37584F] ">
          {mainheading}
        </div>
      )} */}
      <div
        className={`${
          basic == "true"
            ? "rounded-2xl h-auto lg:h-[400px] xl:h-[370px]"
            : "rounded-2xl borde h-auto lg:h-[400px] xl:h-[370px]"
        } p-2 md:p-4 `}
      >
        <p
          className={`  ${
            keys == "booking"
              ? "py-8 text-xl xs:text-3xl"
              : "py-8 text-xl xs:text-3xl"
          } ${
            basic == "true" ? "text-xl xs:text-3xl" : ""
          }  text-[#37584F]  font-semibold gravesendSans`}
        >
          {heading.split("<br/>").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index !== heading.split("<br/>").length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
        <div className="pb-4">
          {keys !== "installmentplan" &&
            (basic == "true" ? (
              <p className="text-xl font-semibold">{currency}</p>
            ) : (
              <span className="text-xl font-semibold ">from</span>
            ))}
          <span className="">
            <span
              className={`${
                basic == "true" ? "text-6xl py-2" : "text-6xl "
              } helveticaNeue  `}
            >
              {price}
            </span>
            {(keys === "installmentplan" || basic === "true") &&
              (keys === "installmentplan" ? (
                <span className="pl-1 text-lg text-left font-semibold inline-block leading-tight">
                  Months
                  <br />
                  Only
                </span>
              ) : (
                <p className="text-xl font-semibold pt-4">Per sq ft</p>
              ))}
          </span>
          {basic == "false" && (
            <div
              className={`${
                keys == "booking" ? "pt-8 " : "pt-6 "
              } border-b pt-`}
            ></div>
          )}
        </div>
        <div className="text-[#37584F] p-4 text-left text-sm inter">
          {body?.map((line, index) => (
            <p key={index} className="mb-2">
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PaymentCards;
