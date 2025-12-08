const products = {
  "products": [
    {
      "id": "PROD001",
      "name": "Trendy Brown Coat",
      "category": "Coats",
      "subcategory": "Women",
      "price": 75.00,
      "originalPrice": 150.00,
      "discount": "50% off",
      "rating": 4.8,
      "reviews": 245,
      "images": [
        "trendy-brown-coat-1.jpg",
        "trendy-brown-coat-2.jpg",
        "trendy-brown-coat-3.jpg",
        "trendy-brown-coat-4.jpg"
      ],
      "sizes": ["S", "M", "L", "XL", "XXL"],
      "inStock": true
    },
    {
      "id": "PROD002",
      "name": "Classy Light Coat",
      "category": "Coats",
      "subcategory": "Women",
      "price": 165.00,
      "originalPrice": 220.00,
      "discount": "25% off",
      "rating": 4.9,
      "reviews": 189,
      "images": [
        "classy-light-coat-1.jpg",
        "classy-light-coat-2.jpg",
        "classy-light-coat-3.jpg",
        "classy-light-coat-4.jpg"
      ],
      "sizes": ["S", "M", "L", "XL"],
      "inStock": true
    },
    {
      "id": "PROD003",
      "name": "Modern Brown Dress",
      "category": "Dresses",
      "subcategory": "Women",
      "price": 90.00,
      "originalPrice": 100.00,
      "discount": "10% off",
      "rating": 4.8,
      "reviews": 156,
      "images": [
        "modern-brown-dress-1.jpg",
        "modern-brown-dress-2.jpg",
        "modern-brown-dress-3.jpg",
        "modern-brown-dress-4.jpg"
      ],
      "sizes": ["XS", "S", "M", "L", "XL"],
      "inStock": true
    },
    {
      "id": "PROD004",
      "name": "Floral Summer Dress",
      "category": "Dresses",
      "subcategory": "Women",
      "price": 65.00,
      "originalPrice": 95.00,
      "discount": "30% off",
      "rating": 4.7,
      "reviews": 203,
      "images": [
        "floral-summer-dress-1.jpg",
        "floral-summer-dress-2.jpg",
        "floral-summer-dress-3.jpg",
        "floral-summer-dress-4.jpg"
      ],
      "sizes": ["XS", "S", "M", "L"],
      "inStock": true
    },
    {
      "id": "PROD005",
      "name": "Elegant Black Blouse",
      "category": "Tops",
      "subcategory": "Women",
      "price": 45.00,
      "originalPrice": 60.00,
      "discount": "25% off",
      "rating": 4.6,
      "reviews": 178,
      "images": [
        "elegant-black-blouse-1.jpg",
        "elegant-black-blouse-2.jpg",
        "elegant-black-blouse-3.jpg",
        "elegant-black-blouse-4.jpg"
      ],
      "sizes": ["XS", "S", "M", "L", "XL"],
      "inStock": true
    },
    {
      "id": "PROD006",
      "name": "Casual Denim Jeans",
      "category": "Jeans",
      "subcategory": "Women",
      "price": 55.00,
      "originalPrice": 80.00,
      "discount": "30% off",
      "rating": 4.5,
      "reviews": 312,
      "images": [
        "casual-denim-jeans-1.jpg",
        "casual-denim-jeans-2.jpg",
        "casual-denim-jeans-3.jpg",
        "casual-denim-jeans-4.jpg"
      ],
      "sizes": ["26", "28", "30", "32", "34", "36"],
      "inStock": true
    },
    {
      "id": "PROD007",
      "name": "Silk Evening Saree",
      "category": "Sarees",
      "subcategory": "Women",
      "price": 120.00,
      "originalPrice": 200.00,
      "discount": "40% off",
      "rating": 4.9,
      "reviews": 267,
      "images": [
        "silk-evening-saree-1.jpg",
        "silk-evening-saree-2.jpg",
        "silk-evening-saree-3.jpg",
        "silk-evening-saree-4.jpg"
      ],
      "sizes": ["Free Size"],
      "inStock": true
    },
    {
      "id": "PROD008",
      "name": "Classic Navy Blazer",
      "category": "Blazers",
      "subcategory": "Men",
      "price": 95.00,
      "originalPrice": 150.00,
      "discount": "35% off",
      "rating": 4.7,
      "reviews": 198,
      "images": [
        "classic-navy-blazer-1.jpg",
        "classic-navy-blazer-2.jpg",
        "classic-navy-blazer-3.jpg",
        "classic-navy-blazer-4.jpg"
      ],
      "sizes": ["S", "M", "L", "XL", "XXL"],
      "inStock": true
    },
    {
      "id": "PROD009",
      "name": "Cotton White Shirt",
      "category": "Shirts",
      "subcategory": "Men",
      "price": 35.00,
      "originalPrice": 50.00,
      "discount": "30% off",
      "rating": 4.6,
      "reviews": 421,
      "images": [
        "cotton-white-shirt-1.jpg",
        "cotton-white-shirt-2.jpg",
        "cotton-white-shirt-3.jpg",
        "cotton-white-shirt-4.jpg"
      ],
      "sizes": ["S", "M", "L", "XL", "XXL"],
      "inStock": true
    },
    {
      "id": "PROD010",
      "name": "Slim Fit Black Jeans",
      "category": "Jeans",
      "subcategory": "Men",
      "price": 60.00,
      "originalPrice": 85.00,
      "discount": "30% off",
      "rating": 4.8,
      "reviews": 356,
      "images": [
        "slim-fit-black-jeans-1.jpg",
        "slim-fit-black-jeans-2.jpg",
        "slim-fit-black-jeans-3.jpg",
        "slim-fit-black-jeans-4.jpg"
      ],
      "sizes": ["28", "30", "32", "34", "36", "38"],
      "inStock": true
    },
    {
      "id": "PROD011",
      "name": "Leather Jacket Brown",
      "category": "Jackets",
      "subcategory": "Men",
      "price": 180.00,
      "originalPrice": 280.00,
      "discount": "35% off",
      "rating": 4.9,
      "reviews": 289,
      "images": [
        "leather-jacket-brown-1.jpg",
        "leather-jacket-brown-2.jpg",
        "leather-jacket-brown-3.jpg",
        "leather-jacket-brown-4.jpg"
      ],
      "sizes": ["M", "L", "XL", "XXL"],
      "inStock": true
    },
    {
      "id": "PROD012",
      "name": "Casual Polo T-Shirt",
      "category": "T-Shirts",
      "subcategory": "Men",
      "price": 28.00,
      "originalPrice": 40.00,
      "discount": "30% off",
      "rating": 4.5,
      "reviews": 512,
      "images": [
        "casual-polo-tshirt-1.jpg",
        "casual-polo-tshirt-2.jpg",
        "casual-polo-tshirt-3.jpg",
        "casual-polo-tshirt-4.jpg"
      ],
      "sizes": ["S", "M", "L", "XL", "XXL"],
      "inStock": true
    },
    {
      "id": "PROD013",
      "name": "Formal Gray Coat",
      "category": "Coats",
      "subcategory": "Men",
      "price": 140.00,
      "originalPrice": 220.00,
      "discount": "35% off",
      "rating": 4.7,
      "reviews": 167,
      "images": [
        "formal-gray-coat-1.jpg",
        "formal-gray-coat-2.jpg",
        "formal-gray-coat-3.jpg",
        "formal-gray-coat-4.jpg"
      ],
      "sizes": ["M", "L", "XL", "XXL"],
      "inStock": true
    },
    {
      "id": "PROD014",
      "name": "Designer Sunglasses",
      "category": "Sunglasses",
      "subcategory": "Accessories",
      "price": 85.00,
      "originalPrice": 120.00,
      "discount": "30% off",
      "rating": 4.6,
      "reviews": 234,
      "images": [
        "designer-sunglasses-1.jpg",
        "designer-sunglasses-2.jpg",
        "designer-sunglasses-3.jpg",
        "designer-sunglasses-4.jpg"
      ],
      "inStock": true
    },
    {
      "id": "PROD015",
      "name": "Leather Handbag",
      "category": "Handbags",
      "subcategory": "Accessories",
      "price": 110.00,
      "originalPrice": 180.00,
      "discount": "40% off",
      "rating": 4.8,
      "reviews": 298,
      "images": [
        "leather-handbag-1.jpg",
        "leather-handbag-2.jpg",
        "leather-handbag-3.jpg",
        "leather-handbag-4.jpg"
      ],
      "inStock": true
    },
    {
      "id": "PROD016",
      "name": "Smart Watch Black",
      "category": "Watches",
      "subcategory": "Accessories",
      "price": 150.00,
      "originalPrice": 250.00,
      "discount": "40% off",
      "rating": 4.7,
      "reviews": 412,
      "images": [
        "smart-watch-black-1.jpg",
        "smart-watch-black-2.jpg",
        "smart-watch-black-3.jpg",
        "smart-watch-black-4.jpg"
      ],
      "inStock": true
    },
    {
      "id": "PROD017",
      "name": "Straw Summer Hat",
      "category": "Hats",
      "subcategory": "Accessories",
      "price": 30.00,
      "originalPrice": 45.00,
      "discount": "35% off",
      "rating": 4.5,
      "reviews": 189,
      "images": [
        "straw-summer-hat-1.jpg",
        "straw-summer-hat-2.jpg",
        "straw-summer-hat-3.jpg",
        "straw-summer-hat-4.jpg"
      ],
      "inStock": true
    },
    {
      "id": "PROD018",
      "name": "Gold Chain Necklace",
      "category": "Jewelry",
      "subcategory": "Accessories",
      "price": 95.00,
      "originalPrice": 140.00,
      "discount": "30% off",
      "rating": 4.9,
      "reviews": 276,
      "images": [
        "gold-chain-necklace-1.jpg",
        "gold-chain-necklace-2.jpg",
        "gold-chain-necklace-3.jpg",
        "gold-chain-necklace-4.jpg"
      ],
      "inStock": true
    },
    {
      "id": "PROD019",
      "name": "Canvas Backpack",
      "category": "Bags",
      "subcategory": "Accessories",
      "price": 55.00,
      "originalPrice": 75.00,
      "discount": "25% off",
      "rating": 4.6,
      "reviews": 345,
      "images": [
        "canvas-backpack-1.jpg",
        "canvas-backpack-2.jpg",
        "canvas-backpack-3.jpg",
        "canvas-backpack-4.jpg"
      ],
      "inStock": true
    },
    {
      "id": "PROD020",
      "name": "Leather Belt Brown",
      "category": "Belts",
      "subcategory": "Accessories",
      "price": 35.00,
      "originalPrice": 50.00,
      "discount": "30% off",
      "rating": 4.7,
      "reviews": 421,
      "images": [
        "leather-belt-brown-1.jpg",
        "leather-belt-brown-2.jpg",
        "leather-belt-brown-3.jpg",
        "leather-belt-brown-4.jpg"
      ],
      "inStock": true
    }
  ]
};

export default products;