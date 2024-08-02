import { useContext } from "react";
import { Context } from "../context";

const Countries = () => {
  const countries = useContext(Context);

  return (
    <div className="countries">
      {countries.map((country) => (
        <div
          key={country.cca3}
          style={{
            border: "solid",
            padding: "12px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100px",
            width: "150px",
          }}
        >
          <img
            src={country.flags.png}
            alt={`${country.name.common} flag`}
            width="50"
          />
          <p style={{ maxWidth: "100px", textAlign: "center" }}>
            {country.name.common}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Countries;
