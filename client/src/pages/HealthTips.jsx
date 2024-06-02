import React, { useState, useEffect } from "react";

const HealthTips = () => {
  const [healthInfo, setHealthInfo] = useState(null);

  useEffect(() => {
    // Fetch data
    const fetchData = async () => {
      try {
        const response = await fetch('/healthTipsData.json');
        const data = await response.json();
        setHealthInfo(data);
      } catch (error) {
        console.error('Error fetching health tips data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="card-container flex flex-wrap justify-center gap-4">
        {healthInfo &&
          healthInfo.map((info) => (
            <div key={info.id} className="w-1/2 lg:w-1/3">
              <Card
                tip={info.tip}
                description={info.description}
                image={info.image}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

const Card = ({ tip, description, image }) => {
  return (
    <div className="card flex flex-col justify-center items-center text-center border border-gray-300 bg-slate-600 text-white rounded-lg">
      <img className="w-50 h-32 pt-2 " src={image} alt={tip} />
      <div className="card-content p-4">
        <h2 className="font-extrabold p-1 text-xl">{tip}</h2>
        <p className="font-light">{description}</p>
      </div>
    </div>
  );
};

export default HealthTips;
