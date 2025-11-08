const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white py-6">
      <div className="container mx-auto px-4">
        <p className="text-sm text-white text-center">
          &copy; {new Date().getFullYear()} Libur.In. All rights reserved. by Samsul Aimah
        </p>
      </div>
    </footer>
  );
};

export default Footer;
