import tshirt from '../assets/t-shirt.png';
import BlueDenimJacket from '../assets/Blue Denim Jacket.png';
import hoodie from '../assets/hoodie.png';
import whitePoloShirt from '../assets/white Polo Shirt.png';
import KhakiShorts from '../assets/Khaki Shorts.png';
import NavyBlueDress from '../assets/Navy Blue Dress.png'
import FloraBlouse from '../assets/Floral Blouse.png'
import BlackSkirt from '../assets/Black Skirt.png'
import RedKurti from '../assets/Red Kurti.png'
import YellowSummerDress from '../assets/Yellow Summer Dress.png'
import SuperheroTShirt from '../assets/Superhero T-Shirt.png'
import GirlsPartyFrock from '../assets/Girls Party Frock.png'
import BoysShortsSet from '../assets/Boys Shorts Set.png'
import CartoonPajamas from '../assets/Cartoon Pajamas.png'
import WinterCoat from '../assets/Winter Coat.png'
import BlueSaree from '../assets/Blue Saree.png'
import WhitePanjabi from '../assets/White Panjabi.png'
import LehengaCholi from '../assets/Lehenga Choli.png'
import BlackSherwani from '../assets/Black Sherwani.png'
import GreenDupattaKurti from '../assets/Green Dupatta Kurti.png'
import RunningShorts from '../assets/Running Shorts.png'
import GymTankTop from '../assets/Gym Tank Top.png'
import YogaPants from '../assets/Yoga Pants.png'
import TrackSuit from '../assets/Track Suit.png'
import SportsBra from '../assets/Sports Bra.png'
import WoolenSweater from '../assets/Woolen Sweater.png'
import PufferJacket from '../assets/Puffer Jacket.png'
import ThermalSet from '../assets/Thermal Set.png'
import WoolCap from '../assets/Wool Cap.png'
import LongCoat from '../assets/Long Coat.png';


// Running Shorts

