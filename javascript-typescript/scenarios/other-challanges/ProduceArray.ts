const range = (options: {
  from?: number;
  step?: number;
  to: number;
}): number[] => {
  const { from = 0, step = 1, to } = options;

  return Array.from(
    { length: Math.ceil((to - from) / step) },
    (_, i) => i * step + from
  );
};

const r1 = range({ to: 10 });

const r2 = range({ from: 10, to: 20 });

const r3 = range({ from: 10, to: 20, step: 3 });

console.log("r1", r1);
console.log("r2", r2);
console.log("r3", r3);
