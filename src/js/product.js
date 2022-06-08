const productList = [
  {
    id: 1,
    name: "Big and Juicy Wagyu Beef Cheeseburger",
    img: "https://res.cloudinary.com/dn3jydehx/image/upload/v1654695401/images-Lab3/image_drggsn.png",
    time: 30,
    type: "Snack",
},
{
    id: 2,
    name: "Fresh Lime Roasted Salmon",
    img: "https://res.cloudinary.com/dn3jydehx/image/upload/v1654695402/images-Lab3/image4_jndbim.png",
    time: 30,
    type: "Fish",
},
{
    id: 3,
    name: "The Best Easy One Pot Chicken and Rice",
    img: "https://res.cloudinary.com/dn3jydehx/image/upload/v1654695402/images-Lab3/image5_zwralv.png",
    time: 30,
    type: "Snack",
},
{
  id: 4,
  name: "Fresh and Healthy Mixed Mayonnaise",
  img: "https://res.cloudinary.com/dn3jydehx/image/upload/v1654695401/images-Lab3/image1_midunz.png",
  time: 30,
  type: "Healthy",
},
{
id: 5,
name: "The Creamiest Creamy Chicken",
img: "https://res.cloudinary.com/dn3jydehx/image/upload/v1654695402/images-Lab3/image2_guybjl.png",
time: 30,
type: "Noodles",
},
{
id: 6,
name: "Fruity Pancake with Orange & Blueberry",
img: "https://res.cloudinary.com/dn3jydehx/image/upload/v1654695402/images-Lab3/image3_hju3rr.png",
time: 30,
type: "Sweet",
},
  ];
  
  function showProducts(products) {
    if (!Array.isArray(products) || products.length == 0) return false;
  
    let result = "";
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        result +=`<div
        class="my-2 shadow grid place-items-stretch group hover:shadow-xl duration-500 rounded-t-3xl hover:bg-gray-50 rounded-b-md"
      > 
        <a href="./detail.html?id=${product.id}"><img src="${product.img}" class="rounded-3xl w-full" alt="" /></a>
        <h3
        class="ml-2 text-lg text-[#111928] group-hover:text-red-500 font-semibold mt-5"
      >
        <a href="./detail.html?id=${product.id}">${product.name}</a></h3>
        <p class="ml-2 text-xl font-semibold my-2 text-red-600">$30</p>
        <button
          class="hover:text-red-500 text-sm font-semibold my-2 py-3 text-white rounded-md w-full bg-gray-800 hover:bg-gray-900"
        >
          Add To Cart
        </button>
      </div>`;
    }
    return result;
  }
  
  document.getElementById("products").innerHTML = showProducts(productList);
  