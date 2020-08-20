const ProductModel = require("../models/product");
const mongoose = require("mongoose");

const createUser = async () => {
  const dummyProducts = [
    {
      images: [
        "1593513148442-a69e75e7-5b7b-49b5-bdc4-95b81317599a-1_ok_50e11729f3514ba581a50223af07c452_grande.png",
        "1593513148449-8dac2a15-0951-42aa-9593-c488fac5215b-5_ok_8f61043027234de992f8b84181df7789_grande.png",
      ],
      category: "women",
      status: true,
      updatedAt: null,
      deleteAt: null,
      productName: "t-shirt",
      product_attr: [
        {
          _id: "5f2e7cae6665132b54a6f4b2",
          color: "Red",
          size: "L",
          quantity: 100,
        },
        {
          _id: "5f2e7cae6665132b54a6f4b3",
          color: "Blue",
          size: "XL",
          quantity: 200,
        },
      ],
      price: "1000000",
      createdAt: 1596882094282,
    },
    {
      images: [
        "1593513148454-1dbd201f-9328-415f-87ed-2ce1137a765d-6_f9d1e8ba333044bb9381e3f0f942aa40_grande.png",
        "1593513333538-54afb89b-a4a9-4a36-bf8d-c1cbf5daf16e-d_b5cf61f56ee545d5ac447bd4617d2019_grande.png",
      ],
      category: "women",
      status: true,
      updatedAt: null,
      deleteAt: null,
      productName: "abc",
      product_attr: [
        {
          _id: "5f2e7d2ef2a5ca0630de6e66",
          color: "Green",
          size: "L",
          quantity: 100,
        },
        {
          _id: "5f2e7d2ef2a5ca0630de6e67",
          color: "Purple",
          size: "XL",
          quantity: 200,
        },
      ],
      price: "2000000",
      createdAt: 1596882222185,
    },
    {
      images: [
        "1593513333541-f034f2b3-a1a3-49b6-88a2-21026e8c41e6-55_5f5af26d9ea34c8fa5455d341829f549_grande.png",
        "1593513333545-31d9f39e-374a-40a5-bee8-6919669de410-11_036f24068fc7411ea82975e24d2829f8_grande.png",
      ],
      category: "women",
      status: true,
      updatedAt: null,
      deleteAt: null,
      productName: "Short Sleeve",
      product_attr: [
        {
          _id: "5f2e7d2ef2a5ca0630de6e66",
          color: "Blue",
          size: "L",
          quantity: 100,
        },
        {
          _id: "5f2e7d2ef2a5ca0630de6e67",
          color: "White",
          size: "XL",
          quantity: 200,
        },
      ],
      price: "500000",
      createdAt: 1596882222185,
    },
    {
      images: [
        "1593513449011-b7a272f6-14d2-40e8-8d40-e6e4a8f51a7f-1_478bd94b82e1415fa4d29f2e77ce2693_grande.png",
        "1593513449013-15ff0ff8-3bf0-48a3-8d5c-6b3ecbfbaeb5-2_b583fcc4453c484088ec1cddaffa4446_grande.png",
      ],
      category: "women",
      status: true,
      updatedAt: null,
      deleteAt: null,
      productName: "Porcelain Strapless",
      product_attr: [
        {
          _id: "5f2e7d2ef2a5ca0630de6e66",
          color: "Blue",
          size: "L",
          quantity: 100,
        },
        {
          _id: "5f2e7d2ef2a5ca0630de6e67",
          color: "White",
          size: "XL",
          quantity: 200,
        },
      ],
      price: "500000",
      createdAt: 1596882222185,
    },
    {
      images: [
        "1593513565575-2b67599a-fb10-4177-9190-ac28bc09f016-22_922beade9737402b9f5b03594d9244bd_grande.png",
        "1593513565578-1114d8e1-1234-42f3-a42a-fb3a8b5c4c20-22_9247faded0b04c71b51fbaec83dfe691_grande.png",
      ],
      category: "women",
      status: true,
      updatedAt: null,
      deleteAt: null,
      productName: "Women Summer Spaghetti",
      product_attr: [
        {
          _id: "5f2e7d2ef2a5ca0630de6e66",
          color: "Blue",
          size: "L",
          quantity: 100,
        },
        {
          _id: "5f2e7d2ef2a5ca0630de6e67",
          color: "White",
          size: "XL",
          quantity: 200,
        },
      ],
      price: "500000",
      createdAt: 1596882222185,
    },
    {
      images: [
        "1593514093002-fa79a4b5-e78d-4483-9183-0dc8da316e17-1579454387693658816.png",
        "1593514093005-512b0592-c9da-4695-9913-3d47bbcff136-1579454387343218524.png",
      ],
      category: "men",
      status: true,
      updatedAt: null,
      deleteAt: null,
      productName: "Elegant Ruffles",
      product_attr: [
        {
          _id: "5f2e7d2ef2a5ca0630de6e66",
          color: "Blue",
          size: "L",
          quantity: 100,
        },
        {
          _id: "5f2e7d2ef2a5ca0630de6e67",
          color: "White",
          size: "XL",
          quantity: 200,
        },
      ],
      price: "1500000",
      createdAt: 1596882222185,
    },
    {
      images: [
        "1593514220162-21bb2d36-1322-4dba-838c-70e570622c83-1563855046152554678.png",
        "1593514220164-0cac1208-8dfd-47ec-a35d-58ce37c90a7d-1563855046840126137.png",
      ],
      category: "men",
      status: true,
      updatedAt: null,
      deleteAt: null,
      productName: "Casual Party",
      product_attr: [
        {
          _id: "5f2e7d2ef2a5ca0630de6e66",
          color: "Blue",
          size: "L",
          quantity: 100,
        },
        {
          _id: "5f2e7d2ef2a5ca0630de6e67",
          color: "White",
          size: "XL",
          quantity: 200,
        },
      ],
      price: "1200000",
      createdAt: 1596882222185,
    },
    {
      images: [
        "1593514608090-7f182fa2-a392-4078-83d8-e95a063b30f8-tissot-luxury-automatic-black-dial-men_s-watch-t0864071605100_5.jpg",
        "1593514608091-58df2a83-46e3-4411-aced-8080f5213b90-tissot-luxury-automatic-black-dial-men_s-watch-t0864071605100_3_2.jpg",
        "1593514608093-5e20ade5-1b4f-4b65-ae37-cc92066128be-tissot-luxury-automatic-black-dial-men_s-watch-t0864071605100_4_2.jpg",
      ],
      category: "watches",
      status: true,
      updatedAt: null,
      deleteAt: null,
      productName: "Timex Men's Expedition Acadia Full Size Watch",
      product_attr: [
        {
          _id: "5f2e7d2ef2a5ca0630de6e66",
          color: "Blue",
          size: "L",
          quantity: 100,
        },
        {
          _id: "5f2e7d2ef2a5ca0630de6e67",
          color: "White",
          size: "XL",
          quantity: 200,
        },
      ],
      price: "15000000",
      createdAt: 1596882222185,
    },
    {
      images: [
        "1593514725689-57bf8d25-1768-4201-a463-8ab6147d3b28-tissot-luxury-automatic-brown-dial-men_s-watch-t086.407.11.291.00_2_2.jpg",
        "1593514725685-0666f84b-a8e7-49b4-9900-199e198029be-tissot-luxury-automatic-brown-dial-men_s-watch-t086.407.11.291.00_3_2.jpg",
        "1593514725688-4caf3abb-d10f-4b62-95a2-6f7551024a6f-tissot-luxury-automatic-brown-dial-men_s-watch-t086.407.11.291.00_4.jpg",
        "1593514725690-f083a6e2-5fe9-4c97-8aa0-99cb4b0913a1-tissot-luxury-automatic-brown-dial-men_s-watch-t086.407.11.291.00_3_2.jpg",
      ],
      category: "watches",
      status: true,
      updatedAt: null,
      deleteAt: null,
      productName:
        "Fossil Men's Grant Stainless Steel Chronograph Quartz Watch",
      product_attr: [
        {
          _id: "5f2e7d2ef2a5ca0630de6e66",
          color: "Blue",
          size: "L",
          quantity: 100,
        },
        {
          _id: "5f2e7d2ef2a5ca0630de6e67",
          color: "White",
          size: "XL",
          quantity: 200,
        },
      ],
      price: "15000000",
      createdAt: 1596882222185,
    },
    {
      images: [
        "1593514822334-b2d6bc07-bd64-4cbf-a805-c3cd2be6cd61-tory-burch-ella-mini-tote--black-56282-001_4.jpg",
        "1593514914696-54cab0d0-248e-4842-b273-86f6b8ebe00e-gucci-brown-ophidia-gg-shoulder-bag-547939_9ik3t_8745.jpg",
        "1593514914698-5b139699-1f48-4303-bb3c-6699e6afb1bf-gucci-brown-ophidia-gg-shoulder-bag-547939_9ik3t_8745_3.jpg",
      ],
      category: "bag",
      status: true,
      updatedAt: null,
      deleteAt: null,
      productName:
        "Gucci Women's Beige Original GG Canvas With Leather Trim Zip Around Wallet 363423 8616",
      product_attr: [
        {
          _id: "5f2e7d2ef2a5ca0630de6e66",
          color: "Blue",
          size: "L",
          quantity: 100,
        },
        {
          _id: "5f2e7d2ef2a5ca0630de6e67",
          color: "White",
          size: "XL",
          quantity: 200,
        },
      ],
      price: "15000000",
      createdAt: 1596882222185,
    },
  ];

  const predefinedIds = [
    "5c11e82ad3683ee5a6022c65",
    "5c11e82ad3683ee5a6022c66",
    "5c11e82ad3683ee5a6022c67",
    "5c11e82ad3683ee5a6022c68",
    "5c11e82ad3683ee5a6022c69",
    "5c11e82ad3683ee5a6022c6a",
    "5c11e82ad3683ee5a6022c6b",
    "5c11e82ad3683ee5a6022c6c",
    "5c11e82ad3683ee5a6022c6d",
    "5c11e82ad3683ee5a6022c6e",
    "5c11e82ad3683ee5a6022c6f",
    "5c11e82ad3683ee5a6022c6g",
    "5c11e82ad3683ee5a6022c6h",
    "5c11e82ad3683ee5a6022c6i",
    "5c11e82ad3683ee5a6022c6k",
    "5c11e82ad3683ee5a6022c6kq",
  ];

  await ProductModel.deleteMany({});
  await Promise.all(
    dummyProducts.map(async (product, index) => {
      const id = mongoose.Types.ObjectId(predefinedIds[index]);
      return ProductModel.create({ _id: id, ...product });
    })
  );
};
module.exports = createUser;
