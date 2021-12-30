// Extending an interface
interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

// Extending a type
type Animals = {
  name: string;
};

type Bears = Animals & {
  honey: boolean;
};
