import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type PhotoDetailsType = {
  details: any;
  selectedList: any;
  showEdit: boolean;
  setShowEdit: any;
  handleDetailInputChange: any;
};

export default function PhotoDetails({
  details,
  selectedList,
  showEdit,
  setShowEdit,
  handleDetailInputChange,
}: PhotoDetailsType) {
  const [editValues, setEditValues] = React.useState<any>(details);

  React.useEffect(() => {
    if (
      !(Object.keys(details).length === 0 && details.constructor === Object)
    ) {
      setEditValues(details);
    }
  }, [details]);

  const handleEditValues = (new_value: string, key: string) => {
    setEditValues((prevValues) => {
      return {
        ...prevValues,
        [key]: new_value,
      };
    });
  };

  React.useEffect(() => {
    console.log(details);
  }, [details]);

  return (
    <div>
      <div className="w-80">
        <img
          src={details["webp_url"]}
          alt={details["caption"]}
          className="h-full w-full"
        />
      </div>

      {!showEdit ? (
        <div>
          <div>Caption: {details["caption"]}</div>
          <div>Date: {details["date"]}</div>
          {/* <div>{details["url"]}</div> */}
          {selectedList.type === "concert" ? (
            <div>
              <div>Artist: {details["artist"]}</div>
              <div>Venue: {details["venue"]}</div>
            </div>
          ) : (
            <div>Place: {details["venue"]}</div>
          )}
        </div>
      ) : (
        <div>
          <div>
            <div className="flex flex-row items-center justify-between gap-4">
              Caption:
              <input
                className="border mb-1 mr-2 border-gray-500 bg-transparent text-lg"
                type="text"
                value={editValues["caption"]}
                onChange={(event) =>
                  handleEditValues(event.target.value, "caption")
                }
              />
            </div>
            <div className="flex flex-row items-center justify-between gap-4">
              Date:
              <input
                className="border mb-1 mr-2 border-gray-500 bg-transparent text-lg"
                type="text"
                value={editValues["date"]}
                onChange={(event) =>
                  handleEditValues(event.target.value, "date")
                }
              />
            </div>

            {selectedList.type === "concert" && (
              <div>
                <div className="flex flex-row items-center justify-between gap-4">
                  Artist:
                  <input
                    className="border mb-1 mr-2 border-gray-500 bg-transparent text-lg"
                    type="text"
                    value={editValues["artist"]}
                    onChange={(event) =>
                      handleEditValues(event.target.value, "artist")
                    }
                  />
                </div>
              </div>
            )}

            <div className="flex flex-row items-center justify-between gap-4">
              Place:
              <input
                className="border mb-1 mr-2 border-gray-500 bg-transparent text-lg"
                type="text"
                value={editValues["venue"]}
                onChange={(event) =>
                  handleEditValues(event.target.value, "venue")
                }
              />
            </div>

            <div className="mt-4">
              <FontAwesomeIcon
                icon={faCheck}
                className="mr-4 cursor-pointer text-xl hover:text-sea-foam-green dark:hover:text-dark-grayish-red"
                onClick={() =>
                  handleDetailInputChange(
                    editValues["artist"],
                    editValues["caption"],
                    editValues["date"],
                    editValues["venue"]
                  )
                }
              />

              <FontAwesomeIcon
                icon={faX}
                className="cursor-pointer text-xl hover:text-sea-foam-green dark:hover:text-dark-grayish-red"
                onClick={() => setShowEdit(false)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
