interface IUserModel {
  id: number;
  userName: string;
}

const allUsers: IUserModel[] = [
  {
    id: 1,
    userName: "Ahmet123",
  },
  {
    id: 2,
    userName: "AyseAs",
  },
  {
    id: 3,
    userName: "FurkanE",
  },
  {
    id: 4,
    userName: "GönençT",
  },
  {
    id: 5,
    userName: "MesutC",
  },
];

const checkUser = (user: IUserModel): boolean => {
  const matchedUser = allUsers.includes(user);
  return matchedUser;
};

console.log(
  checkUser({
    id: 5,
    userName: "MesutC",
  })
);
// output -> false -> give an element, not an object
