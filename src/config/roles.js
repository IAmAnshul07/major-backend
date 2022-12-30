const allRoles = {
  seller: ['getProduct','manageProduct'],
  farmer: ['getProduct'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
