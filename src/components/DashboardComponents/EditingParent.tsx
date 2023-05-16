import React from "react";

export default function EditingParent() {
  const [concertObject, setConcertObject] = React.useState({});
  const [streetlandscapeObject, setStreetlandscapeObject] = React.useState({});
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    const BASE_URL = "https://caesar-chin-photography.s3.amazonaws.com";
    // Fetches concert JSON
    const fetchData = async () => {
      await fetch(`${BASE_URL}/concert/index.json`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setConcertObject(data);
        })
        .catch((err) => console.log(err));

      // Fetches streetlandscape JSON
      await fetch(`${BASE_URL}/streetlandscape/index.json`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setStreetlandscapeObject(data);
        })
        .catch((err) => console.log(err));
    };

    fetchData().then(() => {
      setIsLoaded(true);
    });
  }, []);

  if (!isLoaded) return <div>Loading...</div>;

  return <div>EditingParent</div>;
}
