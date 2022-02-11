class Address {
  city: string;
  state: string;
  constructor(city: string, state: string) {
    this.city = city;
    this.state = state;
  }
}

class User {
  name: string;
  phone: string = "";
  age: number = 0;
  address: Address = { city: "", state: "" };

  constructor(name: string) {
    this.name = name;
  }
}

class UserBuilder {
  user: User;

  constructor(name: string) {
    this.user = new User(name);
  }

  setPhone = (phone: string) => {
    this.user.phone = phone;
    return this;
  };

  setAge = (age: number) => {
    this.user.age = age;
    return this;
  };

  setAddress = (address: Address) => {
    this.user.address = address;
    return this;
  };

  build = () => {
    return this.user;
  };
}

const user = new UserBuilder("Mesut").setAge(32).build();

console.log("user:", user.name);
