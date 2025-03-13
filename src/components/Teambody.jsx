import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HoverBorderGradient } from "./ui/cardhover";
import { CardBody, CardContainer, CardItem } from "./ui/card3d";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

const ThreeCardsPage = ({ title, cardsData }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-700">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-4">
        {cardsData.map((card, idx) => (
          <CardContainer key={idx} className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto gap-10 sm:w-[18rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {card.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {card.desc}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={card.img}
                  alt={card.title}
                  height="700"
                  width="500"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  href={card.link}
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Go now →
                </CardItem>
                <a href={card.link} target="_blank" rel="noopener noreferrer">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    LinkedIn
                  </CardItem>
                </a>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

const Teambody = () => {
  const { width: windowWidth } = useWindowSize();
  const isMobile = windowWidth < 600;

  const cards = [
    {
      name: "ADITHYA",
      role: "PRESIDENT",
      bgcol: "#000000",
      width: isMobile ? "70vw" : "42vw",
      height: isMobile ? "auto" : "100vh",
      fontsize: isMobile ? "3.5rem" : "13rem",
      marginLeft: isMobile ? "5vw" : "25vw",
      roleMargin: isMobile ? "0" : "30rem",
      image:
        "https://res.cloudinary.com/dbbanqws0/image/upload/v1739301576/WhatsApp_Image_2025-02-02_at_12.39.05_6c1357f1-removebg-preview_n8irwp.png",
      linkedin: "https://www.linkedin.com/in/adithya-k-065750255",
    },
    {
      name: "SHREYANSH",
      role: "TECHNICAL LEAD",
      bgcol: "#000000",
      width: isMobile ? "70vw" : "42vw",
      height: isMobile ? "auto" : "100vh",
      fontsize: isMobile ? "2rem" : "10rem",
      marginLeft: isMobile ? "5vw" : "25vw",
      roleMargin: isMobile ? "0" : "30rem",
      image:
        "https://res.cloudinary.com/dbbanqws0/image/upload/v1739592123/781af330-7c83-4d23-8fe0-6e78854164a3_xlr7dt.png",
      linkedin: "https://www.linkedin.com/in/shreyanshjain05/",
    },
    {
      name: "PRINCE",
      role: "MANAGEMENT LEAD",
      bgcol: "#000000",
      width: isMobile ? "70vw" : "42vw",
      height: isMobile ? "auto" : "100vh",
      fontsize: isMobile ? "3.5rem" : "13rem",
      marginLeft: isMobile ? "5vw" : "25vw",
      roleMargin: isMobile ? "0" : "30rem",
      image:
        "https://res.cloudinary.com/dbbanqws0/image/upload/v1739301579/WhatsApp_Image_2025-02-01_at_20.16.07_0d548d4e-removebg-preview_t7sb2l.png",
      linkedin: "https://www.linkedin.com/in/prince/",
    },
    {
      name: "GIRISELVAN",
      role: "WEBDEV LEAD",
      bgcol: "#000000",
      width: isMobile ? "70vw" : "47vw",
      height: isMobile ? "auto" : "110vh",
      fontsize: isMobile ? "2.7rem" : "10rem",
      marginLeft: isMobile ? "5vw" : "25vw",
      roleMargin: isMobile ? "0" : "30rem",
      image:
        "https://res.cloudinary.com/dbbanqws0/image/upload/v1739301577/WhatsApp_Image_2025-02-01_at_23.59.25_5daf0f40-removebg-preview_ba18vs.png",
      linkedin: "https://www.linkedin.com/in/giriselvan-s/",
    },
    {
      name: "VISWANATHAN",
      role: "MARKETING LEAD",
      bgcol: "#00000",
      width: isMobile ? "70vw" : "70vw",
      height: isMobile ? "auto" : "170vh",
      fontsize: isMobile ? "2rem" : "8rem",
      marginLeft: isMobile ? "5vw" : "15vw",
      marginTop: isMobile ? "-10vh" : "-30vh",
      roleMargin: isMobile ? "0" : "34rem",
      image:
        "https://res.cloudinary.com/dbbanqws0/image/upload/v1739696218/WhatsApp_Image_2025-02-16_at_14.24.03_54e66d4d-removebg_myg5vy.png",
      linkedin: "https://www.linkedin.com/in/viswa-url/",
    },
    {
      name: "AJAY",
      role: "DESIGN LEAD",
      bgcol: "#000000",
      width: isMobile ? "70vw" : "50vw",
      height: isMobile ? "auto" : "90vh",
      fontsize: isMobile ? "2rem" : "13rem",
      marginLeft: isMobile ? "5vw" : "35vw",
      roleMargin: isMobile ? "0" : "30rem",
      marginTop: isMobile ? "0" : "20vh",
      image:
        "https://res.cloudinary.com/dbbanqws0/image/upload/v1739612895/WhatsApp_Image_2025-02-15_at_14.41.24_e50760e0-removebg_ybjuls.png",
      linkedin:
        "https://www.linkedin.com/in/ajay-kumar-reddy-krishnareddy-gari-a4885b282/",
    },
  ];

  const randomizedIndices = useMemo(() => {
    const indices = [...Array(cards.length).keys()];
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices;
  }, [cards.length]);

  // Only the extraPages data is made responsive using an IIFE.
  const extraPages = (() => {
    const isMobileExtra =
      typeof window !== "undefined" ? window.innerWidth < 600 : false;
    // Helper: adjust image URLs for mobile if needed.
    const adjustImageForMobile = (url) => {
      if (!url) return url;
      return isMobileExtra ? url.replace("w_1000", "w_500") : url;
    };

    return [
      {
        id: "extra1",
        bg: "#000000",
        title: isMobileExtra ? "MEET THE FAM" : "MEET THE FAM !!!",
        cardsData: [
          {
            title: "KEERTHANA",
            desc: "Technical , Management ",
            img: adjustImageForMobile(
              "https://res.cloudinary.com/dbbanqws0/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1739959942/kr_selfie_-_KEERTHANA_RANGANATHAN_RA2311027020061_psbgpm.jpg"
            ),
            link: "https://www.linkedin.com/in/keerthana-ranganathan-7b3931293",
          },
          {
            title: "KEERTHANA",
            desc: "Technical",
            img:
              "https://res.cloudinary.com/dbbanqws0/image/upload/v1739960190/ke_lfjqs4.png",
            link:
              "https://www.linkedin.com/in/keerthana-santhosh-b57901341?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          },
          {
            title: "KOUSHIK",
            desc: "Technical",
            img:
              "https://res.cloudinary.com/dbbanqws0/image/upload/v1739974232/Koushik_Photo_-_KOUSHIK_BHARADWAJ_SRIRAM_RA2411003020307_ywfune.jpg",
            link: "https://www.linkedin.com/in/koushik-bharadwaj-65a528329/",
          },
          {
            title: "ANANTHA",
            desc: "Technical ",
            img:
              "https://res.cloudinary.com/dbbanqws0/image/upload/v1739974548/20250216_205101_-_ANANTHA_VISHWA_PRIYA_Y_RA2411047020009_kxkrkj.jpg",
            link:
              "https://www.linkedin.com/in/anantha-vishwa-priya-y-943350312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          },
        ],
      },
      {
        id: "extra2",
        bg: "#000000",
        title: isMobileExtra ? "MEET THE FAM" : "MEET THE FAM !!!",
        cardsData: [
          {
            title: "ANGELINA",
            desc: "Technical",
            img:
              "https://res.cloudinary.com/dbbanqws0/image/upload/v1739974545/421_-_9897498867_-_-_ANGELINA_BENNY_RA2411003020011_dmybg9.jpg",
            link:
              "https://www.linkedin.com/in/angelina-b-5131172aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          },
          {
            title: "SOOREJ",
            desc: "Technical",
            img:
              "https://res.cloudinary.com/dbbanqws0/image/upload/v1739974547/IMG-20230629-WA0001_-_SOOREJ_S_RA2211003020039_pxsqnu.jpg",
            link:
              "https://www.linkedin.com/in/soorej-subramanian-902003280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          },
          {
            title: "PRADYUMAN",
            desc: "Marketing ",
            img:
              "https://res.cloudinary.com/dbbanqws0/image/upload/v1739974547/IMG_20241212_233827_829_-_PRADYUMAN_SINGH_RA2411003020477_gholhp.jpg",
            link:
              "https://www.linkedin.com/in/pradyuman-singh-7a0245330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          },
          {
            title: "KAUSHIK",
            desc: "Technical ",
            img:
              "https://res.cloudinary.com/dbbanqws0/image/upload/v1739974549/IMG-20250217-WA0003_-_KAUSHIK_RAMANATHAN_RA2411003020306_apowdz.jpg",
            link:
              "https://www.linkedin.com/in/kaushik-ramanathan-99873a327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          },
        ],
      },
      {
        id: "extra3",
        bg: "#000000",
        title: isMobileExtra ? "MEET THE FAM" : "MEET THE FAM !!!",
        cardsData: [
          {
            title: "AARAV",
            desc: "Technical , Marktering",
            img:
              "https://res.cloudinary.com/dbbanqws0/image/upload/v1739974547/IMG_5969_Original_-_AARAV_MOHAN_GUPTA_RA2411003020126_ozfd6u.jpg",
            link:
              "https://www.linkedin.com/in/aarav-mohan-gupta-41559b273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
          },
          {
            title: "ABHAY",
            desc: "Technical ",
            img:
              "https://res.cloudinary.com/dbbanqws0/image/upload/v1739974546/IMG_4217_-_ABHAY_KUMAR_RA2411027020016_hoszar.jpg",
            link:
              "https://www.linkedin.com/in/abhay-kumar-891a9a32a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
          },
          {
            title: "PRAMOD",
            desc: "Technical, Frontend , UI-UX Design",
            img:
              "https://res.cloudinary.com/dbbanqws0/image/upload/v1739974546/cadndidphoto2_-_PRAMOD_GURURAJAN_RA2111043020006_ljxmam.jpg",
            link: "https://www.linkedin.com/in/pramodgururajan/",
          },
          {
            title: "MAHALAKSHMI",
            desc: "Marketing, management, content",
            img:
              "https://res.cloudinary.com/dbbanqws0/image/upload/v1739977167/IMG-20250216-WA0009_-_MAHALAKSHMI_V_RA2311003020154_sqhos0.jpg",
            link:
              "https://www.linkedin.com/in/mahalakshmi-v-34b6002a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          },
        ],
      },
      {
        id: "extra4",
        bg: "#000000",
        title: isMobileExtra ? "MEET THE FAM" : "MEET THE FAM !!!",
        cardsData: [
          {
            title: "MONIKA",
            desc: "Management",
            img: "https://www.linkedin.com/in/monika-suresh-966645315/",
            link: "https://example.com/4-1",
          },
          {
            title: "ADITYA",
            desc: "Technical",
            img:
              "https://res.cloudinary.com/dbbanqws0/image/upload/v1739974545/1000000798_-_ADITYA_KUMAR_RA2411003020497_xxqsyl.jpg",
            link: "https://example.com/4-2",
          },
          {
            title: "ADITI",
            desc: "Technical",
            img:
              "https://res.cloudinary.com/dbbanqws0/image/upload/v1739974545/20241222_123406_-_ADITI_PRABAKARAN_RA2311003020140_oun3mk.webp",
            link: "https://www.linkedin.com/in/aditi-prabakaran/",
          },
          {
            title: "TANVI",
            desc: "Technical",
            img:
              "https://res.cloudinary.com/dbbanqws0/image/upload/v1739974548/IMG_20250122_153302_984_-_TANVI_KORADA_RA2411028020037_j40hsy.webp",
            link: "",
          },
        ],
      },
      {
        id: "extra5",
        bg: "#000000",
        title: isMobileExtra ? "MEET THE FAM" : "MEET THE FAM !!!",
        cardsData: [
          {
            title: "ADITYA",
            desc: "Management",
            img:
              "https://res.cloudinary.com/dbbanqws0/image/upload/v1739974547/_DSC8389_-_ADITYA_KUMAR_RA2411003020497_hx1tju.jpg",
            link: "",
          },
          {
            title: "RUPA",
            desc: "Marketing ",
            img:
              "https://res.cloudinary.com/dbbanqws0/image/upload/v1739974548/IMG-20241029-WA0108_-_RUPA_PRIYA_MADDHERLA_RA2411003020272_dllfev.jpg",
            link:
              "https://in.linkedin.com/in/rupa-priya-maddherla-9a302a312",
          },
          {
            title: "VYSHAKH",
            desc: "Technical ",
            img:
              "https://res.cloudinary.com/dbbanqws0/image/upload/v1739974548/IMG-20240915-WA0018_-_VYSHAKH_A_NAIR_RA2411003020055_baovzk.jpg",
            link:
              "https://www.linkedin.com/in/vyshakh-a-nair-439198322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          },
          {
            title: "AMEY",
            desc: "Technical , marketing ",
            img:
              "https://res.cloudinary.com/dbbanqws0/image/upload/v1739974548/IMG-20250116-WA0138_-_AMEY_SINGH_RA2411027020021_gxvqve.jpg",
            link:
              "https://www.linkedin.com/in/amey-singh-66818923b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          },
        ],
      },
      {
        id: "extra6",
        bg: "#000000",
        title: isMobileExtra ? "MEET THE FAM" : "MEET THE FAM !!!",
        cardsData: [
          {
            title: "HARMANPREET",
            desc: "Technical",
            img:
              "https://res.cloudinary.com/dbbanqws0/image/upload/v1739976783/IMG-20240330-WA0002_-_HARMANPREET_KAUR_RA2411003020053_bekies.jpg",
            link:
              "https://www.linkedin.com/in/harmanpreet-kaur-9b70ab32b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          },
          {
            title: "ATHARVA",
            desc: "Technical",
            img:
              "https://res.cloudinary.com/dbbanqws0/image/upload/v1739977840/The_only_pic_i_have_-_ATHARVA_IYER_RA2411028020044_pyxvvc.jpg",
            link: "",
          },
        ],
      },
    ];
  })();

  const totalSlides = cards.length + extraPages.length;
  const [index, setIndex] = useState(0);
  const ticking = useRef(false);
  const touchStartYRef = useRef(null);

  const handleWheel = (e) => {
    const threshold = 20;
    if (ticking.current) return;
    if (e.deltaY > threshold && index < totalSlides - 1) {
      setIndex(index + 1);
      ticking.current = true;
      setTimeout(() => (ticking.current = false), 500);
    } else if (e.deltaY < -threshold && index > 0) {
      setIndex(index - 1);
      ticking.current = true;
      setTimeout(() => (ticking.current = false), 500);
    }
  };

  const handleTouchStart = (e) => {
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (touchStartYRef.current !== null) {
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartYRef.current - touchEndY;
      const threshold = 50;
      if (deltaY > threshold && index < totalSlides - 1) {
        setIndex(index + 1);
      } else if (deltaY < -threshold && index > 0) {
        setIndex(index - 1);
      }
      touchStartYRef.current = null;
    }
  };

  let slideContent = null;
  let bgColor = "#000000";
  if (index < cards.length) {
    const currentCard = cards[randomizedIndices[index]];
    bgColor = currentCard.bgcol;
    slideContent = (
      <div
        style={{
          position: "relative",
          textAlign: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <motion.p
          className="font-ethnocentric text-white font-extrabold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.8 }}
          style={
            isMobile
              ? {
                  position: "absolute",
                  top: "8%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontSize: currentCard.fontsize,
                  whiteSpace: "nowrap",
                  zIndex: -1,
                }
              : {
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: currentCard.fontsize,
                  whiteSpace: "nowrap",
                  zIndex: -1,
                }
          }
        >
          {currentCard.name}
        </motion.p>

        <motion.img
          src={currentCard.image}
          alt={currentCard.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={
            isMobile
              ? {
                  width: currentCard.width,
                  height: currentCard.height,
                  objectFit: "contain",
                  position: "absolute",
                  top: currentCard.name === "VISWANATHAN" ? "5%" : "25%",
                  left: "12.5%",
                  transform: "translate(-50%, -50%)",
                }
              : {
                  width: currentCard.width,
                  height: currentCard.height,
                  objectFit: "contain",
                  marginLeft: currentCard.marginLeft,
                  marginTop: currentCard.marginTop ? currentCard.marginTop : undefined,
                }
          }
        />

        <motion.p
          className="font-ethnocentric text-white font-extrabold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 0.8 }}
          style={
            isMobile
              ? {
                  position: "absolute",
                  top: "19%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontSize: "1.4rem",
                  whiteSpace: "nowrap",
                  marginLeft: currentCard.roleMargin,
                }
              : {
                  position: "absolute",
                  top: "calc(50% + 8rem)",
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontSize: "2rem",
                  whiteSpace: "nowrap",
                  marginLeft: currentCard.roleMargin,
                }
          }
        >
          {currentCard.role}
        </motion.p>

        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center justify-center gap-2"
          style={{
            position: "absolute",
            bottom: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 999,
            padding: "0.5rem 1rem",
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
            alt="LinkedIn"
            style={{ width: "20px", height: "20px" }}
          />
          <a href={currentCard.linkedin} target="_blank" rel="noopener noreferrer">
            Linkedin
          </a>
        </HoverBorderGradient>
      </div>
    );
  } else {
    const extraIndex = index - cards.length;
    const extraPage = extraPages[extraIndex];
    bgColor = extraPage.bg;
    slideContent = <ThreeCardsPage title={extraPage.title} cardsData={extraPage.cardsData} />;
  }

  return (
    <div
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{ height: "100vh", overflow: "hidden" }}
    >
      <motion.div
        animate={{ backgroundColor: bgColor }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{
          position: "fixed",
          width: "100%",
          height: "100vh",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            position: "fixed",
            width: "100%",
            padding: isMobile ? "0 1rem" : "0",
          }}
        >
          {slideContent}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Teambody;
