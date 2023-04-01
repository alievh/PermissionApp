import React, { useEffect, useState } from "react";
import Permissions from "../components/Permissions";

const DUMMY_DATA = [
  {
    parentId: 1,
    parentPermissionName: "Hesabat",
    isAllowed: false,
    childPermissions: [
      {
        childId: 1,
        childPermissionName: "Hesabat1",
        isAllowed: false,
      },
      {
        childId: 2,
        childPermissionName: "Hesabat2",
        isAllowed: false,
      },
      {
        childId: 3,
        childPermissionName: "Hesabat3",
        isAllowed: false,
      },
    ],
  },
  {
    parentId: 2,
    parentPermissionName: "CRM",
    isAllowed: false,

    childPermissions: [
      {
        childId: 4,
        childPermissionName: "CRM1",
        isAllowed: false,
      },
      {
        childId: 5,
        childPermissionName: "CRM2",
        isAllowed: false,
      },
      {
        childId: 6,
        childPermissionName: "CRM3",
        isAllowed: false,
      },
    ],
  },
  {
    parentId: 3,
    parentPermissionName: "Sorğular",
    isAllowed: false,

    childPermissions: [
      {
        childId: 7,
        childPermissionName: "Sorğular1",
        isAllowed: false,
      },
      {
        childId: 8,
        childPermissionName: "Sorğular2",
        isAllowed: false,
      },
      {
        childId: 9,
        childPermissionName: "Sorğular3",
        isAllowed: false,
      },
    ],
  },
  {
    parentId: 4,
    parentPermissionName: "FAQ",
    isAllowed: false,

    childPermissions: [
      {
        childId: 10,
        childPermissionName: "FAQ1",
        isAllowed: false,
      },
      {
        childId: 11,
        childPermissionName: "FAQ2",
        isAllowed: false,
      },
      {
        childId: 12,
        childPermissionName: "FAQ3",
        isAllowed: false,
      },
    ],
  },
  {
    parentId: 5,
    parentPermissionName: "İstifadəçilər",
    isAllowed: false,

    childPermissions: [
      {
        childId: 13,
        childPermissionName: "İstifadəçilər1",
        isAllowed: false,
      },
      {
        childId: 14,
        childPermissionName: "İstifadəçilər2",
        isAllowed: false,
      },
      {
        childId: 15,
        childPermissionName: "İstifadəçilər3",
        isAllowed: false,
      },
    ],
  },
  {
    parentId: 6,
    parentPermissionName: "Qruplar",
    isAllowed: false,

    childPermissions: [
      {
        childId: 16,
        childPermissionName: "İstifadəçilər1",
        isAllowed: false,
      },
      {
        childId: 17,
        childPermissionName: "İstifadəçilər2",
        isAllowed: false,
      },
      {
        childId: 18,
        childPermissionName: "İstifadəçilər3",
        isAllowed: false,
      },
    ],
  },
  {
    parentId: 7,
    parentPermissionName: "Operatorlar",
    isAllowed: false,

    childPermissions: [
      {
        childId: 19,
        childPermissionName: "Operatorlar",
        isAllowed: false,
      },
      {
        childId: 20,
        childPermissionName: "Operatorlar",
        isAllowed: false,
      },
      {
        childId: 21,
        childPermissionName: "Operatorlar",
        isAllowed: false,
      },
    ],
  },
  {
    parentId: 8,
    parentPermissionName: "Növbə dəyişikliyi",
    isAllowed: false,

    childPermissions: [
      {
        childId: 22,
        childPermissionName: "Növbə dəyişikliyi",
        isAllowed: false,
      },
      {
        childId: 23,
        childPermissionName: "Növbə dəyişikliyi",
        isAllowed: false,
      },
      {
        childId: 24,
        childPermissionName: "Növbə dəyişikliyi",
        isAllowed: false,
      },
    ],
  },
  {
    parentId: 9,
    parentPermissionName: "İş saatları",
    isAllowed: false,

    childPermissions: [
      {
        childId: 25,
        childPermissionName: "İş saatları",
        isAllowed: false,
      },
      {
        childId: 26,
        childPermissionName: "İş saatları",
        isAllowed: false,
      },
      {
        childId: 27,
        childPermissionName: "İş saatları",
        isAllowed: false,
      },
    ],
  },
  {
    parentId: 10,
    parentPermissionName: "İcazələr",
    isAllowed: false,

    childPermissions: [
      {
        childId: 28,
        childPermissionName: "İcazələr",
        isAllowed: false,
      },
      {
        childId: 29,
        childPermissionName: "İcazələr",
        isAllowed: false,
      },
      {
        childId: 30,
        childPermissionName: "İcazələr",
        isAllowed: false,
      },
    ],
  },
  {
    parentId: 11,
    parentPermissionName: "Məzuniyyətlər",
    isAllowed: false,
    childPermissions: [
      {
        childId: 31,
        childPermissionName: "Məzuniyyətlər",
        isAllowed: false,
      },
      {
        childId: 32,
        childPermissionName: "Məzuniyyətlər",
        isAllowed: false,
      },
      {
        childId: 33,
        childPermissionName: "Məzuniyyətlər",
        isAllowed: false,
      },
    ],
  },
  {
    parentId: 12,
    parentPermissionName: "Zənglər",
    isAllowed: false,
    childPermissions: [
      {
        childId: 34,
        childPermissionName: "Zənglər",
        isAllowed: false,
      },
      {
        childId: 35,
        childPermissionName: "Zənglər",
        isAllowed: false,
      },
      {
        childId: 36,
        childPermissionName: "Zənglər",
        isAllowed: false,
      },
    ],
  },
];

