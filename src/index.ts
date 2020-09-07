import { CustomMap } from "./CustomMap";
import { User } from "./User";
// import { Company } from "./Company";

// Add New User Instance
const user = new User();

// Initialise New Map
const customMap = new CustomMap("map");

// Add User Marker
customMap.addUserMarker(user);
