import React from "react";

const SelectedPermissionItem = (props) => {
  return props.childPermissions.map((childPermission) =>
  childPermission.isAllowed ? (
    <div key={childPermission.childId} className="selected-permissions-item">
        <p>{childPermission.childPermissionName}</p>
        <div className="selected-permissions-item__remove">
          <button type="button" onClick={event => props.removePermissionHandler(childPermission.childId)}>
            <i className="fa-solid fa-x"></i>
          </button>
        </div>
      </div>
    ) : null
  );
};

export default SelectedPermissionItem;
