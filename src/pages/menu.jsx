import React from "react";
import { Star, Users, Bath, ArrowRight, Home, MapPin } from "lucide-react";
import MyButton from "../components/Elements/Button";
import { Link } from "react-router-dom";

const MenuPage = () => {
  // 🔸 Data Fitur (Feature Cards)
  const features = [
    {
      id: 1,
      title: "Fasilitas Mewah",
      desc: "Nikmati kenyamanan dengan fasilitas premium di setiap villa kami.",
      image: "villa (7).jpg",
    },
    {
      id: 2,
      title: "Pemandangan Indah",
      desc: "Dikelilingi panorama alam yang menenangkan hati dan pikiran.",
      image: "villa (8).jpg",
    },
    {
      id: 3,
      title: "Pelayanan Terbaik",
      desc: "Staf kami siap melayani dengan sepenuh hati setiap saat.",
      image: "villa (9).jpg",
    },
    {
      id: 4,
      title: "Harga Terjangkau",
      desc: "Dapatkan pengalaman mewah dengan harga yang bersahabat.",
      image: "villa (10).jpg",
    },
  ];

  // 🔸 Data Villa
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
      image: "villa (2).jpg",
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

  // 🔸 Data Submenu Villa
  const subVillas = [
    {
      id: 1,
      name: "Villa Ubud",
      icon: <MapPin className="w-4 h-4" />,
      link: "/villa/ubud",
    },
    {
      id: 2,
      name: "Villa Bandung",
      icon: <MapPin className="w-4 h-4" />,
      link: "/villa/bandung",
    },
    {
      id: 3,
      name: "Villa Bali",
      icon: <MapPin className="w-4 h-4" />,
      link: "/villa/bali",
    },
    {
      id: 4,
      name: "Villa Lombok",
      icon: <MapPin className="w-4 h-4" />,
      link: "/villa/lombok",
    },
  ];

  // 🔸 Data Testimoni
  const reviews = [
    {
      id: 1,
      name: "Rina Andika",
      review:
        "Pelayanan sangat ramah, tempatnya bersih dan nyaman. Pasti balik lagi!",
      rating: 5,
    },
    {
      id: 2,
      name: "Dimas Putra",
      review:
        "Pemandangan alamnya luar biasa, cocok buat healing bareng keluarga.",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Ayu Lestari",
      review:
        "Desain interior villa-nya mewah banget. Recommended banget pokoknya!",
      rating: 5,
    },
    {
      id: 4,
      name: "Rafi Pradana",
      review:
        "Harga sesuai dengan kualitasnya. Sangat puas dengan pelayanan di sini.",
      rating: 4.5,
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* ================= FLASH SALE SECTION ================= */}
      <section className="text-center py-16 relative">
        <h2 className="text-3xl font-bold text-orange-500">Flash Sale!!</h2>
        <p className="text-lg text-gray-600 mt-2">Diskon hingga 25%</p>

        {/* Countdown */}
        <div className="flex justify-center space-x-4 mt-6">
          {[
            { label: "Jam", value: "08" },
            { label: "Menit", value: "25" },
            { label: "Detik", value: "59" },
          ].map((item, index) => (
            <div key={index} className="bg-gray-100 px-4 py-2 rounded-lg">
              <p className="text-xl font-bold text-orange-500">{item.value}</p>
              <p className="text-sm text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 px-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_14px_rgba(0,0,0,0.15)] transition duration-300"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="font-bold text-gray-800">{feature.title}</h3>
                <p className="text-sm text-gray-500">{feature.desc}</p>
                <Link
                  to="/detail-paket"
                  className="flex items-center text-orange-500 text-sm mt-2 hover:underline"
                >
                  Baca Selengkapnya <ArrowRight className="ml-1" size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= VILLA SECTION ================= */}
      <section className="py-16 bg-white">
        <div className="text-center mb-8">
          <h2 className="flex items-center justify-center text-2xl font-bold text-orange-500 mb-2">
            <Home className="mr-2 w-6 h-6 text-orange-500" />
            Villa
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Submenu Villa */}
        <div className="flex justify-center flex-wrap gap-4 mb-10">
          {subVillas.map((sub) => (
            <Link
              key={sub.id}
              to={sub.link}
              className="flex items-center gap-2 bg-white border border-orange-200 text-orange-600 hover:bg-orange-500 hover:text-white px-4 py-2 rounded-full text-sm font-medium transition shadow-sm hover:shadow-md"
            >
              {sub.icon}
              {sub.name}
            </Link>
          ))}
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

      {/* ================= TESTIMONI ================= */}
      <section className="bg-gray-100 py-16 px-8">
        <h3 className="text-center text-2xl font-bold text-gray-700">
          Ulasan Mereka
        </h3>
        <p className="text-center text-gray-500 mb-10">
          Pendapat tamu kami tentang layanan kami
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-xl p-4 text-center shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_14px_rgba(0,0,0,0.15)] transition duration-300"
            >
              <p className="text-sm text-gray-600 mb-3">“{rev.review}”</p>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={`${
                      i < Math.floor(rev.rating)
                        ? "text-orange-400"
                        : "text-gray-300"
                    } fill-current`}
                  />
                ))}
              </div>
              <p className="font-semibold text-gray-800">{rev.name}</p>
              <p className="text-xs text-gray-500">{rev.rating}★</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MenuPage;
