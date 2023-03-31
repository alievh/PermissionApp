import React, { useState } from "react";

const AllPermissionParentItem = () => {
  const [active, setActive] = useState(false);

  const dropDownHandler = () => {
    setActive(!active);
  };

  return (
    <li className="all-permissions__parent-item">
      <div>
        <button type="button" onClick={dropDownHandler}>
          {active ? (
            <i class="fa-solid fa-minus"></i>
          ) : (
            <i class="fa-solid fa-plus"></i>
          )}
        </button>
        <input class="form-check-input" id="parent" type="checkbox" />
        <label class="form-check-label" htmlFor="parent">
          Hesabat
        </label>
      </div>
      <ul
        className={
          active
            ? "all-permissions__child-list"
            : "all-permissions__child-list d-none"
        }
      >
        <li>
          <div>
            <input class="form-check-input" id="child" type="checkbox" />
            <label class="form-check-label" htmlFor="child">
              Hesabat
            </label>
          </div>
        </li>
        <li>
          <div>
            <input class="form-check-input" id="child" type="checkbox" />
            <label class="form-check-label" htmlFor="child">
              Hesabat
            </label>
          </div>
        </li>
        <li>
          <div>
            <input class="form-check-input" id="child" type="checkbox" />
            <label class="form-check-label" htmlFor="achildll">
              Hesabat
            </label>
          </div>
        </li>
      </ul>
    </li>
  );
};

export default AllPermissionParentItem;
