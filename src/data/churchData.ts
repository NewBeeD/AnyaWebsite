// Church data for Dominica and Barbados
// Comprehensive list of SDA churches with accurate GPS coordinates

export interface Church {
  id: number;
  name: string;
  pastor: string;
  address: string;
  phone: string;
  email: string;
  country: string;
  region: string;
  coordinates: { lat: number; lng: number };
  services: { sabbath: string; prayer: string };
  type: string;
}

export const churchData: Church[] = [
  // ============= DOMINICA =============
  // Southern Region
  {
    id: 1,
    name: "Roseau SDA Church",
    pastor: "Pastor Maria John",
    address: "6 Federation Dr, Roseau, Dominica",
    phone: "+1 (767) 448-2001",
    email: "roseausda@anyadominica.org",
    country: "dominica",
    region: "south",
    coordinates: { lat: 15.301711, lng: -61.3884451 },
    services: { sabbath: "Saturday 9:00 AM & 11:00 AM", prayer: "Wednesday 7:00 PM" },
    type: "church"
  },
  {
    id: 2,
    name: "Bethel SDA Church",
    pastor: "Pastor Samuel Charles",
    address: "Goodwill, Roseau, Dominica",
    phone: "+1 (767) 448-2002",
    email: "bethelsda@anyadominica.org",
    country: "dominica",
    region: "south",
    coordinates: { lat: 15.337551, lng: -61.3892283 },
    services: { sabbath: "Saturday 9:30 AM", prayer: "Tuesday 7:00 PM" },
    type: "church"
  },
  {
    id: 3,
    name: "Grand Bay SDA Church",
    pastor: "Pastor Sarah Matthew",
    address: "Berekua, Grand Bay, Dominica",
    phone: "+1 (767) 446-1001",
    email: "grandbaysda@anyadominica.org",
    country: "dominica",
    region: "south",
    coordinates: { lat: 15.2450638, lng: -61.3181049 },
    services: { sabbath: "Saturday 8:30 AM", prayer: "Wednesday 6:00 PM" },
    type: "church"
  },
  {
    id: 4,
    name: "Lily Valley SDA Church",
    pastor: "Pastor Daniel Roberts",
    address: "Lily Valley, Dominica",
    phone: "+1 (767) 448-2003",
    email: "lilyvalleysda@anyadominica.org",
    country: "dominica",
    region: "south",
    coordinates: { lat: 15.3216716, lng: -61.3476796 },
    services: { sabbath: "Saturday 9:00 AM", prayer: "Thursday 6:30 PM" },
    type: "church"
  },
  {
    id: 5,
    name: "ECC Dominica Office",
    pastor: "Conference Administration",
    address: "Great George St, Roseau, Dominica",
    phone: "+1 (767) 448-2400",
    email: "office@anyadominica.org",
    country: "dominica",
    region: "south",
    coordinates: { lat: 15.2994431, lng: -61.3879602 },
    services: { sabbath: "Contact for details", prayer: "Contact for details" },
    type: "office"
  },

  // Northern Region
  {
    id: 6,
    name: "Glanvillia SDA Church",
    pastor: "Pastor Michael Laurent",
    address: "Portsmouth, Dominica",
    phone: "+1 (767) 445-1001",
    email: "glanvilliasda@anyadominica.org",
    country: "dominica",
    region: "north",
    coordinates: { lat: 15.5665152, lng: -61.4557243 },
    services: { sabbath: "Saturday 9:30 AM", prayer: "Wednesday 7:00 PM" },
    type: "church"
  },
  {
    id: 7,
    name: "Bourne SDA Church",
    pastor: "Pastor David Thomas",
    address: "Main Road, Portsmouth, Dominica",
    phone: "+1 (767) 445-1002",
    email: "bournesda@anyadominica.org",
    country: "dominica",
    region: "north",
    coordinates: { lat: 15.5779919, lng: -61.42069 },
    services: { sabbath: "Saturday 9:00 AM", prayer: "Tuesday 7:00 PM" },
    type: "church"
  },
  {
    id: 8,
    name: "Antioch SDA Church",
    pastor: "Pastor James Pascal",
    address: "Savanne Paille Guillete, Dominica",
    phone: "+1 (767) 445-1003",
    email: "antiochsda@anyadominica.org",
    country: "dominica",
    region: "north",
    coordinates: { lat: 15.5562268, lng: -61.4581085 },
    services: { sabbath: "Saturday 10:00 AM", prayer: "Thursday 6:30 PM" },
    type: "church"
  },
  {
    id: 9,
    name: "Wesley SDA Church",
    pastor: "Pastor Lisa Williams",
    address: "Wesley, Dominica",
    phone: "+1 (767) 445-1004",
    email: "wesleysda@anyadominica.org",
    country: "dominica",
    region: "north",
    coordinates: { lat: 15.5720, lng: -61.3080 },
    services: { sabbath: "Saturday 9:00 AM", prayer: "Wednesday 6:30 PM" },
    type: "church"
  },
  {
    id: 10,
    name: "Beryl SDA Church",
    pastor: "Pastor Mark Green",
    address: "Gommier Road, Vieille Case, Dominica",
    phone: "+1 (767) 445-1005",
    email: "berylsda@anyadominica.org",
    country: "dominica",
    region: "north",
    coordinates: { lat: 15.6065004, lng: -61.401627 },
    services: { sabbath: "Saturday 8:30 AM", prayer: "Tuesday 6:00 PM" },
    type: "church"
  },
  {
    id: 11,
    name: "Calibishie SDA Church",
    pastor: "Pastor Rachel Joseph",
    address: "Calibishie, Dominica",
    phone: "+1 (767) 445-1006",
    email: "calibishiesda@anyadominica.org",
    country: "dominica",
    region: "north",
    coordinates: { lat: 15.5928, lng: -61.3419 },
    services: { sabbath: "Saturday 9:30 AM", prayer: "Thursday 7:00 PM" },
    type: "church"
  },

  // Eastern Region
  {
    id: 12,
    name: "Marigot SDA Church",
    pastor: "Pastor Peter Henderson",
    address: "Dr Nicholas Liverpool Hwy, Marigot, Dominica",
    phone: "+1 (767) 447-1001",
    email: "marigotsda@anyadominica.org",
    country: "dominica",
    region: "east",
    coordinates: { lat: 15.5408748, lng: -61.283412 },
    services: { sabbath: "Saturday 9:30 AM", prayer: "Wednesday 7:00 PM" },
    type: "church"
  },
  {
    id: 13,
    name: "Boetica SDA Church",
    pastor: "Pastor Angela Frederick",
    address: "Boetica, Dominica",
    phone: "+1 (767) 447-1002",
    email: "boeticasda@anyadominica.org",
    country: "dominica",
    region: "east",
    coordinates: { lat: 15.3064951, lng: -61.2528182 },
    services: { sabbath: "Saturday 8:00 AM", prayer: "Thursday 6:00 PM" },
    type: "church"
  },
  {
    id: 14,
    name: "Castle Bruce SDA Church",
    pastor: "Pastor John Baptiste",
    address: "Castle Bruce, Dominica",
    phone: "+1 (767) 447-1003",
    email: "castlebrucesda@anyadominica.org",
    country: "dominica",
    region: "east",
    coordinates: { lat: 15.4376, lng: -61.2636 },
    services: { sabbath: "Saturday 9:00 AM", prayer: "Tuesday 6:30 PM" },
    type: "church"
  },
  {
    id: 15,
    name: "Rosalie SDA Church",
    pastor: "Pastor Grace Paul",
    address: "Rosalie Village, Dominica",
    phone: "+1 (767) 447-1004",
    email: "rosaliesda@anyadominica.org",
    country: "dominica",
    region: "east",
    coordinates: { lat: 15.3667, lng: -61.2667 },
    services: { sabbath: "Saturday 10:00 AM", prayer: "Wednesday 7:00 PM" },
    type: "church"
  },

  // Central Region
  {
    id: 16,
    name: "St. Joseph SDA Church",
    pastor: "Pastor William Lambert",
    address: "St Joseph, Dominica",
    phone: "+1 (767) 449-1001",
    email: "stjosephsda@anyadominica.org",
    country: "dominica",
    region: "central",
    coordinates: { lat: 15.4060805, lng: -61.4235185 },
    services: { sabbath: "Saturday 9:00 AM", prayer: "Wednesday 6:30 PM" },
    type: "church"
  },
  {
    id: 17,
    name: "Calvary SDA Church",
    pastor: "Pastor Mary Francis",
    address: "Pottersville, Dominica",
    phone: "+1 (767) 449-1002",
    email: "calvarysda@anyadominica.org",
    country: "dominica",
    region: "central",
    coordinates: { lat: 15.4876991, lng: -61.4578199 },
    services: { sabbath: "Saturday 9:30 AM", prayer: "Tuesday 7:00 PM" },
    type: "church"
  },
  {
    id: 18,
    name: "Morne Prosper SDA Church",
    pastor: "Pastor Richard Joseph",
    address: "Morne Prosper, Dominica",
    phone: "+1 (767) 449-1003",
    email: "morneprosper@anyadominica.org",
    country: "dominica",
    region: "central",
    coordinates: { lat: 15.3500, lng: -61.3667 },
    services: { sabbath: "Saturday 10:00 AM", prayer: "Thursday 6:30 PM" },
    type: "church"
  },

  // Western Region
  {
    id: 19,
    name: "Layou SDA Church",
    pastor: "Pastor Anthony Edward",
    address: "Layou, Dominica",
    phone: "+1 (767) 448-3001",
    email: "layousda@anyadominica.org",
    country: "dominica",
    region: "west",
    coordinates: { lat: 15.3972781, lng: -61.4258725 },
    services: { sabbath: "Saturday 9:00 AM", prayer: "Wednesday 7:00 PM" },
    type: "church"
  },
  {
    id: 20,
    name: "Canefield SDA Church",
    pastor: "Pastor Peter Henderson",
    address: "Canefield, Dominica",
    phone: "+1 (767) 448-3002",
    email: "canefieldsda@anyadominica.org",
    country: "dominica",
    region: "west",
    coordinates: { lat: 15.3333, lng: -61.3833 },
    services: { sabbath: "Saturday 9:30 AM", prayer: "Tuesday 7:00 PM" },
    type: "church"
  },
  {
    id: 21,
    name: "Massacre SDA Church",
    pastor: "Pastor Joseph Martin",
    address: "Massacre, Dominica",
    phone: "+1 (767) 448-3003",
    email: "massacresda@anyadominica.org",
    country: "dominica",
    region: "west",
    coordinates: { lat: 15.3500, lng: -61.4000 },
    services: { sabbath: "Saturday 9:00 AM", prayer: "Thursday 6:00 PM" },
    type: "church"
  },

  // ============= BARBADOS =============
  // St. Michael Parish
  {
    id: 101,
    name: "King Street SDA Church",
    pastor: "Pastor William Thompson",
    address: "King St, Bridgetown, Barbados",
    phone: "+1 (246) 426-1001",
    email: "kingstreetsda@anyabarbados.org",
    country: "barbados",
    region: "st_michael",
    coordinates: { lat: 13.1040431, lng: -59.6167987 },
    services: { sabbath: "Saturday 8:30 AM & 11:00 AM", prayer: "Wednesday 7:30 PM" },
    type: "church"
  },
  {
    id: 102,
    name: "Ebenezer SDA Church",
    pastor: "Pastor Angela Forde",
    address: "St Michael, Barbados",
    phone: "+1 (246) 426-1002",
    email: "ebenezersda@anyabarbados.org",
    country: "barbados",
    region: "st_michael",
    coordinates: { lat: 13.1342641, lng: -59.6096492 },
    services: { sabbath: "Saturday 9:00 AM", prayer: "Tuesday 7:00 PM" },
    type: "church"
  },
  {
    id: 103,
    name: "Breath of Life SDA Church",
    pastor: "Pastor Robert Clarke",
    address: "White Hall Main Rd, St Michael, Barbados",
    phone: "+1 (246) 426-1003",
    email: "breathoflifesda@anyabarbados.org",
    country: "barbados",
    region: "st_michael",
    coordinates: { lat: 13.1280024, lng: -59.6082638 },
    services: { sabbath: "Saturday 9:30 AM", prayer: "Wednesday 7:00 PM" },
    type: "church"
  },
  {
    id: 104,
    name: "Jackson SDA Church",
    pastor: "Pastor Jennifer Simmons",
    address: "Canewood Rd, St Michael, Barbados",
    phone: "+1 (246) 426-1004",
    email: "jacksonsda@anyabarbados.org",
    country: "barbados",
    region: "st_michael",
    coordinates: { lat: 13.1480606, lng: -59.5998564 },
    services: { sabbath: "Saturday 8:00 AM", prayer: "Thursday 6:30 PM" },
    type: "church"
  },
  {
    id: 105,
    name: "Advent Ave SDA Church",
    pastor: "Pastor David Worrell",
    address: "Advent Rd, St Michael, Barbados",
    phone: "+1 (246) 426-1005",
    email: "adventavesda@anyabarbados.org",
    country: "barbados",
    region: "st_michael",
    coordinates: { lat: 13.1078759, lng: -59.6084261 },
    services: { sabbath: "Saturday 9:00 AM", prayer: "Tuesday 7:00 PM" },
    type: "church"
  },
  {
    id: 106,
    name: "Black Rock SDA Church",
    pastor: "Pastor Sandra White",
    address: "Black Rock, St Michael, Barbados",
    phone: "+1 (246) 426-1006",
    email: "blackrocksda@anyabarbados.org",
    country: "barbados",
    region: "st_michael",
    coordinates: { lat: 13.1282982, lng: -59.6259356 },
    services: { sabbath: "Saturday 10:00 AM", prayer: "Wednesday 7:30 PM" },
    type: "church"
  },
  {
    id: 107,
    name: "Government Hill SDA Church",
    pastor: "Pastor Mark Alleyne",
    address: "Government Hill, St Michael, Barbados",
    phone: "+1 (246) 426-1007",
    email: "govhillsda@anyabarbados.org",
    country: "barbados",
    region: "st_michael",
    coordinates: { lat: 13.1024679, lng: -59.5953046 },
    services: { sabbath: "Saturday 9:00 AM", prayer: "Thursday 7:00 PM" },
    type: "church"
  },

  // Christ Church Parish
  {
    id: 108,
    name: "Silver Hill SDA Church",
    pastor: "Pastor Charles Bynoe",
    address: "Silver Hill, Christ Church, Barbados",
    phone: "+1 (246) 428-1001",
    email: "silverhillsda@anyabarbados.org",
    country: "barbados",
    region: "christ_church",
    coordinates: { lat: 13.0734457, lng: -59.5517135 },
    services: { sabbath: "Saturday 9:00 AM", prayer: "Wednesday 7:00 PM" },
    type: "church"
  },
  {
    id: 109,
    name: "Pilgrim Road SDA Church",
    pastor: "Pastor Elizabeth Holder",
    address: "Pilgrim Road, Christ Church, Barbados",
    phone: "+1 (246) 428-1002",
    email: "pilgrimroadsda@anyabarbados.org",
    country: "barbados",
    region: "christ_church",
    coordinates: { lat: 13.0764215, lng: -59.5154634 },
    services: { sabbath: "Saturday 8:30 AM", prayer: "Tuesday 6:30 PM" },
    type: "church"
  },
  {
    id: 110,
    name: "Moriah SDA Church",
    pastor: "Pastor George Moore",
    address: "Rollins Rd, Christ Church, Barbados",
    phone: "+1 (246) 428-1003",
    email: "moriahsda@anyabarbados.org",
    country: "barbados",
    region: "christ_church",
    coordinates: { lat: 13.0515268, lng: -59.5225662 },
    services: { sabbath: "Saturday 9:30 AM", prayer: "Thursday 7:00 PM" },
    type: "church"
  },
  {
    id: 111,
    name: "Cane Vale SDA Church",
    pastor: "Pastor Patricia King",
    address: "Cane Vale Rd, Christ Church, Barbados",
    phone: "+1 (246) 428-1004",
    email: "canevalesda@anyabarbados.org",
    country: "barbados",
    region: "christ_church",
    coordinates: { lat: 13.0661054, lng: -59.5474208 },
    services: { sabbath: "Saturday 10:00 AM", prayer: "Wednesday 7:30 PM" },
    type: "church"
  },
  {
    id: 112,
    name: "ECC Headquarters",
    pastor: "Conference Administration",
    address: "Brydens Rd, Christ Church, Barbados",
    phone: "+1 (246) 428-2400",
    email: "office@anyabarbados.org",
    country: "barbados",
    region: "christ_church",
    coordinates: { lat: 13.0873985, lng: -59.5967219 },
    services: { sabbath: "Contact for details", prayer: "Contact for details" },
    type: "office"
  },

  // St. James Parish
  {
    id: 113,
    name: "Holders Hill SDA Church",
    pastor: "Pastor Andrew Griffith",
    address: "Durants Village, St James, Barbados",
    phone: "+1 (246) 432-1001",
    email: "holdershillsda@anyabarbados.org",
    country: "barbados",
    region: "st_james",
    coordinates: { lat: 13.1561155, lng: -59.6320778 },
    services: { sabbath: "Saturday 9:30 AM", prayer: "Tuesday 7:00 PM" },
    type: "church"
  },
  {
    id: 114,
    name: "Gardens SDA Church",
    pastor: "Pastor Sandra Brathwaite",
    address: "Hwy 1B, St James, Barbados",
    phone: "+1 (246) 432-1002",
    email: "gardenssda@anyabarbados.org",
    country: "barbados",
    region: "st_james",
    coordinates: { lat: 13.2046321, lng: -59.6396464 },
    services: { sabbath: "Saturday 9:00 AM", prayer: "Wednesday 7:00 PM" },
    type: "church"
  },

  // St. George Parish
  {
    id: 115,
    name: "Eastlyn SDA Church",
    pastor: "Pastor Michael Grant",
    address: "Cane Hill, St George, Barbados",
    phone: "+1 (246) 437-1001",
    email: "eastlynsda@anyabarbados.org",
    country: "barbados",
    region: "st_george",
    coordinates: { lat: 13.1301821, lng: -59.5438408 },
    services: { sabbath: "Saturday 8:30 AM", prayer: "Wednesday 7:30 PM" },
    type: "church"
  },
  {
    id: 116,
    name: "Glebe SDA Church",
    pastor: "Pastor Deborah James",
    address: "Glebe, St George, Barbados",
    phone: "+1 (246) 437-1002",
    email: "glebesda@anyabarbados.org",
    country: "barbados",
    region: "st_george",
    coordinates: { lat: 13.1500, lng: -59.5667 },
    services: { sabbath: "Saturday 9:00 AM", prayer: "Thursday 6:30 PM" },
    type: "church"
  },

  // St. Peter Parish
  {
    id: 117,
    name: "Mile and A Quarter SDA Church",
    pastor: "Pastor Robert Gittens",
    address: "Mile and A Quarter, St Peter, Barbados",
    phone: "+1 (246) 439-1001",
    email: "milequartersda@anyabarbados.org",
    country: "barbados",
    region: "st_peter",
    coordinates: { lat: 13.2734576, lng: -59.6220856 },
    services: { sabbath: "Saturday 10:00 AM", prayer: "Tuesday 6:30 PM" },
    type: "church"
  },
  {
    id: 118,
    name: "Speightstown SDA Church",
    pastor: "Pastor Anthony Branch",
    address: "Speightstown, St Peter, Barbados",
    phone: "+1 (246) 439-1002",
    email: "speightstownsda@anyabarbados.org",
    country: "barbados",
    region: "st_peter",
    coordinates: { lat: 13.2452881, lng: -59.6432308 },
    services: { sabbath: "Saturday 9:00 AM", prayer: "Wednesday 7:00 PM" },
    type: "church"
  },

  // St. Andrew Parish
  {
    id: 119,
    name: "Hillaby SDA Church",
    pastor: "Pastor Winston Beckles",
    address: "Hillaby, St Andrew, Barbados",
    phone: "+1 (246) 433-1001",
    email: "hillabysda@anyabarbados.org",
    country: "barbados",
    region: "st_andrew",
    coordinates: { lat: 13.2129067, lng: -59.5879125 },
    services: { sabbath: "Saturday 8:00 AM", prayer: "Wednesday 6:00 PM" },
    type: "church"
  },
  {
    id: 120,
    name: "Belleplaine SDA Church",
    pastor: "Pastor Gloria Skeete",
    address: "Belleplaine, St Andrew, Barbados",
    phone: "+1 (246) 433-1002",
    email: "belleplainesda@anyabarbados.org",
    country: "barbados",
    region: "st_andrew",
    coordinates: { lat: 13.2000, lng: -59.5667 },
    services: { sabbath: "Saturday 9:30 AM", prayer: "Thursday 7:00 PM" },
    type: "church"
  },

  // St. Lucy Parish
  {
    id: 121,
    name: "Cave Hill SDA Church",
    pastor: "Pastor Calvin Springer",
    address: "Graveyard, St Lucy, Barbados",
    phone: "+1 (246) 439-2001",
    email: "cavehillsda@anyabarbados.org",
    country: "barbados",
    region: "st_lucy",
    coordinates: { lat: 13.299869, lng: -59.5856676 },
    services: { sabbath: "Saturday 8:30 AM", prayer: "Wednesday 7:00 PM" },
    type: "church"
  },
  {
    id: 122,
    name: "Grape Hall SDA Church",
    pastor: "Pastor Marcia Best",
    address: "Crab Hill, St Lucy, Barbados",
    phone: "+1 (246) 439-2002",
    email: "grapehallsda@anyabarbados.org",
    country: "barbados",
    region: "st_lucy",
    coordinates: { lat: 13.3218361, lng: -59.6356961 },
    services: { sabbath: "Saturday 9:00 AM", prayer: "Tuesday 6:30 PM" },
    type: "church"
  },

  // St. Philip Parish
  {
    id: 123,
    name: "Mount Sinai SDA Church",
    pastor: "Pastor Trevor Johnson",
    address: "St Philip, Barbados",
    phone: "+1 (246) 423-1001",
    email: "mtsinaisda@anyabarbados.org",
    country: "barbados",
    region: "st_philip",
    coordinates: { lat: 13.0950334, lng: -59.492147 },
    services: { sabbath: "Saturday 9:00 AM", prayer: "Tuesday 7:00 PM" },
    type: "church"
  },
  {
    id: 124,
    name: "Six Roads SDA Church",
    pastor: "Pastor Andrea Brathwaite",
    address: "Six Roads, St Philip, Barbados",
    phone: "+1 (246) 423-1002",
    email: "sixroadssda@anyabarbados.org",
    country: "barbados",
    region: "st_philip",
    coordinates: { lat: 13.1167, lng: -59.4667 },
    services: { sabbath: "Saturday 9:30 AM", prayer: "Wednesday 7:30 PM" },
    type: "church"
  },

  // St. Thomas Parish
  {
    id: 125,
    name: "Victory SDA Church",
    pastor: "Pastor Harold Williams",
    address: "St Thomas, Barbados",
    phone: "+1 (246) 438-1001",
    email: "victorysda@anyabarbados.org",
    country: "barbados",
    region: "st_thomas",
    coordinates: { lat: 13.1780, lng: -59.5900 },
    services: { sabbath: "Saturday 9:00 AM", prayer: "Thursday 7:00 PM" },
    type: "church"
  },
  {
    id: 126,
    name: "Welchman Hall SDA Church",
    pastor: "Pastor Diana Sealy",
    address: "Welchman Hall, St Thomas, Barbados",
    phone: "+1 (246) 438-1002",
    email: "welchmanhallsda@anyabarbados.org",
    country: "barbados",
    region: "st_thomas",
    coordinates: { lat: 13.1667, lng: -59.5833 },
    services: { sabbath: "Saturday 8:30 AM", prayer: "Wednesday 6:30 PM" },
    type: "church"
  },

  // St. Joseph Parish
  {
    id: 127,
    name: "Bathsheba SDA Church",
    pastor: "Pastor Leonard Cadogan",
    address: "Bathsheba, St Joseph, Barbados",
    phone: "+1 (246) 433-3001",
    email: "bathshebasda@anyabarbados.org",
    country: "barbados",
    region: "st_joseph",
    coordinates: { lat: 13.2167, lng: -59.5333 },
    services: { sabbath: "Saturday 9:30 AM", prayer: "Thursday 7:00 PM" },
    type: "church"
  },

  // St. John Parish
  {
    id: 128,
    name: "Four Roads SDA Church",
    pastor: "Pastor Kevin Ward",
    address: "Four Roads, St John, Barbados",
    phone: "+1 (246) 433-4001",
    email: "fourroadssda@anyabarbados.org",
    country: "barbados",
    region: "st_john",
    coordinates: { lat: 13.1667, lng: -59.5000 },
    services: { sabbath: "Saturday 10:00 AM", prayer: "Wednesday 7:30 PM" },
    type: "church"
  }
];

// Helper functions
export const getDominicaChurches = () => churchData.filter(c => c.country === 'dominica');
export const getBarbadosChurches = () => churchData.filter(c => c.country === 'barbados');
export const getChurchesByRegion = (country: string, region: string) => 
  churchData.filter(c => c.country === country && c.region === region);
