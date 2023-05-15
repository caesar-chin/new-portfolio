import React, { useEffect } from "react";

interface EditProps {
  darkMode: boolean;
}

export default function Edit({ darkMode }: EditProps) {
  const testCookie = async () => {
    await fetch(`${import.meta.env.PUBLIC_API_URL}/test_cookies`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status >= 400) {
          console.log("Log in to GitHub again");
          window.location.href = `${import.meta.env.HOMEPAGE_URL}/dashboard`;
        } else {
          console.log("Authenticated");
        }
      })
      .catch((err) => {
        console.log(err);
        window.location.href = `${import.meta.env.HOMEPAGE_URL}/dashboard`;
      });
  };

  useEffect(() => {
    testCookie();
  }, []);

  return <div>Edit</div>;
}
