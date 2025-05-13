import React, { useState, useEffect } from "react";
import { useCart } from "./CartContext";
import Cart from "./Cart";
import Customers from './image.png'

const allProducts = [
  // Page 1
  {
    id: 1,
    name: "Protein Powder",
    price: 122,
    oldPrice: 136,
    rating: 4.8,
    image:
      "https://i5.walmartimages.com/seo/Optimum-Nutrition-Gold-Standard-100-Whey-Protein-Powder-Double-Rich-Chocolate-24g-Protein-2-Lb_8ee2632a-7d62-4219-94e7-c3dd52945546.87b1dd829123035ef352430f01470056.jpeg",
    category: "supplement",
  },
  {
    id: 2,
    name: "Whey Isolate",
    price: 120,
    oldPrice: 136,
    rating: 4.8,
    image:
      "https://whey.kz/wp-content/uploads/2020/05/ON-gold-standart-100-isolate.jpg",
    category: "supplement",
  },
  {
    id: 3,
    name: "Orginal Damble",
    price: 133,
    oldPrice: 136,
    rating: 4.8,
    image: "https://m.media-amazon.com/images/I/71TDIuWl81L.jpg",
    category: "equipment",
  },
  {
    id: 4,
    name: "Nutrition AminoLean",
    price: 156,
    oldPrice: 163,
    rating: 4.8,
    image:
      "https://rspnutrition.com/cdn/shop/files/AminoLeanEnergy_Mango_25Serv_122222-01_Front_HighRes.png?v=1682670717&width=1946",
    category: "supplement",
  },
  {
    id: 5,
    name: "Equipment Bench",
    price: 120,
    oldPrice: 136,
    rating: 4.8,
    image:
      "https://yorkbarbell.com/wp-content/uploads/2017/03/4201_9201PowerLiftingBench.jpg",
    category: "equipment",
  },
  {
    id: 6,
    name: "Workout Shoes",
    price: 140,
    oldPrice: 150,
    rating: 4.8,
    image: "https://goqii.com/blog/wp-content/uploads/running-shoes.png",
    category: "apparel",
  },
  {
    id: 7,
    name: "Barbells Dumbbells",
    price: 124,
    oldPrice: 136,
    rating: 4.8,
    image:
      "https://m.media-amazon.com/images/I/41HWmjFipAL._AC_UF1000,1000_QL80_.jpg",
    category: "equipment",
  },
  {
    id: 8,
    name: "Collector C4",
    price: 149,
    oldPrice: 163,
    rating: 4.8,
    image:
      "https://s.turbifycdn.com/aah/fitnessgiant/body-solid-gs348qp4-series-7-smith-gym-system-197.png",
    category: "equipment",
  },
  // Page 2
  {
    id: 9,
    name: "Yoga Mat",
    price: 40,
    oldPrice: 55,
    rating: 4.8,
    image:
      "https://resources.cdn-kaspi.kz/img/m/p/h6f/ha5/64080473456670.jpg?format=gallery-large",
    category: "equipment",
  },
  {
    id: 10,
    name: "BCAA Supplements",
    price: 85,
    oldPrice: 95,
    rating: 4.8,
    image:
      "https://scitecnutrition.com/images/product_images/6756_7af7b2a7d206.webp",
    category: "supplement",
  },
  {
    id: 11,
    name: "Pull Up Bar",
    price: 70,
    oldPrice: 80,
    rating: 4.8,
    image:
      "https://www.fitnessavenue.ca/cdn/shop/products/CB016-AmStaff-Fitness-Foldable-Doorway-Pull-up-Bar__1.jpg?v=1676562396",
    category: "equipment",
  },
  {
    id: 12,
    name: "Fitness Tracker",
    price: 199,
    oldPrice: 220,
    rating: 4.8,
    image: "https://i.ebayimg.com/images/g/JnoAAOSwYCRlV1Ty/s-l1600.jpg",
    category: "equipment",
  },
  {
    id: 13,
    name: "Running Shorts",
    price: 30,
    oldPrice: 40,
    rating: 4.8,
    image:
      "https://res.cloudinary.com/ekoweb/image/upload/s--WBFlehrv--/f_auto,h_600,q_auto:eco,w_600/v1/products/9-154513/views/9-154513__1we11950553_01",
    category: "apparel",
  },
  {
    id: 14,
    name: "Pre-workout Mix",
    price: 60,
    oldPrice: 75,
    rating: 4.8,
    image:
      "https://m.media-amazon.com/images/I/61ZJIN9qQiL._AC_UF1000,1000_QL80_.jpg",
    category: "supplement",
  },
  {
    id: 15,
    name: "Smart Scale",
    price: 90,
    oldPrice: 110,
    rating: 4.8,
    image:
      "https://www.mensfitness.com/.image/t_share/MjExNzY4MTU3NTkxODQwNzQ0/renpho-11-inch-smart-scale.jpg",
    category: "equipment",
  },
  {
    id: 16,
    name: "Wrist Wraps",
    price: 15,
    oldPrice: 20,
    rating: 4.8,
    image:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/support/p/d/d/299-weight-lifting-training-wrist-wraps-for-wrist-support-black-original-imagganhz8fgz5cp.jpeg?q=90&crop=false",
    category: "equipment",
  },
  // Page 3
  {
    id: 17,
    name: "Gym Bag",
    price: 55,
    oldPrice: 70,
    rating: 4.8,
    image:
      "https://intersport.com.au/cdn/shop/files/2aaf1a68d77b5ace789d3e4fc080e829_380x380.jpg?v=1737775792",
    category: "apparel",
  },
  {
    id: 18,
    name: "Knee Sleeves",
    price: 25,
    oldPrice: 35,
    rating: 4.8,
    image:
      "https://strengthshop.eu/cdn/shop/products/SHOP_NEO-KNEE-7MM-BLK_1_new.jpg?v=1679919121",
    category: "equipment",
  },
  {
    id: 19,
    name: "Casein Protein",
    price: 130,
    oldPrice: 145,
    rating: 4.8,
    image:
      "https://whey.kz/wp-content/uploads/2014/04/optimum-nutrition-casein-900-cookies-cream.jpg",
    category: "supplement",
  },
  {
    id: 20,
    name: "Fitness Gloves",
    price: 20,
    oldPrice: 30,
    rating: 4.8,
    image:
      "https://intersport.com.au/cdn/shop/files/dc266aeb2f0951b5c1ceacebf4cedbca_380x380.jpg?v=1726239625",
    category: "equipment",
  },
  {
    id: 21,
    name: "Sports Bra",
    price: 35,
    oldPrice: 45,
    rating: 4.8,
    image:
      "https://www.rideluca.com/cdn/shop/files/BraBlack3.jpg?v=1731260859&width=416",
    category: "apparel",
  },
  {
    id: 22,
    name: "Mass Gainer",
    price: 165,
    oldPrice: 180,
    rating: 4.8,
    image:
      "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/dyz/dyz33127/y/26.jpg",
    category: "supplement",
  },
  {
    id: 23,
    name: "Battle Ropes",
    price: 110,
    oldPrice: 125,
    rating: 4.8,
    image:
      "https://i5.walmartimages.com/seo/Yes4All-1-5-in-Diameter-Battle-Rope-50-ft-Length-Workout-Rope-Poly-Dacron-Material_05bc6055-310c-42d4-85ce-be32916fc0f1.0872419739f9dcfee4b64436ff59025c.jpeg",
    category: "equipment",
  },
  {
    id: 24,
    name: "Hydration Pack",
    price: 50,
    oldPrice: 60,
    rating: 4.8,
    image: "https://m.media-amazon.com/images/I/81Ios9WYM7L._AC_UY1000_.jpg",
    category: "equipment",
  },
  // Page 4
  {
    id: 25,
    name: "Compression Shirt",
    price: 45,
    oldPrice: 55,
    rating: 4.8,
    image:
      "https://qualitybuysports.com/wp-content/uploads/2023/01/PhotoRoom-20230117_141427.jpg",
    category: "apparel",
  },
  {
    id: 26,
    name: "Creatine",
    price: 95,
    oldPrice: 105,
    rating: 4.8,
    image:
      "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cgn/cgn01059/y/144.jpg",
    category: "supplement",
  },
  {
    id: 27,
    name: "Adjustable Bench",
    price: 210,
    oldPrice: 230,
    rating: 4.8,
    image:
      "https://m.media-amazon.com/images/I/71Gj4j0N-NL._AC_UF1000,1000_QL80_.jpg",
    category: "equipment",
  },
  {
    id: 28,
    name: "Training Mask",
    price: 80,
    oldPrice: 90,
    rating: 4.8,
    image:
      "https://www.phantom-athletics.com/cdn/shop/files/Phantom-Athletics-Trainingsmaske_7.jpg?v=1724251774",
    category: "equipment",
  },
  {
    id: 29,
    name: "Resistance Bands",
    price: 25,
    oldPrice: 30,
    rating: 4.8,
    image:
      "https://www.stratasports.co.nz/wp-content/uploads/2020/05/resistance-bands-resb.png",
    category: "equipment",
  },
  {
    id: 30,
    name: "Sweatpants",
    price: 60,
    oldPrice: 75,
    rating: 4.8,
    image:
      "https://provinceofcanada.com/cdn/shop/products/Heather-Grey-Lounge-Sweatpants-Lead-5Z7A6888_338abe02-d6b1-41ea-8e01-1846f9c7e1bd.jpg?crop=center&height=1200&v=1679709702&width=1200",
    category: "apparel",
  },
  {
    id: 31,
    name: "Thermogenic Fat Burner",
    price: 88,
    oldPrice: 100,
    rating: 4.8,
    image:
      "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/ehl/ehl00728/y/8.jpg",
    category: "supplement",
  },
  {
    id: 32,
    name: "Weightlifting Belt",
    price: 70,
    oldPrice: 85,
    rating: 4.8,
    image:
      "https://cdn.fitshop.co.uk/pictures/rdx/weight_lifting_accessories/RDX-WBS-4FB/RDX_4-inch_Leather_WLB_Product_Full_Product_Variations_1600x1600px_1600.jpg",
    category: "equipment",
  },
  // Page 5
  {
    id: 33,
    name: "Foam Roller",
    price: 35,
    oldPrice: 45,
    rating: 4.8,
    image:
      "https://drtrust.in/cdn/shop/products/dr-trust-usa-fitness-grid-foam-roller-312-30090833854510_1200x1200.jpg?v=1682059370",
    category: "equipment",
  },
  {
    id: 34,
    name: "Tank Top",
    price: 28,
    oldPrice: 35,
    rating: 4.8,
    image: "https://m.media-amazon.com/images/I/51yz2e65rFL._AC_SX569_.jpg",
    category: "apparel",
  },
  {
    id: 35,
    name: "Multivitamin",
    price: 55,
    oldPrice: 65,
    rating: 4.8,
    image:
      "https://m.media-amazon.com/images/I/61YY7YNo7rL._AC_UF1000,1000_QL80_.jpg",
    category: "supplement",
  },
  {
    id: 36,
    name: "Speed Rope",
    price: 45,
    oldPrice: 55,
    rating: 4.8,
    image: "https://www.power-systems.com/shop/images/variant/large/7195.jpg",
    category: "equipment",
  },
  {
    id: 37,
    name: "Treadmill Lubricant",
    price: 20,
    oldPrice: 25,
    rating: 4.8,
    image:
      "https://i5.walmartimages.com/seo/Spot-On-100-Silicone-Treadmill-Lubricant-with-Patented-Application-Tube-4-fl-oz_a102882f-9ac2-4d83-ab0a-ad6e63544523.001c49a67934f64e68ab3fafa6163a62.jpeg",
    category: "equipment",
  },
  {
    id: 38,
    name: "Training Hoodie",
    price: 75,
    oldPrice: 90,
    rating: 4.8,
    image:
      "https://avecsport.com/images/thumbs/0020936_focus-fz-hoodie-black.jpeg",
    category: "apparel",
  },
  {
    id: 39,
    name: "Zinc Supplement",
    price: 30,
    oldPrice: 38,
    rating: 4.8,
    image:
      "https://m.media-amazon.com/images/I/51ihNiQPasL._AC_UF1000,1000_QL80_.jpg",
    category: "supplement",
  },
  {
    id: 40,
    name: "Weight Plate",
    price: 100,
    oldPrice: 120,
    rating: 4.8,
    image:
      "https://yorkbarbell.com/wp-content/uploads/2017/01/7354-600x600.jpg",
    category: "equipment",
  },
];

