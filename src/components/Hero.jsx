import { useEffect, useState } from "react";

const data = [
  {
    id: 0,
    title: "Title1",
    desc: " Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem q uasi. In deleniti eaque aut repudiandae et a id nisi. ",
    imgurl: "http://placekitten.com/g/1080/1920",
  },
  {
    id: 1,
    title: "Title2",
    desc: "essor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of",
    imgurl: "http://placekitten.com/g/1081/1921",
  },
  {
    id: 2,
    title: "Title3",
    desc: " of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bo",
    imgurl: "http://placekitten.com/g/1082/1922",
  },
];

export default function Hero() {
  let i = 0;
  const [count, setCount] = useState(i);
  const [text, setText] = useState();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((e) => {
        if (e == 2) {
          return 0;
        }
        return e + 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content">
          <div className="min-w-sm">
            <h1>{count}</h1>
            <h1 className="mb-5 text-5xl text-white">{data[0].title}</h1>
            <p className="mb-5">{data[1].desc}</p>
          </div>
        </div>
      </div>
    </>
  );
}
