import { CustomMap } from "./CustomMap";
import { User } from "./User";
import { Company } from "./Company";

// New user/company/map instances
const user = new User();
const company = new Company();
const customMap = new CustomMap("map");

// Add markers
customMap.addMarker(user);
customMap.addMarker(company);
