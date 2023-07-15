import { useEffect, useState } from "react";

const data = [
  {
    id: 0,
    title: "Civil engineering",
    desc: "Civil engineering is a branch of engineering that deals with the design, construction, and maintenance of infrastructure, including buildings, highways, bridges, water and sewage systems, and other structures.",
    imgurl: "http://placekitten.com/g/1080/1920",
  },
  {
    id: 1,
    title: "Architecture",
    desc: "Architecture defines the design and construction of buildings and other physical structures. It merges aesthetics with functionality, with the goal of creating efficient, safe, and visually appealing spaces for human use.",
    imgurl: "http://placekitten.com/g/1081/1921",
  },
  {
    id: 2,
    title: "Soil Analyze",
    desc: "Soil analysis is a process that examines the chemical, physical and biological composition of soil. This process involves collecting soil samples from different locations, testing them for pH levels, organic matter content, nutrient levels, and the presence of contaminants.",
    imgurl: "http://placekitten.com/g/1082/1922",
  },
];

export default function Hero() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((e) => {
        if (e == 2) {
          return 0;
        }
        return e + 1;
      });
    }, 7000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${data[count].imgurl})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content">
          <div className="flex flex-col max-w-sm">
            <h1 className="mb-5 text-5xl text-white">{data[count].title}</h1>
            <p className="mb-5">{data[count].desc}</p>
          </div>
        </div>
      </div>
    </>
  );
}
