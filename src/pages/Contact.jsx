import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="bg-slate-300 min-h-screen">
        <div className="p-6 mx-auto w-full md:max-w-3xl">
          <form action="/" method="post" className="flex flex-row gap-4">
            <input
              type="text"
              className="input bg-white input-bordered w-full"
              name="name"
              id="name"
              placeholder="Name"
            />
            <input
              type="email"
              className="input bg-white input-bordered w-full"
              name="email"
              id="email"
              placeholder="E-Mail"
            />
          </form>
          <textarea
            placeholder="Type your question here"
            className="textarea textarea-bordered textarea-md w-full mt-4 bg-white"
          ></textarea>
          <button type="submit" className=" btn btn-wide mt-2 text-white">
            Submit
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
