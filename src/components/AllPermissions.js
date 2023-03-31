import React from "react";
import AllPermissionParentItem from "./AllPermissionParentItem";

const AllPermissions = () => {
  return (
    <div className="col-lg-6">
      <div className="all-permissions">
        <h5 className="all-permissions__header">Bütün icazələr</h5>
        <div className="all-permissions__permissions">
          <div className="all-permissions__all">
            <input class="form-check-input" id="all" type="checkbox" />
            <label class="form-check-label" htmlFor="all">
              ALL
            </label>
          </div>
          <ul className="all-permissions__parrent-list">
            <AllPermissionParentItem />
            <AllPermissionParentItem />
            <AllPermissionParentItem />
            <AllPermissionParentItem />
            <AllPermissionParentItem />
            <AllPermissionParentItem />
            <AllPermissionParentItem />
            <AllPermissionParentItem />
            <AllPermissionParentItem />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AllPermissions;
