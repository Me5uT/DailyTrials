interface IRoleModel {
  user: string;
  admin: string;
  notValid: string;
}

const roles: IRoleModel = {
  user: "hello user",
  admin: "hello admin",
  notValid: "who are you?",
};

const checkRole = (role: keyof IRoleModel) => {
  console.log(roles[role]);

  return roles[role];
};

checkRole("admin");
