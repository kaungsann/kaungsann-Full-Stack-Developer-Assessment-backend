const AGENT_PERMISSIONS = [
  "getDatas",
  "getUsers",
  "getIbets",
  "getThreeSixFives",
];
const ADMIN_PERMISSIONS = [
  ...AGENT_PERMISSIONS,
  "manageUsers",
  "manageDatas",
  "createUsers",
  "manageIbet",
  "manageThreeSixFive",
];
const SUPERADMIN_PERMISSIONS = [
  ...ADMIN_PERMISSIONS,
  "manageDatas",
  "createProjects",
];

const allRoles = {
  agent: AGENT_PERMISSIONS,
  admin: ADMIN_PERMISSIONS,
  superadmin: SUPERADMIN_PERMISSIONS,
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
