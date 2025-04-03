"use client";

import { useParams } from "next/navigation";
import React, {  useState } from "react";
import { loadStripe } from '@stripe/stripe-js';



const activities = [
  {
    id: 1,
    country: 'China',
    title: 'Mutianyu Great Wall ',
    rating: 0,
    reviews: 0,
    tags: ['Escorted Tour', 'Tour & Cruise'],
    price: 79,
    nights: '4 nights',
    image: [
        '/assests/img1.jpg',
        '/assests/img2.jpg',
        '/assests/img1.jpg'
    ],
    onSale: false,
  },
  {
    id: 2,
    country: 'Thailand',
    title: ' Krabi Adventure',
    rating: 5,
    reviews: 1,
    tags: ['Rail Tour', 'River Cruise'],
    price: 210,
    oldPrice: 250,
    nights: '2 days',
    image: [
      '/assests/img2.jpg',
      '/assests/img1.jpg',
      '/assests/img2.jpg'
    ],
    onSale: true,
  },
  {
    id: 3,
    country: 'Tokyo, Japan',
    title: 'Cherry Blossom Experience',
    rating: 0,
    reviews: 0,
    tags: ['Rail Tour', 'Wildlife'],
    price: 62,
    oldPrice: 87,
    nights: '2 days - 1 night',
    image: [
      '/assests/img3.jpg',
      '/assests/img2.jpg',
      '/assests/img3.jpg'
    ],
    onSale: true,
  },
  {
    id: 4,
    country: 'China',
    title: 'Mutianyu Great Wall ',
    rating: 0,
    reviews: 0,
    tags: ['Escorted Tour', 'Rail Tour'],
    price: 79,
    nights: '4 nights',
    image: [
      '/assests/img4.jpg',
      '/assests/img3.jpg',
      '/assests/img4.jpg'

    ],
    onSale: false,
  },
  {
    id: 5,
    country: 'Thailand',
    title: ' Krabi Adventure',
    rating: 5,
    reviews: 1,
    tags: ['Rail Tour', 'River Cruise'],
    price: 210,
    oldPrice: 250,
    nights: '2 days',
    image: [
      '/assests/img3.jpg',
      '/assests/img1.jpg',
      '/assests/img3.jpg'
    ],
    onSale: true,
  },
  {
    id: 6,
    country: 'Tokyo, Japan',
    title: 'Cherry Blossom Experience',
    rating: 0,
    reviews: 0,
    tags: ['Rail Tour', 'Wildlife'],
    price: 62,
    oldPrice: 87,
    nights: '2 days - 1 night',
    image: [
      '/assests/img2.jpg',
      '/assests/img3.jpg',
      '/assests/img2.jpg'
    ],
    onSale: true,
  },
  {
    id: 7,
    country: 'Tokyo, Japan',
    title: 'Cherry Blossom Experience',
    rating: 0,
    reviews: 0,
    tags: ['Rail Tour', 'Wildlife'],
    price: 62,
    oldPrice: 87,
    nights: '2 days - 1 night',
    image: [
      '/assests/img3.jpg',
      '/assests/img2.jpg',
      '/assests/img3.jpg'
    ],
    onSale: true,
  },
  {
    id: 8,
    country: 'China',
    title: 'Mutianyu Great Wall ',
    rating: 0,
    reviews: 0,
    tags: ['Escorted Tour', 'Rail Tour'],
    price: 79,
    nights: '4 nights',
    image: [
      '/assests/img4.jpg',
      '/assests/img3.jpg',
      '/assests/img4.jpg'
    ],
    onSale: false,
  },
  {
    id: 9,
    country: 'Thailand',
    title: ' Krabi Adventure',
    rating: 5,
    reviews: 1,
    tags: ['Rail Tour', 'River Cruise'],
    price: 210,
    oldPrice: 250,
    nights: '2 days',
    image: [
      '/assests/img1.jpg',
      '/assests/img2.jpg',
      '/assests/img1.jpg'
    ],
    onSale: true,
  },
  {
    id: 10,
    country: 'Tokyo, Japan',
    title: 'Cherry Blossom Experience',
    rating: 0,
    reviews: 0,
    tags: ['Rail Tour', 'Wildlife'],
    price: 62,
    oldPrice: 87,
    nights: '2 days - 1 night',
    image: [
      '/assests/img3.jpg',
      '/assests/img2.jpg',
      '/assests/img3.jpg'
    ],
    onSale: true,
  },
  {
    id: 11,
    country: 'China',
    title: 'Mutianyu Great Wall ',
    rating: 0,
    reviews: 0,
    tags: ['Escorted Tour', 'Tour & Cruise'],
    price: 79,
    nights: '4 nights',
    image: [
      '/assests/img3.jpg',
      '/assests/img1.jpg',
      '/assests/img3.jpg'
    ],
    onSale: false,
  },
  {
    id: 12,
    country: 'Thailand',
    title: ' Krabi Adventure',
    rating: 5,
    reviews: 1,
    tags: ['Rail Tour', 'River Cruise'],
    price: 210,
    oldPrice: 250,
    nights: '2 days',
    image: [
      '/assests/img4.jpg',
      '/assests/img1.jpg',
      '/assests/img3.jpg'
    ],
    onSale: true,
  },
];

