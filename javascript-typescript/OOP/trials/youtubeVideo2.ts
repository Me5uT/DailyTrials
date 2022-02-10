class Stopwatch {
  startTime: Date = new Date();
  endTime: Date = new Date();
  duration: number = 0;
  running: boolean = false;

  start = (): void => {
    if (this.running) {
      console.log("Stopwatch has already started");
    }
    this.running = true;
    this.startTime = new Date();
  };

  stop = (): void => {
    if (!this.running) {
      console.log("Stopwatch is not started");
    }

    this.running = false;
    this.endTime = new Date();
    this.duration = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
  };

  getDuration = (): void => {
    console.log("this.duration", this.duration);
  };

  reset = (): void => {
    this.startTime = new Date();
    this.endTime = new Date();
    this.running = false;
    this.duration = 0;
  };
}

const watch = new Stopwatch();
watch.start();

for (let i = 0; i < 5000000; i++) {
  if (i == 4999999) {
    watch.stop();
    watch.getDuration();
  }
}
