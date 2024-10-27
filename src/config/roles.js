const GUEST_PERMISSIONS = [
  "getNoti",
  "getUsers",
  "getTrades",
  "getChannels",
  "getTradeData",
];
const TRADER_PERMISSIONS = [...GUEST_PERMISSIONS, "viewTradeData"];
const ADMIN_PERMISSIONS = [
  ...TRADER_PERMISSIONS,
  "ManageUser",
  "ManageChannel",
  "ManageTrade",
];

const allRoles = {
  trader: TRADER_PERMISSIONS,
  admin: ADMIN_PERMISSIONS,
  guest: GUEST_PERMISSIONS,
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
