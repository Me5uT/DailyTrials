class Human {
  //   yemekYe(a: number) {
  //     console.log(a);
  //   }

  age(a: number, b?: number): void {
    if (b) {
      console.log(`${a + b}`);
    }
    console.log(`${a} `);
  }
}

class Man extends Human {
  age(): void {
    console.log(`${4 * 2}`);
  }
}

const mesut = new Man();
mesut.age();
