import React from "react";

type FilterMenuType = {
  occasionList: Array<string>;
};

export default function FilterMenu({ occasionList }: FilterMenuType) {
  React.useEffect(() => {
    console.log(occasionList);
  });

  return (
    <div className="flex flex-wrap">
      {occasionList.map((occasion) => {
        return (
          <ul className="items-center">
            <li className="">
              <div className="flex items-center pl-4">
                <input
                  type="checkbox"
                  value=""
                  className="w-4 h-4 rounded text-red-600"
                />
                <label className="text-lg py-2 ml-2 text-sm text-black">
                  {occasion}
                </label>
              </div>
            </li>
          </ul>
        );
      })}
    </div>
  );
}
