import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type FilterMenuType = {
  occasionList: {
    [key: string]: string;
  };
  handleCustomLoadedImages: (imageData: { [key: string]: string }) => void;
  loading: boolean;
};

export default function FilterMenu({
  occasionList,
  handleCustomLoadedImages,
  loading,
}: FilterMenuType) {
  const [selectedOccasions, setSelectedOccasions] = React.useState({});
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchInputValue, setSearchInputValue] = React.useState("");

  // React.useEffect(() => {
  //   console.log(selectedOccasions);
  // }, [selectedOccasions]);

  // React.useEffect(() => {
  //   console.log(occasionList);
  // }, [occasionList]);

  React.useEffect(() => {
    const initialState = Object.keys(occasionList).reduce((acc, occasion) => {
      acc[occasion] = false;
      return acc;
    }, {});
    setSelectedOccasions(initialState);
  }, [occasionList]);

  // React.useEffect(() => {
  //   if (Object.keys(selectedOccasions).length > 0) {
  //     console.log(selectedOccasions);
  //   }
  // }, [selectedOccasions]);

  const sortObjectByValues = (
    obj: { [s: string]: unknown } | ArrayLike<unknown>
  ) => {
    const sortedEntries = Object.entries(obj).sort((a, b) => {
      if (b[1] === a[1]) return 0;
      return b[1] ? -1 : 1;
    });
    return Object.fromEntries(sortedEntries);
  };

  const handleCheckboxChange = (occasion: string) => {
    setSelectedOccasions((prevState) => {
      // Update the state
      const updatedState = {
        ...prevState,
        [occasion]: !prevState[occasion],
      };

      // Sort the updated state
      const sortedState = sortObjectByValues(updatedState);

      return sortedState;
    });
  };

  const setAllCheckboxToFalse = () => {
    const initialState = Object.keys(occasionList).reduce((acc, occasion) => {
      acc[occasion] = false;
      return acc;
    }, {});
    setSelectedOccasions(initialState);
    setSearchTerm("");
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLInputElement>) => {
    const nextSibling = (e.target as HTMLElement).nextSibling;
    if (nextSibling) {
      (nextSibling as HTMLElement).classList.add("text-dark-grayish-red");
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLInputElement>) => {
    const nextSibling = (e.target as HTMLElement).nextSibling;
    if (nextSibling) {
      (nextSibling as HTMLElement).classList.remove("text-dark-grayish-red");
    }
  };

  const occasionListOfObjects = Object.entries(occasionList).map(
    ([key, value], index) => {
      return { [key]: value, originalIndex: index };
    }
  );

  // React.useEffect(() => {
  //   console.log(occasionListOfObjects);
  // }, [occasionListOfObjects]);

  const handleApplyButton = () => {
    const trueValuesObject = Object.entries(selectedOccasions).reduce(
      (accumulator, [key, value]) => {
        if (value === true) {
          accumulator[key] = value;
        }
        return accumulator;
      },
      {}
    );

    handleCustomLoadedImages(trueValuesObject);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(e.target.value);
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchInputValue("");
    setSearchTerm("");
  };

  const filteredAndSortedOccasionListOfObjects = occasionListOfObjects
    .map((occasion, index) => ({ ...occasion, originalIndex: index }))
    .filter((occasion) => {
      const key = Object.keys(occasion)[0];
      const value = Object.values(occasion)[0];

      // If the item has a true value, include it in the filtered list
      if (selectedOccasions[key] === true) {
        return true;
      }

      // If the item has a false value, filter it based on the search term
      if (typeof value === "string") {
        const label = (value as string).toLowerCase();
        return label.includes(searchTerm.toLowerCase());
      }

      return false;
    })
    .sort((a, b) => {
      const aKey = Object.keys(a)[0];
      const bKey = Object.keys(b)[0];
      const aValue = selectedOccasions[aKey];
      const bValue = selectedOccasions[bKey];

      if (aValue === bValue) {
        return a.originalIndex - b.originalIndex;
      }
      return aValue ? -1 : 1;
    })
    .map(({ originalIndex, ...rest }) => rest);

  return (
    <div>
      <div className={`flex flex-wrap`}>
        <div className="w-full">
          <div className="mx-4 flex items-center">
            <input
              type="text"
              value={searchInputValue}
              onChange={handleSearchChange}
              placeholder="Search"
              className="border my-2 block w-full rounded-lg border-black bg-transparent p-2.5 text-sm text-gray-900 focus:border-sea-foam-green focus:ring-sea-foam-green dark:border-gray-600 dark:bg-transparent dark:text-black dark:placeholder-gray-400 dark:focus:border-dark-grayish-red dark:focus:ring-dark-grayish-red"
            />
            {searchInputValue && (
              <button
                onClick={clearSearch}
                className="border ml-2 border-black p-2.5 text-xl hover:!text-sea-foam-green dark:hover:!text-dark-grayish-red"
              >
                <FontAwesomeIcon icon={faX} />
              </button>
            )}
          </div>
        </div>
        {filteredAndSortedOccasionListOfObjects.map((occasion) => {
          return (
            <ul key={Object.keys(occasion)[0]} className="items-center">
              <li className="">
                <div className="flex items-center pl-4">
                  {selectedOccasions.hasOwnProperty(
                    Object.keys(occasion)[0]
                  ) && (
                    <input
                      type="checkbox"
                      value=""
                      checked={selectedOccasions[Object.keys(occasion)[0]]}
                      onChange={() =>
                        handleCheckboxChange(Object.keys(occasion)[0])
                      }
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      className="h-4 w-4 rounded text-sea-foam-green dark:text-red-600"
                    />
                  )}
                  <label
                    className="ml-2 py-2  text-sm text-black hover:!text-sea-foam-green dark:hover:!text-dark-grayish-red"
                    onClick={() =>
                      handleCheckboxChange(Object.keys(occasion)[0])
                    }
                  >
                    {String(Object.values(occasion)[0])}
                  </label>
                </div>
              </li>
            </ul>
          );
        })}
      </div>

      <div className="text-md ml-4 mt-1 flex">
        <div
          className="mr-2 cursor-pointer hover:!text-sea-foam-green dark:hover:!text-dark-grayish-red"
          onClick={handleApplyButton}
        >
          Apply
        </div>
        <div
          className="cursor-pointer hover:!text-sea-foam-green dark:hover:!text-dark-grayish-red"
          onClick={setAllCheckboxToFalse}
        >
          Clear
        </div>
      </div>
    </div>
  );
}