const PAGE_SIZE = 8;

export default function ProductGrid() {
  const { addToCart } = useCart();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [page, setPage] = useState(0);

  const filteredProducts = allProducts.filter((product) => {
    return (
      (category === "all" || product.category === category) &&
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  const totalPages = Math.ceil(filteredProducts.length / PAGE_SIZE);

  const paginatedProducts = filteredProducts.slice(
    page * PAGE_SIZE,
    (page + 1) * PAGE_SIZE
  );

  const handleNext = () => {
    setPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <main>
      <section className="flex items-center justify-center gap-10 border-b-2 border-gray-300 ml-4 mr-4 pt-20 mb-20">
        <div className="w-[30%] p-10">
          <h1 className="text-[35px] font-bold mb-4">Quality & Durability</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing. Elit this product</p>
        </div>
        <div className="w-[30%] p-10 border-l-2 border-gray-300">
          <h1 className="text-[35px] font-bold mb-4">Countless Smiles</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor.</p>
        </div>
        <div className="w-[30%] p-10 border-l-2 border-gray-300">
          <h1 className="text-[35px] font-bold mb-4">Online Support</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing. Lorem ipsum dolor sit amet.</p>
        </div>
      </section>

      <section className="shadow-[0px_10px_20px_black] pb-20 bg-[#f9f9f6]">
        <img className="w-full mt-10 " src={Customers} alt="" />
      </section>

      <section className="bg-[#f9f9f6] py-16 px-4">
        <div id="shopAll" className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center text-[#1b1b1b] mb-10">
            Essential Fitness Gear <br /> Just For You
          </h2>

          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <div className="relative w-[100%]">
                <input
                  placeholder="Search..."
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[10px] focus:ring-blue-500 focus:border-blue-500 block w-full ps-5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 py-3"
                  id="voice-search"
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button
                  className="absolute inset-y-0 end-0 flex items-center pe-3"
                  type="button"
                >
                  <svg
                    viewBox="0 0 16 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  >
                    <path
                      d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"
                      stroke-width="2"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      stroke="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
              <button
                className="inline-flex items-center border py-2.5 px-3 bg-gray-900 text-white rounded-[10px] ml-2 transition-all duration-500 hover:bg-gray-200 hover:text-gray-900 hover:border"
                type="submit"
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-4 h-4 me-2"
                >
                  <path
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    stroke-width="2"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke="currentColor"
                  ></path>
                </svg>
                Search
              </button>
            </div>
            <select
              className="border px-4 py-2 rounded-md"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="all">All</option>
              <option value="supplement">Supplement</option>
              <option value="equipment">Equipment</option>
              <option value="apparel">Apparel</option>
            </select>
          </div>

          <div className="grid bg-green-10 grid-cols-2 md:grid-cols-4 gap-4">
            {paginatedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 shadow-md"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[180px] object-contain mb-4"
                />

                <h3 className="font-semibold mb-1 pl-[10px]">{product.name}</h3>

                <div className="text-lg font-bold mb-2 pl-[10px]">
                  ${product.price.toFixed(2)}
                </div>

                <div className="text-sm text-gray-500 mb-2 pl-[10px]">
                  {product.rating} Ratings
                </div>

                <button
                  className="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-md group scale-[0.9]"
                  onClick={() => addToCart(product)}
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gray-950 rounded-full group-hover:w-56 group-hover:h-56"></span>

                  <span className="absolute bottom-0 left-0 h-full -ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-auto h-full opacity-100 object-stretch"
                      viewBox="0 0 487 487"
                    >
                      <path
                        fillOpacity=".1"
                        fillRule="nonzero"
                        fill="#FFF"
                        d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                      ></path>
                    </svg>
                  </span>

                  <span className="absolute top-0 right-0 w-12 h-full -mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="object-cover w-full h-full"
                      viewBox="0 0 487 487"
                    >
                      <path
                        fillOpacity=".1"
                        fillRule="nonzero"
                        fill="#FFF"
                        d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                      ></path>
                    </svg>
                  </span>

                  <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"></span>

                  <span className="relative text-base font-semibold">
                    Add to card!
                  </span>
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 flex justify-center gap-4 mb-10">
            <button
              onClick={handlePrev}
              className="cursor-pointer relative bg-black py-2 rounded-full min-w-[8.5rem] min-h-[2.92rem] group max-w-full flex items-center justify-end hover:bg-gray-500 transition-all duration-[0.8s] shadow-[inset_1px_2px_5px_#00000080]"
            >
              <div className="absolute flex px-1 py-0.5 justify-end items-center inset-0">
                <div className="w-[0%] group-hover:w-full transition-all duration-[1s]"></div>
                <div className="rounded-full shrink-0 flex justify-center items-center shadow-[inset_1px_-1px_3px_0_black] h-full aspect-square bg-gray-600 transition-all duration-[1s] group-hover:bg-black  group-hover:translate-x-[-85px]">
                  <div className="size-[0.8rem] text-black group-hover:text-gray-500 group-hover:rotate-45 transition-all duration-[1s]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 16"
                      height="100%"
                      width="100%"
                    >
                      <path
                        fill="currentColor"
                        d="M3.825 7H16v2H3.825l5.6 5.6L8 16 0 8 8 0l1.425 1.4L3.825 7Z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="pr-[3.4rem] pl-[1.1rem] group-hover:pr-[1.1rem] group-hover:pl-[3.4rem] transition-all duration-[1s] group-hover:text-black text-white">
                Go Back
              </div>
            </button>

            <button
              onClick={handleNext}
              className="cursor-pointer relative bg-black py-2 rounded-full min-w-[8.5rem] min-h-[2.92rem] group max-w-full flex items-center justify-start hover:bg-gray-500 transition-all duration-[0.8s] shadow-[inset_1px_2px_5px_#00000080]"
            >
              <div className="absolute flex px-1 py-0.5 justify-start items-center inset-0">
                <div className="w-[0%] group-hover:w-full transition-all duration-[1s]"></div>
                <div className="rounded-full shrink-0 flex justify-center items-center shadow-[inset_1px_-1px_3px_0_black] h-full aspect-square bg-gray-600 transition-all duration-[1s] group-hover:bg-black">
                  <div className="size-[0.8rem] text-black group-hover:text-gray-500 group-hover:-rotate-45 transition-all duration-[1s]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 16"
                      height="100%"
                      width="100%"
                    >
                      <path
                        fill="currentColor"
                        d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="pl-[3.4rem] pr-[1.1rem] group-hover:pl-[1.1rem] group-hover:pr-[3.4rem] transition-all duration-[1s] group-hover:text-black text-white">
                Go Next
              </div>
            </button>
          </div>
        </div>

        <Cart></Cart>

        <section id="message" className="absolute left-0 w-full bg-black text-white min-h-screen flex items-center justify-center">
          <div className="absolute inset-0">
            <img
              src="https://r4.wallpaperflare.com/wallpaper/935/706/440/working-out-gyms-smoke-kettlebells-wallpaper-b9c0a87df11aad6b1627780fa081c66d.jpg" // <-- мұнда фон суреттің жолын қой
              alt="Background"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black opacity-70"></div>
          </div>

          <div className="relative z-10 text-center px-6 max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Take the First Step
              <br />
              <span className="text-white">Towards a Healthier You</span>
            </h1>
            <p className="mt-6 text-gray-300 text-base md:text-lg">
              Join genex fitness today and transform your life with expert
              guidance, personalized programs, and a supportive community. Your
              fitness journey starts now!
            </p>

            <form className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-8 py-[19px] rounded-xl w-72 text-black font-extrabold text-sm uppercase focus:outline-none bg-white"
                required
              />
              <button
                type="submit"
                class="relative bottom-0 rounded-xl text-[#FFF] font-black bg-[#000] uppercase px-8 py-4 z-10 overflow-hidden ease-in-out duration-700 hover:text-[#000] hover:bg-[#FFF] active:scale-95 active:duration-0 focus:bg-[#FFF] focus:text-[#000] before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#FFF] before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 border-white border"
              >
                <span class="eaes-in-out duration-300">Send Message</span>
              </button>
            </form>
          </div>
        </section>
      </section>
    </main>
  );
}
