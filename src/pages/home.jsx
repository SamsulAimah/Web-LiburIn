import React from "react";
import { Star, Users, Bath, Home } from "lucide-react";
import MyButton from "../components/Elements/Button";
import { Link } from "react-router-dom";

const HomePage = () => {
  const villas = [
    {
      id: 1,
      name: "Mahayoga Ubud",
      location: "Ubud, Bali",
      price: "Rp 1.000.000",
      image: "villa (1).jpg",
    },
    {
      id: 2,
      name: "Mahayoga Ubud",
      location: "Ubud, Bali",
      price: "Rp 1.000.000",
      image: "villa (7).jpg",
    },
    {
      id: 3,
      name: "Mahayoga Ubud",
      location: "Ubud, Bali",
      price: "Rp 1.000.000",
      image: "villa (3).jpg",
    },
    {
      id: 4,
      name: "Mahayoga Ubud",
      location: "Ubud, Bali",
      price: "Rp 1.000.000",
      image: "villa (4).jpg",
    },
    {
      id: 5,
      name: "Mahayoga Ubud",
      location: "Ubud, Bali",
      price: "Rp 1.000.000",
      image: "villa (5).jpg",
    },
    {
      id: 6,
      name: "Mahayoga Ubud",
      location: "Ubud, Bali",
      price: "Rp 1.000.000",
      image: "villa (6).jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="relative h-[420px] md:h-[460px] lg:h-[520px]">
        <img
          src="villa (2).jpg"
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.55]"
        />
        <div className="absolute inset-0 max-w-6xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col justify-center">
          <span className="text-xl text-orange-500 font-bold mb-3">
            Your accommodation services
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
            Anytime and
            <br />
            Anywhere
          </h1>
          <p className="text-sm md:text-base text-white/90 max-w-2xl mt-4">
            Hotela is here to make your trip easier. Find your dream hotel with
            the best price, fast process, and the most complete location
            options.
          </p>
        </div>
      </header>

      {/* ================= VILLA SECTION ================= */}
      <section className="py-16 bg-white">
        <div className="text-center mb-8">
          <h2 className="flex items-center justify-center text-2xl font-bold text-orange-500 mb-2">
            <Home className="mr-2 w-6 h-6 text-orange-500" />
            <span className="font-bold text-orange-500">Recom</span>{" "}
            <span className="font-bold text-gray-900">ended Villa</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>
        {/* Villa Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-8">
          {villas.map((villa) => (
            <div
              key={villa.id}
              className="bg-white rounded-xl shadow-[0_3px_10px_rgba(0,0,0,0.1)] hover:shadow-[0_5px_18px_rgba(0,0,0,0.18)] transition duration-300 overflow-hidden"
            >
              <img
                src={villa.image}
                alt={villa.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-800">{villa.name}</h3>
                <p className="text-sm text-gray-500">{villa.location}</p>

                <div className="flex items-center justify-between mt-2">
                  <p className="text-orange-500 font-bold">{villa.price}</p>
                </div>

                <div className="flex items-center text-gray-500 text-sm mt-2 space-x-3">
                  <div className="flex items-center gap-1">
                    <Users size={14} /> <span>4 Orang</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath size={14} /> <span>2 Kamar Mandi</span>
                  </div>
                </div>

                <Link
                  to="/pemesanan"
                  className="bg-orange-500 text-white text-sm rounded-md mt-3 px-4 py-2 w-full text-center hover:bg-orange-600 transition cursor-pointer block"
                >
                  Booking Sekarang
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= Bestseler Villa Section ================= */}
      <section className="py-2 bg-white">
        <div className="max-w-7xl mx-auto px-8 mb-8">
          <h2 className="flex items-center justify-start text-2xl font-bold mb-2">
            <Home className="mr-2 w-6 h-6 text-orange-500" />
            <span className="font-bold text-orange-500">Best</span>
            <span className="font-bold text-gray-900 ml-1">seller Villa</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 rounded-full"></div>
        </div>
        {/* Villa Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-8">
          {villas.map((villa) => (
            <div
              key={villa.id}
              className="bg-white rounded-xl shadow-[0_3px_10px_rgba(0,0,0,0.1)] hover:shadow-[0_5px_18px_rgba(0,0,0,0.18)] transition duration-300 overflow-hidden"
            >
              <img
                src={villa.image}
                alt={villa.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-800">{villa.name}</h3>
                <p className="text-sm text-gray-500">{villa.location}</p>

                <div className="flex items-center justify-between mt-2">
                  <p className="text-orange-500 font-bold">{villa.price}</p>
                </div>

                <div className="flex items-center text-gray-500 text-sm mt-2 space-x-3">
                  <div className="flex items-center gap-1">
                    <Users size={14} /> <span>4 Orang</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath size={14} /> <span>2 Kamar Mandi</span>
                  </div>
                </div>

                <Link
                  to="/pemesanan"
                  className="bg-orange-500 text-white text-sm rounded-md mt-3 px-4 py-2 w-full text-center hover:bg-orange-600 transition cursor-pointer block"
                >
                  Booking Sekarang
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PAGINATION ================= */}
      <div className="flex justify-center items-center mt-12 space-x-3 mb-16">
        {/* Prev */}
        <button className="cursor-pointer bg-orange-500 text-white text-sm px-4 py-2 rounded-md hover:bg-orange-600 flex items-center gap-2">
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14M5 12l4-4m-4 4 4 4"
            />
          </svg>
        </button>

        {/* Page Numbers */}
        {[1, 2, 3, 4].map((page) => (
          <button
            key={page}
            className={`text-sm px-4 py-2 rounded-md font-medium cursor-pointer ${
              page === 1
                ? "bg-orange-600 text-white"
                : "bg-orange-400 text-white hover:bg-orange-600"
            }`}
          >
            {page}
          </button>
        ))}

        {/* Ellipsis */}
        <span className="px-2 text-base font-bold text-gray-700">...</span>

        {/* Next */}
        <button className="cursor-pointer bg-orange-500 text-white text-sm px-4 py-2 rounded-md hover:bg-orange-600 flex items-center gap-2">
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 12H5m14 0-4 4m4-4-4-4"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
