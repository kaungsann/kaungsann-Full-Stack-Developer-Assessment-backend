const AGENT_PERMISSIONS = ["getDatas", "getUsers"];
const ADMIN_PERMISSIONS = [
  ...AGENT_PERMISSIONS,
  "manageUsers",
  "manageDatas",
  "createUsers",
];
const SUPERADMIN_PERMISSIONS = [
  ...ADMIN_PERMISSIONS,
  "manageDatas",
  "createProjects",
];
