interface IUser {
  id: number;
  name: string;
}

const userArr: IUser[] = [
  {
    id: 1,
    name: "Mesut",
  },
  {
    id: 2,
    name: "Emin",
  },
  {
    id: 3,
    name: "Furkan",
  },
  {
    id: 4,
    name: "Mervan",
  },
  {
    id: 5,
    name: "Gönenç",
  },
];

const findUserNameById = (userId: number): string => {
  const matchedUser = userArr.find((user: IUser) => user.id == userId);

  if (matchedUser != undefined) {
    return `${matchedUser.name}`;
  } else {
    return "Not Found User";
  }
};

findUserNameById(5); // output "Gönenç"
