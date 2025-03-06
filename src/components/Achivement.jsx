import React from "react";
import { achievementData } from "./deta";
import "../components/Achive.css";

const AchievementSection = () => {
  const data = achievementData?.data?.dynamicWebContent;

  if (!data || !data.contents) {
    return <p>No Data Found</p>;
  }

  return (
    <div className="container-A my-5">
      <h2 className="text-start mb-4">{data.heading}</h2>
      <div className="achievement-grid">
        {data.contents.map((item, index) => (
          <div key={index} className="card achievement-card">
            <div className="card-body">
              <h5 className="card-title">{item.labelText}</h5>
              <p className="card-text" dangerouslySetInnerHTML={{ __html: item.description }}></p>
             
              {item.contents &&
                item.contents.map((subItem, subIndex) => (
                  <div key={subIndex} className=" sub-text  " >
                   
                    <img src={subItem.image.url} alt={subItem.heading} className="achievement-img" />
                    <div>
                    <h6>{subItem.heading}</h6>
                    <p dangerouslySetInnerHTML={{ __html: subItem.description }}></p>
                    </div>

                  </div>
                ))}

       <a href={item.contentUrl} className="a-course" >
                <span dangerouslySetInnerHTML={{ __html: item.contentUrlText }} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementSection;