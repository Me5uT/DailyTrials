/// <reference types="@types/google.maps" />

import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
import { User } from "./User";

const API_KEY = "AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU";

const user = new User();
const company = new Company();

console.log("ts working");
console.log(user);
console.log(company);

const customMap = new CustomMap("map");
customMap.addUserMarker(user);
customMap.addCompanyMarker(company);

customMap.addMarker(user);
customMap.addMarker(company);
