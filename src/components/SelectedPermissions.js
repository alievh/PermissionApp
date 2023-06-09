import React from "react";
import SelectedPermissionItem from "./SelectedPermissionItem";
import Button from "./UI/Button";

const SelectedPermissions = (props) => {
  return (
    <div className="col-lg-6">
      <div className="selected-permissions">
        <h5 className="selected-permissions__header">Seçilmiş icazələr</h5>
        <div className="selected-permissions__permissions">
          <div className="selected-permissions__permissions-scroll">
            <div>
              {props.permissions.map((permissions) => (
                <SelectedPermissionItem
                  key={permissions.parentId}
                  childPermissions={permissions.childPermissions}
                  removePermissionHandler={(childId) =>
                    props.removePermissionHandler(childId)
                  }
                />
              ))}
            </div>
          </div>
        </div>
        <div className="d-grid gap-2 mt-3">
          <Button className="btn btn-primary btn-block" content="Davam et" />
        </div>
      </div>
    </div>
  );
};

export default SelectedPermissions;
