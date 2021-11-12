interface IAddressModel {
  city: string;
  state: string;
  country: string;
}

interface IUserModel {
  name: string;
  address: IAddressModel;
}

const userInfo: IUserModel = {
  name: "Mesut",
  address: {
    city: "istanbul",
    state: "Marmara",
    country: "Turkey",
  },
};

const {
  address: { country },
} = userInfo;

console.log("country", country); // output -> Turkey
