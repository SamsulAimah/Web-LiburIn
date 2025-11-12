import { Phone, Mail, MapPin, Send } from "lucide-react";


const ContactPage = ()=>{

    return (
        <div className="bg-white min-h-screen">
          {/* ============== HERO SECTION ============== */}
          <section className="bg-gradient-to-r from-orange-400 to-orange-500 text-white text-center py-16 mt-16">
            <h1 className="text-4xl font-bold mb-4">Hubungi Kami</h1>
            <p className="text-lg opacity-90">
              Kami siap membantu kamu! Jangan ragu untuk menghubungi kami kapan saja.
            </p>
          </section>
    
          {/* ============== CONTACT INFO & FORM ============== */}
          <div className="max-w-6xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* LEFT - Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Informasi Kontak
              </h2>
              <p className="text-gray-600 mb-6">
                Punya pertanyaan seputar pemesanan, villa, atau layanan kami?
                Hubungi kami melalui informasi di bawah ini atau isi form di samping.
              </p>
    
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="text-orange-500 w-5 h-5 mr-3" />
                  <span className="text-gray-700">+62 812-3456-7890</span>
                </div>
                <div className="flex items-center">
                  <Mail className="text-orange-500 w-5 h-5 mr-3" />
                  <span className="text-gray-700">support@libur.in</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-orange-500 w-5 h-5 mr-3" />
                  <span className="text-gray-700">
                    Jl. Raya Ubud No. 12, Bali, Indonesia
                  </span>
                </div>
              </div>
    
              <div className="mt-8">
                <iframe
                  title="Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.306267171448!2d115.26247137501948!3d-8.519340986364076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd22f4fda39b61d%3A0x89cc1b11aa7b4906!2sUbud%2C%20Gianyar%2C%20Bali!5e0!3m2!1sen!2sid!4v1689999999999!5m2!1sen!2sid"
                  className="w-full h-64 rounded-xl border-0 shadow-md"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
    
            {/* RIGHT - Form */}
            <form className="bg-gray-50 p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Kirim Pesan
              </h2>
    
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Nama</label>
                <input
                  type="text"
                  placeholder="Masukkan nama kamu"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
    
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Masukkan email kamu"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
    
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Pesan</label>
                <textarea
                  placeholder="Tulis pesan kamu di sini..."
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                ></textarea>
              </div>
    
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-all duration-300 shadow-md cursor-pointer"
              >
                <Send size={18} />
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      );
}

export default ContactPage