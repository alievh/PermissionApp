import React from "react";

const AllPermissionChildItem = (props) => {
  return (
    <li>
      <div>
        <input
          className="form-check-input"
          id={`child-${props.childPermission.childId}`}
          type="checkbox"
          checked={props.childPermission.isAllowed}
          onChange={() => props.addPermissionHandler(props.childPermission.childId)}
        />
        <label
          className="form-check-label"
          htmlFor={`child-${props.childPermission.childId}`}
        >
          {props.childPermission.childPermissionName}
        </label>
      </div>
    </li>
  );
};

export default AllPermissionChildItem;