const products = [
  // 🧔 Men's Clothing
  {
    id: 1,
    name: "Green T-Shirt",
    img: tshirt,
    price: 1200,
    category: "Men",
    color: "Green",
    size: "M",
    description: "Comfortable red cotton T-shirt for daily wear.",
    discount: 10,
    discountEndsAt: "2025-07-30T23:59:59",
  },
  {
    id: 2,
    name: "Blue Denim Jacket",
    img: BlueDenimJacket,
    price: 1800,
    category: "Men",
    color: "sky-Blue",
    size: "L",
    description: "Stylish denim jacket for casual outings.",
  },
  {
    id: 3,
    name: "Black Hoodie",
    img: hoodie,
    price: 2200,
    category: "Men",
    color: "Black",
    size: "XL",
    description: "Cozy and warm hoodie with front pocket.",
    discount: 10,
    discountEndsAt: "2025-07-25T23:59:59",
  },
  {
    id: 4,
    name: "White Polo Shirt",
    img: whitePoloShirt ,
    price: 1200,
    category: "Men",
    color: "White",
    size: "M",
    description: "Classic polo shirt for a clean look.",
  },
  {
    id: 5,
    name: "Khaki Shorts",
    img: KhakiShorts,
    price: 700,
    category: "Men",
    color: "Beige",
    size: "L",
    description: "Breathable cotton shorts for summer.",
    discount: 10,
    discountEndsAt: "2025-07-22T23:59:59",
  },

  // 👩 Women's Clothing
  {
    id: 6,
    name: "Navy Blue Dress",
    img: NavyBlueDress,
    price: 4000,
    category: "Women",
    color: "NavyBlue",
    size: "L",
    description: "Elegant evening dress for special occasions.",
  },
  {
    id: 7,
    name: "Floral Blouse",
    img: FloraBlouse,
    price: 2800,
    category: "Women",
    color: "mix",
    size: "M",
    description: "Soft floral blouse with ruffle sleeves.",
    discount: 20,
    discountEndsAt: "2025-07-20T23:59:59",
  },
  {
    id: 8,
    name: "Black Skirt",
    img: BlackSkirt,
    price: 3500,
    category: "Women",
    color: "Black",
    size: "S",
    description: "Knee-length skirt, perfect for office wear.",
  },
  {
    id: 9,
    name: "Red Kurti",
    img: RedKurti,
    price: 2500,
    category: "Women",
    color: "Red",
    size: "M",
    description: "Traditional Kurti with embroidery.",
    discount: 20,
    discountEndsAt: "2025-07-23T23:59:59",
  },
  {
    id: 10,
    name: "Yellow Summer Dress",
    img: YellowSummerDress,
    price: 3200,
    category: "Women",
    color: "Yellow",
    size: "L",
    description: "Bright dress for warm sunny days.",
  },

  // 👦 Kids' Clothing
  {
    id: 11,
    name: "Superhero T-Shirt",
    img: SuperheroTShirt,
    price: 1800,
    category: "Kids",
    color: "blue",
    size: "S",
    description: "Printed superhero tee for kids.",
  },
  {
    id: 12,
    name: "Girls Party Frock",
    img: GirlsPartyFrock,
    price: 3000,
    category: "Kids",
    color: "Purple",
    size: "M",
    description: "Adorable frock for birthday parties.",
    discount: 25,
    discountEndsAt: "2025-07-15T23:59:59",
  },
  {
    id: 13,
    name: "Boys Shorts Set",
    img: BoysShortsSet,
    price: 2000,
    category: "Kids",
    color: "sky",
    size: "M",
    description: "Matching T-shirt and shorts set.",
  },
  {
    id: 14,
    name: "Cartoon Pajamas",
    img: CartoonPajamas,
    price: 1500,
    category: "Kids",
    color: "mix",
    size: "S",
    description: "Soft pajamas with fun cartoon prints.",
    discount: 15,
    discountEndsAt: "2025-07-20T23:59:59",
  },
  {
    id: 15,
    name: "Winter Coat",
    img: WinterCoat,
    price: 3500,
    category: "Kids",
    color: "Black",
    size: "L",
    description: "Warm coat for cold winter days.",
  },

  // 🧕 Traditional Wear
  {
    id: 16,
    name: "Blue Saree",
    img: BlueSaree,
    price: 5500,
    category: "Traditional",
    color: "Blue",
    size: "Free",
    description: "Elegant silk saree with zari border.",
    discount: 15,
     discountEndsAt: "2025-07-18T23:59:59",
  },
  {
    id: 17,
    name: "White Panjabi",
    img: WhitePanjabi,
    price: 3800,
    category: "Traditional",
    color: "White",
    size: "L",
    description: "Cotton Panjabi perfect for Eid.",
  },
  {
    id: 18,
    name: "Lehenga Choli",
    img: LehengaCholi,
    price: 8500,
    category: "Traditional",
    color: "Pink",
    size: "M",
    description: "Gorgeous lehenga set for weddings.",
  },
  {
    id: 19,
    name: "Black Sherwani",
    img: BlackSherwani,
    price: 7000,
    category: "Traditional",
    color: "Black",
    size: "XL",
    description: "Classic sherwani for men.",
    discount: 20,
     discountEndsAt: "2025-07-28T23:59:59",
  },
  {
    id: 20,
    name: "Green Dupatta Kurti",
    img: GreenDupattaKurti,
    price: 3300,
    category: "Traditional",
    color: "Green",
    size: "M",
    description: "Stylish kurti set with dupatta.",
  },

  // 🎽 Sportswear
  {
    id: 21,
    name: "Running Shorts",
    img: RunningShorts,
    price: 2000,
    category: "Sportswear",
    color: "Black",
    size: "L",
    description: "Lightweight shorts for running.",
  },
  {
    id: 22,
    name: "Gym Tank Top",
    img: GymTankTop,
    price: 1800,
    category: "Sportswear",
    color: "White",
    size: "M",
    description: "Breathable tank for workouts.",
    discount: 10,
     discountEndsAt: "2025-07-19T23:59:59",
  },
  {
    id: 23,
    name: "Yoga Pants",
    img: YogaPants,
    price: 3000,
    category: "Sportswear",
    color: "Gray",
    size: "M",
    description: "Stretchable yoga leggings.",
  },
  {
    id: 24,
    name: "Track Suit",
    img: TrackSuit,
    price: 4500,
    category: "Sportswear",
    color: "Navy",
    size: "L",
    description: "Full sleeve tracksuit set.",
    discount: 10,
    discountEndsAt: "2025-07-18T23:59:59",
  },
  {
    id: 25,
    name: "Sports Bra",
    img: SportsBra,
    price: 2500,
    category: "Sportswear",
    color: "Pink",
    size: "S",
    description: "High support sports bra.",
  },

  // 🧥 Winter Wear
  {
    id: 26,
    name: "Woolen Sweater",
    img: WoolenSweater,
    price: 3800,
    category: "Winter",
    color: "Beige",
    size: "M",
    description: "Knitted wool sweater.",
  },
  {
    id: 27,
    name: "Puffer Jacket",
    img: PufferJacket,
    price: 6500,
    category: "Winter",
    color: "Brown",
    size: "L",
    description: "Thick padded jacket for cold.",
  },
  {
    id: 28,
    name: "Thermal Set",
    img: ThermalSet,
    price: 2800,
    category: "Winter",
    color: "Black",
    size: "M",
    description: "Inner thermal wear set.",
  },
  {
    id: 29,
    name: "Wool Cap",
    img: WoolCap,
    price: 1000,
    category: "Winter",
    color: "Black",
    size: "Free",
    description: "Warm cap to protect from cold.",
  },
  {
    id: 30,
    name: "Long Coat",
    img: LongCoat,
    price: 7200,
    category: "Winter",
    color: "Balck",
    size: "XL",
    description: "Long overcoat for elegant look.",
  },
];

export default products;
