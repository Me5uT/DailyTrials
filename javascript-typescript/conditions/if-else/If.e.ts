const greetin = (time: number) => {
  if (time <= 13) {
    console.log("Good Morning");
  } else if (time > 13 && time <= 17) {
    console.log("Good Afternoon");
  } else {
    console.log("Good Night");
  }
};

const getTime = new Date().getHours();
greetin(getTime);
