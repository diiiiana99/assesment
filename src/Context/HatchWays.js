import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

// To manage Hatch, create a Hatch context.
export const HatchContext = createContext();

export default function HatchContextProvider(props) {
  // set initial state that will hold all the info from api
  const [hatchLoading, setLoading] = useState(null);
  const [hatches, setHatches] = useState([]);

  // initialize API fetch to get all the Hatches
  useEffect(() => {
    setLoading("processing");

    const method = "get",
      url = "https://api.hatchways.io/assessment/students";

    // using axios to request student info from url
    axios({ url, method })
      .then((result) => {
        setHatches(result.data.students);
        setLoading("found");
      })
      .catch((error) => {
        error = new Error();
        setLoading("failed");
      });
  }, []);

  return (
    <HatchContext.Provider value={{ hatchLoading, hatches }}>
      {props.children}
    </HatchContext.Provider>
  );
}