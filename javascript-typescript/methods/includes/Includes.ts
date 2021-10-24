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

const checkUserById = (userId: number): boolean => {
  const matchedUser = allUser.map((user) => user.id).includes(userId); // includes(element,start)
  return matchedUser;
};

console.log(checkUserById(8)); // output false
console.log(checkUserById(2)); // output true
