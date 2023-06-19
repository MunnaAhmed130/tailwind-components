const bannerImg = [
  {
    src: "https://i.ibb.co/MNtH00X/luca-david-ia8u-TRs-ZZYY-unsplash.jpg",
    alt: "a cycle indoor",
    blurHash:
      "Y15OZ@~q004nogRPRkWV004n-;-;WBxuoLay?as.t8t8oLNGozofIUbIV@RjV@kCWBf6",
    text: {
      title: "Bicycles for Adventures",
      description:
        "We create the best Cycling Experiences of a lifetime. We can fit you with the perfect bike because we carry all sizes and types of bikes",
    },
  },
  {
    src: "https://i.ibb.co/hK5zTvv/background.png",
    alt: "outdoor cycling",
    blurHash:
      "Y15OZ@~q004nogRPRkWV004n-;-;WBxuoLay?as.t8t8oLNGozofIUbIV@RjV@kCWBf6",
    text: {
      title: "Bicycles for Adventures",
      description:
        "We create the best Cycling Experiences of a lifetime. We can fit you with the perfect bike because we carry all sizes and types of bikes",
    },
  },
  {
    src: "https://i.ibb.co/PgvhsyP/h1-bannernew.jpg",
    blurHash:
      "Y15OZ@~q004nogRPRkWV004n-;-;WBxuoLay?as.t8t8oLNGozofIUbIV@RjV@kCWBf6",
    text: {
      title: "Bicycles for Adventures",
      description:
        "We create the best Cycling Experiences of a lifetime. We can fit you with the perfect bike because we carry all sizes and types of bikes",
    },
  },
];

const initialState = [
  { idx: 1, pos: 1, text: "1", active: true },
  { idx: 2, pos: 2, text: "2", active: true },
  { idx: 3, pos: 3, text: "3", active: true },
  { idx: 4, pos: 4, text: "4", active: false },
];

const products = [
  {
    name: "CUDA Dirt Squirt BMX Bike",
    url: "https://i.ibb.co/jfMShDX/Cuda-Dirt-Squirt-BMX-Bike-Orange.png",
    price: "300",
    description:
      "Our 16” wheel Dirt Squirt model is where we find MTB meets BMX and we wanted to keep the weight sensible on this size yet offer a bike that's strong enough to take on the skate park or race track.",
  },
  {
    name: "JULIANA JOPLIN D Aluminum",
    url: "https://i.ibb.co/FBFtwjb/JULIANA-JOPLIN-D-ALUMINUM.png",
    price: "500",
    description:
      "The Joplin's lean frame and 29-inch wheels float over washboard bumps with the same ease it devours jagged ledges, priced at the low end of the Joplin model range.",
  },
  {
    name: "VIVA RYDE ON 26T",
    url: "https://i.ibb.co/8d0kCK3/VIVA-RYDE-ON-26-T-SINGLE-SPEED-CYCLE.jpg",
    price: "360",
    description:
      "Viva Ryde On 26T is a trendy bicycle for men. It features a 19'' rigid steel frame and is ideal for cyclist with height between 5 feet 4 inches to 6 feet 4 ",
  },
  {
    name: "HERO SPRINT Thorn 24T",
    url: "https://i.ibb.co/C0xCMsn/Thorn-24-T-Sports-Cycle.jpg",
    price: "450",
    description:
      "Hero Thorn 24T is an elegantly crafted mountain bicycle , It features 15 inch steel frame and is ideal for cyclist with height between 9 to 16 years opf age .",
  },
  {
    name: "Hero Buzz 20T",
    url: "https://i.ibb.co/dGKrZn0/Buzz-20-T-SBZZ20-RD0003-Road-Cycle-Red.jpg",
    price: "400",
    description:
      "The Joplin's lean frame and 29-inch wheels float over washboard bumps with the same ease it devours jagged ledges, priced at the low end of the Joplin model range.",
  },
  {
    name: "SANTA CRUZ Bronson Aluminum R+",
    url: "https://i.ibb.co/f1kJrD3/Santa-Cruz-Bronson-Aluminum-R.png",
    price: "360",
    description:
      "The junior bicycle is manufactured with a high density steel frame. It has metal mudguards at the front and back along with a metal chain cover.",
  },
  {
    name: "HERO THORN 24T Wrigid Fork ATB DTB+",
    url: "https://i.ibb.co/hBRpxYQ/THORN-24-T-WRIGID-FORK-ATB-Dtb-Plus-Cycle.jpg",
    price: "360",
    description:
      "Hero Cycles Thorn 24T is an entry level cycle with good features like V-brakes, Rigid Suspension, straight handle bar and wide 24 X 2.35 tyres.",
  },
  {
    name: "HERO SPRINT DTB 26T",
    url: "https://i.ibb.co/3f5s9x7/Sprint-Dtb-26t-Road-Cycle.jpg",
    price: "360",
    description:
      "Hero Sprint DTB 26T speed cycle - Black is an awesome dual suspension suspension with 19.7' Steel frame. This cycle is ideal for unisex cyclist with height.",
  },
  {
    name: "Hero Kyoto 26T",
    url: "https://i.ibb.co/ZcbwkN7/Black-Hero-Kyoto-26-T-Single-Speed-Cycle.jpg",
    price: "200",
    description:
      "This mountain bike is ergonomically designed for both kids and adults. It is an ideal daily commuter that features multiple light reflectors to ensure night.",
  },
  {
    name: "HERO Ranger 6 speed DTB VX 26T",
    url: "https://i.ibb.co/qmhY6bc/Ranger-6-Speed-Dtb-Vx-26-T.jpg",
    price: "560",
    description:
      "This DTB cycle is manufactured with a high density steel frame to offer a robust construction. It has a steel pannier rack that offers optimum support for rider.",
  },
];

export { bannerImg, initialState, products };
