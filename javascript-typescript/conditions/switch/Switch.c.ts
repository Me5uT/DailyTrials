const greeting = (time: number) => {
  switch (true) {
    case time <= 13: {
      console.log("Good Morning");
      break;
    }
    case time > 13 && time <= 17: {
      console.log("Good Afternoon");
      break;
    }
    default: {
      console.log("Good Night");
      break;
    }
  }
};

const getTime = new Date().getHours();

greeting(getTime);
