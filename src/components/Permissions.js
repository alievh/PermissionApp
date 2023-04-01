import React from "react";
import AllPermissions from "./AllPermissions";
import SelectedPermissions from "./SelectedPermissions";

const Permissions = (props) => {
  return (
    <section className="permission-section">
      <div className="container-fluid">
        <div className="row">
          <AllPermissions
            permissions={props.permissions}
            addPermissionHandler={(childId) =>
              props.addPermissionHandler(childId)
            }
            addPermissionWithParentHandler={(childId) =>
              props.addPermissionWithParentHandler(childId)
            }
            removePermissionWithParentHandler={(childId) =>
              props.removePermissionWithParentHandler(childId)
            }
            addAllPermissionsHandler={() => props.addAllPermissionsHandler()}
            removeAllPermissionsHandler={() => props.removeAllPermissionsHandler()}
          />
          <SelectedPermissions
            permissions={props.permissions}
            removePermissionHandler={(childId) =>
              props.removePermissionHandler(childId)
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Permissions;
