import { FaFacebookF, FaInstagram, FaTiktok, FaPhoneAlt } from "react-icons/fa";
import FormDrawer from "./FormDrawer";
import Recommended from "./Recommended";

function Footer() {
  const iconsTab = [
    { icon: <FaFacebookF />, href: "https://www.facebook.com/willapoprad" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/willa_poprad" },
    { icon: <FaTiktok />, href: "https://www.tiktok.com/@willapoprad" },
  ];
  return (
    <div>
      <Recommended />
      <footer className="bg-customBlue font-josefin text-white">
        <div className="container mx-auto py-[5rem]">
          <div className="flex justify-between flex-col md:flex-row items-center md:items-start  md:gap-[5rem] text-left">
            {/* left side */}
            <div className="flex flex-col items-center md:p-0 py-4 gap-4">
              <h5 className="text-2xl font-semibold mb-2">
                Skontaktuj się z nami
              </h5>
              <div className="flex flex-col items-center">
                <p>Rytro 306</p>
                <p>33-343 Rytro</p>
                <p className="mb-3">biuro@willapoprad.com</p>
                <a
                  href="tel:501513400"
                  className="flex items-center gap-1 text-lg hover:text-gray-100"
                >
                  <FaPhoneAlt
                    className="text-sm mr-1 mb-1"
                    style={{ marginBottom: "0.3rem" }}
                  />
                  501 513 400
                </a>
                <a
                  href="tel:184400211"
                  className="flex items-center gap-1 py-5 text-lg"
                >
                  <FaPhoneAlt
                    className="text-sm mr-1 mb-1"
                    style={{ marginBottom: "0.3rem" }}
                  />
                  18 440 02 11
                </a>
              </div>
            </div>
            {/* middle div */}
            <div className="flex flex-col items-center gap-4 relative">
              <p className="text-2xl font-semibold footer-main">
                Dowiedz się więcej
              </p>
              <a
                className="text-base hover:text-gray-100 text-white transition duration-300 hover:scale-105"
                href="/"
              >
                Strona Główna
              </a>
              <a
                className="text-base hover:text-gray-100 text-white transition duration-300 hover:scale-105"
                href="/wesela"
              >
                Wesela
              </a>
              <a
                className="text-base hover:text-gray-100 text-white transition duration-300 hover:scale-105"
                href="/klub"
              >
                Klub
              </a>
              <a
                className="text-base hover:text-gray-100 text-white transition duration-300 hover:scale-105"
                href="/restauracja"
              >
                Restauracja
              </a>
              <a
                className="text-base hover:text-gray-100 text-white transition duration-300 hover:scale-105"
                href="/restauracja#Menu"
              >
                Menu
              </a>
              <a
                className="text-base hover:text-gray-100 text-white transition duration-300 hover:scale-105"
                href="/pokoje"
              >
                Pokoje
              </a>

              <FormDrawer />
            </div>

            {/* right side */}
            <div className="flex flex-col items-center md:p-0 py-4 gap-4">
              <p className="text-2xl font-semibold mb-2">
                Obserwuj Willę Poprad
              </p>
              <div className="flex gap-7 text-[18px] text-[#646464] justify-center md:justify-start">
                {iconsTab.map(({ icon, href }, index) => {
                  return (
                    <div
                      key={index}
                      className="text-2xl text-customBlue bg-[#efefef] p-2 rounded-full hover:bg-[#00637d] hover:text-white"
                      style={{ transition: "all 0.3s" }}
                    >
                      <a href={href} target="_blank">
                        {icon}
                      </a>
                    </div>
                  );
                })}
              </div>
              <p className="text-[16px] font-medium text-white mt-2">
                © {new Date().getFullYear()} Willa Poprad <br /> Design by{" "}
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/eryktomaszek/"
                >
                  Eryk
                </a>
                <span> & </span>
                <a target="_blank" href="https://gigarat.it/">
                  Wiktor
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
