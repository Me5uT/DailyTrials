function getCount(objects: any[]) {
  return objects.filter((o) => {
    return o.x == o.y;
  }).length;
}

console.log(
  getCount([
    { x: 1, y: 2 },
    { x: 1, y: 2 },
    { x: 1, y: 1 },
  ])
); // output -> 1
