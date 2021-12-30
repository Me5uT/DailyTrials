interface Container {
  value: number | null | undefined;
}

function multiplyValue(container: Container, factor: number) {
  if (container.value) {
    container.value *= factor;
    console.log(container.value);
  }
}

multiplyValue({ value: 2 }, 5);
