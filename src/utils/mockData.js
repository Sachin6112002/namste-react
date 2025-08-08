

const resObj = [{
    "id": 1,
    "name": "Spicy Delight",
    "image": "https://b.zmtcdn.com/data/pictures/chains/4/18647454/b6fd131cec4f16e3228582a7a6bb2cad_featured_v2.jpg",
    "rating": 4.5,
    "address": "MG Road, Bangalore",
    "cuisine": ["Indian", "Chinese"],
    "price_range": "1000",
    "is_open": true
  },
  {
    "id": 2,
    "name": "Urban Bites",
    "image": "https://b.zmtcdn.com/data/pictures/8/20971868/61ac9c965e2d617fa40c4a5b5c54d8c7_featured_v2.jpg", 
    "rating": 4.2,
    "address": "Connaught Place, Delhi",
    "cuisine": ["Italian", "Fast Food"],
    "price_range": "2000",
    "is_open": false
  },
  {
    "id": 3,
    "name": "Green Leaf Cafe",
    "image": "https://b.zmtcdn.com/data/pictures/0/21784540/f45a3e038ca79ff5d3e98f5f9e421a3b_featured_v2.jpg",
    "rating": 4.0,
    "address": "Kothrud, Pune",
    "cuisine": ["Cafe", "Continental"],
    "price_range": "800",
    "is_open": true
  },
  {
    "id": 4,
    "name": "Royal Dhaba",
    "image": "https://b.zmtcdn.com/data/pictures/chains/9/20146419/4e3d4ebf9336b47fa74794e4518a3daa_featured_v2.jpg",
    "rating": 4.7,
    "address": "Sector 18, Noida",
    "cuisine": ["North Indian"],
    "price_range": "800",
    "is_open": true
  },
  {
    "id": 5,
    "name": "Tasty Sushi",
    "image": "https://b.zmtcdn.com/data/pictures/3/21129823/6c9cd517f4ff9c92fb0a3fd853f4d3c2_featured_v2.jpg",
    "rating": 4.3,
    "address": "Bandra, Mumbai",
    "cuisine": ["Japanese"],
    "price_range": "800",
    "is_open": false
  },
  {
    "id": 6,
    "name": "Street Grill",
    "image": "https://b.zmtcdn.com/data/pictures/chains/1/4751/1ea91d2e8951f9a21b98a17147f5b543_featured_v2.jpg",
    "rating": 4.4,
    "address": "Park Street, Kolkata",
    "cuisine": ["BBQ", "Street Food"],
    "price_range": "500",
    "is_open": true
  },
  {
    "id": 7,
    "name": "The Dessert House",
    "image": "https://b.zmtcdn.com/data/pictures/2/20898612/aedc2a1da86bb72ecd1a1019b61f17cf_featured_v2.jpg",
    "rating": 4.6,
    "address": "Jayanagar, Bangalore",
    "cuisine": ["Bakery", "Desserts"],
    "price_range": "1000",
    "is_open": true
  },
  {
    "id": 8,
    "name": "Ocean's Catch",
    "image": "https://b.zmtcdn.com/data/pictures/chains/6/2786/62ec70420a005ed9811f4e41ca2c4e9c_featured_v2.jpg",
    "rating": 4.3,
    "address": "Marine Drive, Mumbai",
    "cuisine": ["Seafood"],
    "price_range": "1500",
    "is_open": false
  },
  {
    "id": 9,
    "name": "Vegan Vibes",
    "image": "https://b.zmtcdn.com/data/pictures/6/21263496/0bc25ddbfb75f704bdb0c3ec831fc3c0_featured_v2.jpg",
    "rating": 4.1,
    "address": "Sector 62, Noida",
    "cuisine": ["Vegan", "Healthy"],
    "price_range": "900",
    "is_open": true
  },
  {
    "id": 10,
    "name": "Biryani Hub",
    "image": "https://images.unsplash.com/photo-1592861956120-e524fc739696?w=800&h=600&fit=crop",
    "rating": 4.5,
    "address": "Charminar, Hyderabad",
    "cuisine": ["Biryani", "Mughlai"],
    "price_range": "$$",
    "is_open": true
  },
  {
    "id": 11,
    "name": "Pasta Palace",
    "image": "https://b.zmtcdn.com/data/pictures/0/21085960/bbc20950f4a5b0fb5e839bf871056868_featured_v2.jpg",
    "rating": 4.0,
    "address": "MG Road, Pune",
    "cuisine": ["Italian"],
    "price_range": "$$",
    "is_open": false
  },
  {
    "id": 12,
    "name": "Coffee Corner",
    "image": "https://images.unsplash.com/photo-1521305916504-4a1121188589?w=800&h=600&fit=crop",
    "rating": 4.4,
    "address": "Kormangala, Bangalore",
    "cuisine": ["Cafe"],
    "price_range": "$",
    "is_open": true
  },
  {
    "id": 13,
    "name": "The Burger Spot",
    "image": "https://b.zmtcdn.com/data/pictures/7/19642527/4d171ad4c09b22775ff9110a92f61383_featured_v2.jpg",
    "rating": 4.2,
    "address": "CP, Delhi",
    "cuisine": ["Fast Food"],
    "price_range": "$",
    "is_open": true
  },
  {
    "id": 14,
    "name": "Tandoori Nights",
    "image": "https://b.zmtcdn.com/data/pictures/8/21526798/99a665796b20795c3e4bda5d858d6584_featured_v2.jpg",
    "rating": 4.3,
    "address": "Chandni Chowk, Delhi",
    "cuisine": ["North Indian"],
    "price_range": "$$",
    "is_open": false
  },
  {
    "id": 15,
    "name": "Salad Stop",
    "image": "https://b.zmtcdn.com/data/pictures/0/20699560/571228ce39355f717083d381fb0f99a3_featured_v2.jpg",
    "rating": 4.0,
    "address": "Sector 15, Gurgaon",
    "cuisine": ["Healthy", "Salads"],
    "price_range": "$",
    "is_open": true
  },
  {
    "id": 16,
    "name": "Pizza Mania",
    "image": "https://b.zmtcdn.com/data/pictures/2/18208892/7095ff896bb51f9bb7590fcf472d2cda_featured_v2.jpg?output-format=webp",
    "rating": 4.5,
    "address": "Hinjewadi, Pune",
    "cuisine": ["Pizza", "Italian"],
    "price_range": "$$",
    "is_open": true
  },
  {
    "id": 17,
    "name": "Sweet Tooth",
    "image": "https://b.zmtcdn.com/data/pictures/0/21513480/e44c1dc93a08b8b5c5ea903be3d5d985_featured_v2.jpg",
    "rating": 4.6,
    "address": "Banjara Hills, Hyderabad",
    "cuisine": ["Bakery", "Desserts"],
    "price_range": "$$",
    "is_open": false
  },
  {
    "id": 18,
    "name": "Ramen House",
    "image": "https://b.zmtcdn.com/data/pictures/8/20154588/d9362ce5f7431f8a8c7f0c4aeb5f77aa_featured_v2.jpg",
    "rating": 4.3,
    "address": "Saket, Delhi",
    "cuisine": ["Japanese"],
    "price_range": "1200",
    "is_open": true
  },
  {
    "id": 19,
    "name": "South Spice",
    "image": "https://b.zmtcdn.com/data/pictures/6/19257786/51aa6cb08e9977a96432be5718b80bad_featured_v2.jpg",
    "rating": 4.4,
    "address": "T Nagar, Chennai",
    "cuisine": ["South Indian"],
    "price_range": "900",
    "is_open": true
  },
  {
    "id": 20,
    "name": "BBQ Nation",
    "image":"https://b.zmtcdn.com/data/pictures/4/20834994/dbb48ff867679c21a74adddf44878bdc_featured_v2.jpg",
    "rating": 4.5,
    "address": "JP Nagar, Bangalore",
    "cuisine": ["BBQ", "Grill"],
    "price_range": "2100",
    "is_open": true
  },
  {
    "id": 21,
    "name": "Chaat Bazaar",
    "image": "https://b.zmtcdn.com/data/pictures/3/20863533/06fc9c8faa0fcf64c1a56859ae934abb_featured_v2.jpg?output-format=webp",
    "rating": 4.2,
    "address": "SG Road, Ahmedabad",
    "cuisine": ["Street Food", "Chaat"],
    "price_range": "1800",
    "is_open": true
  }
]
export default resObj