const Permission = () => {
  const [permissions, setPermissions] = useState(DUMMY_DATA);

  const removePermissionHandler = (id) => {
    let permissions = JSON.parse(localStorage.getItem("permissions"));

    permissions.forEach((permission) => {
      let childPermission = permission.childPermissions.find(
        (x) => x.childId === id
      );

      if (childPermission !== undefined) {
        childPermission.isAllowed = false;
      }

      if(permission.childPermissions.every(x => x.isAllowed === true)){
        permission.isAllowed = true;
      }else {
        permission.isAllowed = false;
      }
    });

    localStorage.setItem("permissions", JSON.stringify(permissions));
    setPermissions(JSON.parse(localStorage.getItem("permissions")));
  };

  const addOrRemovePermissionHandler = (id) => {
    let permissions = JSON.parse(localStorage.getItem("permissions"));

    permissions.forEach((permission) => {
      let childPermission = permission.childPermissions.find(
        (x) => x.childId === id
      );

      if (childPermission !== undefined) {
        childPermission.isAllowed = !childPermission.isAllowed;
      }

      if(permission.childPermissions.every(x => x.isAllowed === true)){
        permission.isAllowed = true;
      }else {
        permission.isAllowed = false;
      }
    });

    localStorage.setItem("permissions", JSON.stringify(permissions));
    setPermissions(JSON.parse(localStorage.getItem("permissions")));
  };

  const addPermissionWithParentHandler = (id) => {
    let permissions = JSON.parse(localStorage.getItem("permissions"));

    let parentPermission = permissions.find((x) => x.parentId === id);

    if (parentPermission !== undefined) {
      parentPermission.childPermissions.forEach((childPermission) => {
        childPermission.isAllowed = true;
      });
    }

    parentPermission.isAllowed = true;

    localStorage.setItem("permissions", JSON.stringify(permissions));
    setPermissions(JSON.parse(localStorage.getItem("permissions")));
  };

  const removePermissionWithParentHandler = (id) => {
    let permissions = JSON.parse(localStorage.getItem("permissions"));

    let parentPermission = permissions.find((x) => x.parentId === id);

    if (parentPermission !== undefined) {
      parentPermission.childPermissions.forEach((childPermission) => {
        childPermission.isAllowed = false;
      });
    }

    parentPermission.isAllowed = false;

    localStorage.setItem("permissions", JSON.stringify(permissions));
    setPermissions(JSON.parse(localStorage.getItem("permissions")));
  };

  const addAllPermissionsHandler = () => {
    let permissions = JSON.parse(localStorage.getItem("permissions"));

    permissions.forEach((permission) => {
      permission.isAllowed = true;

      permission.childPermissions.forEach(childPermission => {
        childPermission.isAllowed = true;
      })
    });

    localStorage.setItem("permissions", JSON.stringify(permissions));
    setPermissions(JSON.parse(localStorage.getItem("permissions")));
  };

  const removeAllPermissionsHandler = () => {
    let permissions = JSON.parse(localStorage.getItem("permissions"));


    permissions.forEach((permission) => {
      permission.isAllowed = false;

      permission.childPermissions.forEach(childPermission => {
        childPermission.isAllowed = false;
      })
    });

    localStorage.setItem("permissions", JSON.stringify(permissions));
    setPermissions(JSON.parse(localStorage.getItem("permissions")));
  };

  useEffect(() => {
    if (localStorage.getItem("permissions") === null) {
      localStorage.setItem("permissions", JSON.stringify(DUMMY_DATA));
    } else {
      setPermissions(JSON.parse(localStorage.getItem("permissions")));
    }
  }, []);

  return (
    <>
      <Permissions
        permissions={permissions}
        addPermissionWithParentHandler={addPermissionWithParentHandler}
        removePermissionWithParentHandler={removePermissionWithParentHandler}
        addPermissionHandler={addOrRemovePermissionHandler}
        removePermissionHandler={removePermissionHandler}
        addAllPermissionsHandler={addAllPermissionsHandler}
        removeAllPermissionsHandler={removeAllPermissionsHandler}
      />
    </>
  );
};

export default Permission;
