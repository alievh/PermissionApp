import React from "react";
import AllPermissions from "./AllPermissions";
import SelectedPermissions from "./SelectedPermissions";

const Permissions = () => {
  return (
    <section className="permission-section">
      <div className="container-fluid">
        <div className="row">
          <AllPermissions />
          <SelectedPermissions />
        </div>
      </div>
    </section>
  );
};

export default Permissions;
