import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";
import DummyFormInput from "./components/DummyFormInput.jsx";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCAWNpG0lCx81k1h3L-x-WhLTRXFGzrHkQ",
  authDomain: "companyprofile-4dec1.firebaseapp.com",
  projectId: "companyprofile-4dec1",
  storageBucket: "companyprofile-4dec1.appspot.com",
  messagingSenderId: "819623985084",
  appId: "1:819623985084:web:6b684fabe52ca6513b75b9",
  measurementId: "G-2N722SP6TG"
};

import SEO from "./components/SEO.jsx";

export default function App() {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  return (
    <div className="bg-zinc-200">
      <SEO
        title="Ulfadz Homepage"
        desc="Soil Engineering dari Bandung Indonesia"
        name="Ulfadz Engineering"
        type=""
      ></SEO>
      <Navbar />
      <Hero />
      <DummyFormInput />
      <Footer />
    </div>
  );
}
