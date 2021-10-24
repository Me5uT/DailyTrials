interface IUserModel {
  id: number;
  userName: string;
}

const allUser: IUserModel[] = [
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

const checkUserByUserName = (userName: string): boolean => {
  const matchedUser = allUser.map((user) => user.userName).includes(userName);
  return matchedUser;
};

console.log(checkUserByUserName("MesutC")); // output true
console.log(checkUserByUserName("asdasd")); // output false
