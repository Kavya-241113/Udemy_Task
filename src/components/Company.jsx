import React from "react";
import { companyData } from "./deta";
import "../components/Company.css";


const CompanySection = () => {
  
  const data = companyData?.data?.dynamicWebContent;



  if (!data || !data.contents) {
    return <p>No Data Found</p>;
  }



  return (
    <div className="container-c my-5 text-center">
      <h5>{data.heading}</h5>
      <div className=" company-img d-flex flex-wrap justify-content-center  mt-4 " > 
        
        
        {data.contents.map((item, index) => (
          <img
            key={index}
            src={item.image.url}
            alt={item.image.altText}
            width={100}
            height={80}
            style={{ objectFit: "contain",alignContent:'space-evenly' }}
          />
        ))}
      </div>
    </div>
  );
};

export default CompanySection;
