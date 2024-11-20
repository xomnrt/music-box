import Contacts from "./js/sections/Contacts.jsx";
import Hero from "./js/sections/Hero.jsx"
import MobileApp from "./js/sections/Mobile.jsx";
import News from "./js/sections/News.jsx";
import Pricing from "./js/sections/Pricing.jsx";

function App() {

  return (
    <>
      <header></header>
      <main dir="ltr">

        <Hero />
        <Pricing />
        <News />
        <MobileApp />
        <Contacts />

      </main>
    </>
  )
}

export default App;
