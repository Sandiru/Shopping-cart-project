const products = [
  {
    id: 0,
    name: "Samsung Galaxy F04",
    price: 55990.99,
    instock: 100,
    category: "budget",
    description:
      "The Samsung Galaxy F04 is an Android-based smartphone designed and manufactured by Samsung Electronics. It was announced on January 4, 2023.",
    imgSrc: "./img/Samsung-Galaxy-F04.jpg",
  },
  {
    id: 1,
    name: "Xiaomi Redmi A2",
    price: 49000.59,
    instock: 43,
    category: "budget",
    description:
      "Redmi A2 mobile was launched on 19th May 2023. The phone comes with a 6.52-inch touchscreen display offering a resolution of 1600x720 pixels (HD+) and an aspect ratio of 20:9. It comes with 2GB, 4GB of RAM. The Redmi A2 runs Android 13 and is powered by a 5,000mAh battery.",
    imgSrc: "./img/Redmi A2.jpg",
  },
  {
    id: 2,
    name: "Xiaomi-Poco-C51",
    price: 65950.59,
    instock: 10,
    category: "budget",
    description:
      "Poco C51 is based on Android 13 Go Edition and packs 64GB of inbuilt storage that can be expanded via microSD card (up to 1000GB). The Poco C51 is a dual-SIM mobile. The Poco C51 measures 164.90 x 76.75 x 9.09mm (height x width x thickness) and weighs 192.00 grams.",
    imgSrc: "./img/Xiaomi-Poco-C51.jpg",
  },
  {
    id: 3,
    name: "Infinix-Smart-7",
    price: 45990.99,
    instock: 5,
    category: "budget",
    description:
      "Infinix Smart 7 comes with Android 12 OS, 6.6 inches IPS LCD Display, MediaTek Helio A22 (12 nm) Chipset, Dual Rear and 5MP Selfie Camera.",
    imgSrc: "./img/Infinix-Smart-7.jpg",
  },
  {
    id: 4,
    name: "Oneplus nord T2",
    price: 100900.95,
    instock: 4,
    category: "midrange",
    description:
      "The OnePlus Nord 2T 5G uses a MediaTek Dimensity 1300 SoC which replaces the Dimensity 1200-AI SoC in the previous model. This is the only core upgrade you get with the ‘T' model this year, but more about this processor in the next section. The phone comes with LPDDR4X RAM and UFS 3.1 storage, and has a dual-SIM tray which supports up to two 5G nano-SIM cards, with dual-standby functionality.",
    imgSrc: "./img/One plus nord T2.jpg",
  },
  {
    id: 5,
    name: "Google Pixel 6A",
    price: 89990.59,
    instock: 40,
    category: "midrange",
    description:
      "Google Tensor makes Pixel 6a super smart, secure, and powerful. It’s the first chip designed by Google just for Pixel.",
    imgSrc: "./img/Google-Pixel-6A-6GB-RAM-128GB-2.jpg",
  },
  {
    id: 6,
    name: "Honor magic 5",
    price: 159000.59,
    instock: 40,
    category: "midrange",
    description:
      "The Honor Magic 5 is powered by a Qualcomm SM8550-AB Snapdragon 8 Gen 2 (4 nm) CPU processor with 12GB RAM, 256GB ROM. The device also has a 6.73-inch OLED (1224 x 2688 pixels, 439 ppi) display. It has a Triple: 54 MP, f/1.9, (wide), 1/1.49, PDAF + 32 MP, f/2.4, (telephoto), PDAF, OIS, 2.5x optical zoom + 50MP rear camera and supports Wifi, Bluetooth, NFC, 4G LTE and 5G. It packs in a Li-Po 5100 mAh, non-removable battery at 7.8mm device thickness and weight 191g, running on Android 13, MagicOS 7.1.",
    imgSrc: "./img/honor-magic5-lite-silver.jpg",
  },
  {
    id: 7,
    name: "Samsung Galaxy A54",
    price: 139000.95,
    instock: 40,
    category: "midrange",
    description:
      "The Samsung Galaxy A54 comes with 6.4-inch Super AMOLED display with 120Hz refresh rate and 5000mAh battery. Specs also include Triple camera setup on the back with 50MP main sensor and 32MP front selfie camera.",
    imgSrc: "./img/Samsung-Galaxy-A54-5G-1.jpg",
  },
  {
    id: 8,
    name: "iPhone SE 3",
    price: 99990.59,
    instock: 40,
    category: "midrange",
    description:
      "The Apple iPhone SE (2022) is a powerful yet pocket-sized iPhone. The new iPhone SE 3 retains the design from the previous model with a 4.7-inch LCD display and Touch ID. The rear camera is a 12-megapixel one, while the selfie shooter is 7MP. The phone is powered by Apple's A15 Bionic chip combined with 64GB of internal storage as standard, although 128GB and 256GB variants are also available.",
    imgSrc: "./img/IPhone-SE3-2022.png",
  },
  {
    id: 9,
    name: "Oppo Find X6 Pro",
    price: 156900.99,
    instock: 40,
    category: "flagship",
    description:
      "Oppo Find X3 mobile was launched on 11th March 2021. The phone comes with a 6.70-inch touchscreen display offering a resolution of 1440x3216 pixels at a pixel density of 525 pixels per inch (ppi). The display sports Gorilla Glass for protection. Oppo Find X3 is powered by a 3.2GHz octa-core Qualcomm Snapdragon 870 processor. It comes with 8GB of RAM. The Oppo Find X3 runs Android 11 and is powered by a 4500mAh battery. The Oppo Find X3 supports proprietary fast charging.",
    imgSrc: "./img/Oppo-Find-X6-Pro_featured-image-packshot-review.jpg",
  },
  {
    id: 10,
    name: "Samsumng S23 ultra",
    price: 289000.99,
    instock: 40,
    category: "flagship",
    description:
      "The Samsung Galaxy S23 Ultra is the headliner of the S23 series. Specifications are top-notch including 6.8-inch Dynamic AMOLED display with 120Hz refresh rate, Snapdragon 8 Gen 2 processor, 5000mAh battery, up to 12gigs of RAM, and 1TB of storage. In the camera department, a quad-camera setup is presented with two telephoto sensors.",
    imgSrc: "./img/s23 ultra Green 3--1675329089.png",
  },
  {
    id: 11,
    name: "Samsung Z flip 5",
    price: 390000.59,
    instock: 40,
    category: "flagship",
    description:
      "The Samsung Galaxy Z Flip 5 comes with 6.7-inch Dynamic AMOLED display with 120Hz refresh rate and Qualcomm Snapdragon 8 Gen 2 processor. Specs also include 3.4-inch Super AMOLED cover display, 3700mAh battery and Dual camera setup on the back.",
    imgSrc: "./img/samsung-z-fold-5-my-smartprice-1.jpg",
  },
  {
    id: 12,
    name: "iphone 14 pro max",
    price: 459900.99,
    instock: 100,
    category: "flagship",
    description:
      "The iPhone 14 Plus comes with 6.7-inch OLED display with 120Hz refresh rate and Apple's improved Bionic A16 processor. On the back there is a Triple camera setup with 48MP main camera.",
    imgSrc: "./img/14-pro-max.jpg",
  },
  {
    id: 13,
    name: "Redmi note 12",
    price: 59950.99,
    instock: 100,
    category: "midrange",
    description:
      "The smartphone is fueled by a non-removable Li-Po 5000 mAh battery + Fast charging 33W. The phone runs on Android 12 + MIUI 13 operating system. The smartphone is powered by the Qualcomm SM4375 Snapdragon 4 Gen 1 Octa-core processor while the GPU is Adreno 619. The device comes in 6.67 inches size and the display is Samsung AMOLED that provides 1080 x 2400 pixels resolution.",
    imgSrc: "./img/Redmi-note-12.jpg",
  },
];


