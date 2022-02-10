// Singleton Pattern

class Timer {
  seconds: number = 0;
  private static instance: Timer = new Timer();

  private constructor() {}

  static createInstance = () => {
    return Timer.instance;
  };

  setInt(seconds: number, func: () => void) {
    this.seconds = seconds;
    this.interval = setInterval(() => {
      this.seconds -= 1;
      if (this.seconds == 0) {
        func();
        clearInterval(this.interval);
      }
    }, 1000);
  }
  interval: any;

  getSeconds = (): number => {
    return this.seconds;
  };
}

const timer = Timer.createInstance();

timer.setInt(300, () => {
  console.log(`zaman1 bitti`);
});

const timer2 = Timer.createInstance();

console.log("timer2.getSeconds()", timer2.getSeconds());

const timer3 = Timer.createInstance();

console.log("timer3.getSeconds()", timer3.getSeconds());

const timer4 = Timer.createInstance();

console.log("timer4.getSeconds()", timer4.getSeconds());
