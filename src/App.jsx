import { useEffect, useState } from "react";
import { Context } from "./context";
import Countries from "./components/Countries";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(countries);

  useEffect(() => {
    async function fetchCountries() {
      try {
        const responce = await fetch("https://restcountries.com/v3.1/all");

        if (!responce.ok) throw new Error("Network response was not ok");

        const data = await responce.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchCountries();
  }, []);

  return (
    <>
      <Context.Provider value={countries}>
        {loading && <p>LOADING...</p>}
        <Countries />
      </Context.Provider>
    </>
  );
}

export default App;
