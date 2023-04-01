import React, { useState } from "react";
import AllPermissionParentItem from "./AllPermissionParentItem";

const AllPermissions = (props) => {
  const [checked, setChecked] = useState(props.permissions.every(x => x.isAllowed === true));

  const changeHandler = () => {
    setChecked(!checked);

    if (!props.permissions.every((x) => x.isAllowed === true)) {
      props.addAllPermissionsHandler();
    } else {
      props.removeAllPermissionsHandler();
    }
  };

  return (
    <div className="col-lg-6">
      <div className="all-permissions">
        <h5 className="all-permissions__header">Bütün icazələr</h5>
        <div className="all-permissions__permissions">
          <div className="all-permissions__all">
            <input
              className="form-check-input"
              id="all"
              type="checkbox"
              onChange={changeHandler}
              checked={props.permissions.every(x => x.isAllowed === true)}
            />
            <label className="form-check-label" htmlFor="all">
              ALL
            </label>
          </div>
          <ul className="all-permissions__parrent-list">
            {props.permissions.map((permission) => (
              <AllPermissionParentItem
                key={permission.parentId}
                parentId={permission.parentId}
                parentisAllowed={permission.isAllowed}
                parentName={permission.parentPermissionName}
                childPermissions={permission.childPermissions}
                addPermissionHandler={(childId) =>
                  props.addPermissionHandler(childId)
                }
                addPermissionWithParentHandler={(parentId) =>
                  props.addPermissionWithParentHandler(parentId)
                }
                removePermissionWithParentHandler={(parentId) =>
                  props.removePermissionWithParentHandler(parentId)
                }
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AllPermissions;
