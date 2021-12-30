class Thing {
  #size = 0;

  get size(): number {
    return this.#size;
  }

  set size(val: string | number | boolean) {
    let num = Number(val);
    if (!Number.isFinite(num)) {
      this.#size = 0;
      return;
    }

    this.#size = num + 10;
  }
}

const v = new Thing();
v.size = 12;
console.log(v.size);
