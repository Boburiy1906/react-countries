import React, { useState } from "react";
function Filter({ filterCountry, categories, selectCategories }) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div>
        <div className="container filter-container">
          <form>
            <input
              type="text"
              placeholder="Search for a country..."
              autoComplete="off"
              onChange={(e) => {
                filterCountry(e.target.value);
              }}
            />
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="search-icon"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
          </form>
          <div
            onClick={() => {
              setShow(!show);
            }}
            className="select"
          >
            <span>Filter by region</span>
            {show && (
              <div className="select-categories">
                {categories.map((category) => {
                  return (
                    <span
                      key={category}
                      onClick={() => {
                        selectCategories(category);
                      }}
                      className="select-category"
                    >
                      {category}
                    </span>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