const Page = () => {
  const params = useParams();
  const id = Number(params.id);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    extras: {
      park: false,
      wifi: false,
    },
    tickets: 1,
  });
  const activity = activities.find((item) => item.id === id);

  if (!activity) {
    return <p className="text-center text-gray-500 mt-20">Activity not found</p>;
  }

 

  const TICKET_PRICE = activity.price;
  const totalPrice = formData.tickets * TICKET_PRICE;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    if (name === 'park' || name === 'wifi') {
      setFormData((prev) => ({
        ...prev,
        extras: { ...prev.extras, [name]: checked },
      }));
    } else if (name === 'tickets') {
      const ticketCount = parseInt(value) || 1;
      setFormData((prev) => ({ ...prev, tickets: ticketCount }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };
  
  

  const handleBuyNow = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("handleBuyNow function triggered!");
    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);
   
  
    if (!stripe) {
      console.error("Stripe failed to load.");
      alert("Payment system is currently unavailable.");
      return;
    }
  
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: activity.title,
        price: totalPrice,
        tickets: formData.tickets,
      }),
    });
  
    const data = await res.json();
    console.log("Checkout Response:", data); 
    if (!data.url) {
      console.error("Stripe Checkout URL is missing!", data);
      return;
    }
    
    if (res.ok && data.url) {
      window.location.href = data.url;
    } else {
      console.error("Checkout Error:", data.error);
      alert("An error occurred during checkout. Please try again.");
    }
  };
  
  

  return (
    <div className="max-w-7xl mx-auto mt-24 px-6">
      <h1 className="text-4xl font-bold text-black mb-4">{activity.title}</h1>
      <div className="flex flex-wrap gap-3 mb-4">
        {activity.tags.map((tag, idx) => (
          <span key={idx} className="bg-blue-100 text-sky-700 px-3 py-1 text-sm rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <p className="text-gray-600 text-lg mb-8">📍 {activity.country}</p>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="md:col-span-2">
          <img
            src={activity.image[0]}
            alt={activity.title}
            className="w-full h-96 object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="flex flex-col gap-4">
          <img
            src={activity.image[1]}
            alt={`${activity.title} 1`}
            className="w-full h-44 object-cover rounded-lg shadow"
          />
          <img
            src={activity.image[2]}
            alt={`${activity.title} 2`}
            className="w-full h-44 object-cover rounded-lg shadow"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
  
  <div className="md:col-span-2 bg-white p-8 rounded-xl shadow-md border border-gray-100">
    <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Tour Details</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-base">
      <div className="flex items-center gap-2">
        <span className="font-semibold">Duration:</span> {activity.nights}
      </div>
      <div className="flex items-center gap-2">
        <span className="font-semibold">Language:</span> English
      </div>
      <div className="flex items-center gap-2">
        <span className="font-semibold">Tour Types:</span> {activity.tags.join(', ')}
      </div>
      <div className="flex items-center gap-2">
        <span className="font-semibold">Rating:</span> {activity.rating} ⭐ ({activity.reviews} reviews)
      </div>
    </div>
  </div>

 
  <div className="bg-gray-50 p-8 rounded-xl shadow-md border border-gray-200 ring-2 ring-sky-600">
  <p className="text-gray-500 text-sm mb-1">Starting From</p>
    <p className="text-3xl font-bold text-sky-700 mb-4">${TICKET_PRICE}</p>

    <form className="flex flex-col gap-4">
      <div className="flex flex-col">
        <label htmlFor="firstName" className="text-sm text-gray-700 mb-1">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          className="border rounded-md px-3 py-2 text-gray-950 focus:outline-none focus:ring-2 focus:ring-sky-300"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="lastName" className="text-sm text-gray-700 mb-1">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          className="border rounded-md px-3 py-2 text-gray-950 focus:outline-none focus:ring-2 focus:ring-sky-300"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="text-sm text-gray-700 mb-1">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="border rounded-md px-3 py-2 text-gray-950 focus:outline-none focus:ring-2 focus:ring-sky-300"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="phone" className="text-sm text-gray-700 mb-1">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="border rounded-md px-3 py-2 text-gray-950 focus:outline-none focus:ring-2 focus:ring-sky-300"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="date" className="text-sm text-gray-700 mb-1">Select Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          className="border rounded-md px-3 py-2 text-gray-950 focus:outline-none focus:ring-2 focus:ring-sky-300"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="tickets" className="text-sm text-gray-700 mb-1">Number of Tickets</label>
        <input
          type="number"
          id="tickets"
          name="tickets"
          min="1"
          value={formData.tickets}
          onChange={handleInputChange}
          className="border rounded-md px-3 py-2 text-gray-950 focus:outline-none focus:ring-2 focus:ring-sky-300"
        />
      </div>

      <div className="flex gap-4 mt-2">
        <label className="flex items-center gap-2 text-sm text-gray-700">
          <input
            type="checkbox"
            name="park"
            checked={formData.extras.park}
            onChange={handleInputChange}
            className="accent-sky-500"
          />
          Park Access
        </label>
        <label className="flex items-center gap-2 text-sm text-gray-700">
          <input
            type="checkbox"
            name="wifi"
            checked={formData.extras.wifi}
            onChange={handleInputChange}
            className="accent-sky-500"
          />
          Free Wi-Fi
        </label>
      </div>

      <div className="mt-6 border-t pt-4">
        <p className="text-gray-700 font-semibold text-lg">Total Price: <span className="text-sky-700">${totalPrice}</span></p>
        <button
 
 onClick={handleBuyNow}
 className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg mt-4"
>
  Book Now for ${totalPrice}
</button>

      </div>
    </form>
  </div>
</div>
</div>
  );
};



export default Page;
