const allUsers = [[1], [2], [3], [4]];

const checkUser = (user: number[]): boolean => {
  const matchedUser = allUsers.includes(user);
  return matchedUser;
};

console.log(checkUser([2])); // always false
