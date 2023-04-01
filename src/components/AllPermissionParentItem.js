import React, { useState } from "react";
import AllPermissionChildItem from "./AllPermissionChildItem";

const AllPermissionParentItem = (props) => {
  const [active, setActive] = useState(false);
  const [checked, setChecked] = useState(
    props.childPermissions.every((x) => x.isAllowed === true)
  );

  const dropDownHandler = () => {
    setActive(!active);
  };

  const changeHandler = () => {
    setChecked(!checked);

    if (!props.childPermissions.every((x) => x.isAllowed === true)) {
      props.addPermissionWithParentHandler(props.parentId);
    } else {
      props.removePermissionWithParentHandler(props.parentId);
    }
  };

  return (
    <li className="all-permissions__parent-item">
      <div>
        <button type="button" onClick={dropDownHandler}>
          {active ? (
            <i className="fa-solid fa-minus"></i>
          ) : (
            <i className="fa-solid fa-plus"></i>
          )}
        </button>
        <input
          className="form-check-input"
          id={`parent-${props.parentId}`}
          type="checkbox"
          checked={props.childPermissions.every((x) => x.isAllowed === true)}
          onChange={changeHandler}
        />
        <label
          className="form-check-label"
          htmlFor={`parent-${props.parentId}`}
        >
          {props.parentName}
        </label>
      </div>
      <ul
        className={
          active
            ? "all-permissions__child-list"
            : "all-permissions__child-list d-none"
        }
      >
        {props.childPermissions.map((childPermission) => (
          <AllPermissionChildItem
            key={childPermission.childId}
            childPermission={childPermission}
            addPermissionHandler={(childId) =>
              props.addPermissionHandler(childId)
            }
          />
        ))}
      </ul>
    </li>
  );
};

export default AllPermissionParentItem;
