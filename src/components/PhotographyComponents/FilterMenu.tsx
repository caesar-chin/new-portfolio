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

  const handleCheckboxChange = (occasion: string) => {
    setSelectedOccasions((prevState) => ({
      ...prevState,
      [occasion]: !prevState[occasion],
    }));
  };

  const setAllCheckboxToFalse = () => {
    const initialState = Object.keys(occasionList).reduce((acc, occasion) => {
      acc[occasion] = false;
      return acc;
    }, {});
    setSelectedOccasions(initialState);
  };

  const handleMouseEnter = (e) => {
    e.target.nextSibling.classList.add("text-dark-grayish-red");
  };

  const handleMouseLeave = (e) => {
    e.target.nextSibling.classList.remove("text-dark-grayish-red");
  };

  const occasionListOfObjects = Object.entries(occasionList).map(
    ([key, value]) => {
      return { [key]: value };
    }
  );

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

  return (
    <div>
      <div className={`flex flex-wrap`}>
        {occasionListOfObjects.map((occasion) => {
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
                      className="w-4 h-4 rounded text-red-600"
                    />
                  )}
                  <label
                    className="text-lg py-2 ml-2 text-sm text-black dark:hover:!text-dark-grayish-red hover:!text-sea-foam-green"
                    onClick={() =>
                      handleCheckboxChange(Object.keys(occasion)[0])
                    }
                  >
                    {Object.values(occasion)[0]}
                  </label>
                </div>
              </li>
            </ul>
          );
        })}
      </div>

      <div className="flex ml-4 mt-1 text-md">
        <div
          className="dark:hover:!text-dark-grayish-red hover:!text-sea-foam-green cursor-pointer mr-2"
          onClick={handleApplyButton}
        >
          Apply
        </div>
        <div
          className="dark:hover:!text-dark-grayish-red hover:!text-sea-foam-green cursor-pointer"
          onClick={setAllCheckboxToFalse}
        >
          Clear
        </div>
      </div>
    </div>
  );
}
