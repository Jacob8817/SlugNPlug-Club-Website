import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { FloatingDock } from "../components/ui/contact";
import { IconBrandGithub } from "@tabler/icons-react";
import { Parallax } from "react-scroll-parallax";

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [touchStartY, setTouchStartY] = useState(null);

  
  const handleScroll = () => {
    setSwapped(!swapped);
    setIndex((prev) => (prev + 1) % contentData.length);
  };

 
  const handleTouchStart = (e) => {
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e) => {
    if (touchStartY === null) return;
    const touchEndY = e.changedTouches[0].clientY;
    if (touchStartY - touchEndY > 90) {
      handleScroll();
    } else if (touchEndY - touchStartY > 90) {
      handleScroll();
    }
    setTouchStartY(null);
  };

  const links = [
    {
      title: "Instagram",
      icon: (
        <img
          src="https://res.cloudinary.com/dvmfygvr1/image/upload/v1732713785/insta_jtxd1r.png"
          className="h-full w-full"
        />
      ),
      href: "https://www.instagram.com/slugnplug/",
    },
    {
      title: "Medium",
      icon: (
        <img
          src="https://res.cloudinary.com/dvmfygvr1/image/upload/v1732714061/medium_telafr.png"
          className="h-full w-full"
        />
      ),
      href: "https://slugnplug.medium.com",
    },
    {
      title: "Linkedin",
      icon: (
        <img
          src="https://res.cloudinary.com/dvmfygvr1/image/upload/v1732714998/icons8-linkedin-256_sthqsv.png"
          className="h-full w-full"
        />
      ),
      href: "https://www.linkedin.com/company/slug-n-plug/",
    },
    {
      title: "Join Us",
      icon: (
        <img
          src="https://res.cloudinary.com/dbbanqws0/image/upload/v1739391300/logolog_tbht2c.png"
          className="h-full w-full"
        />
      ),
      href: "https://x.com/SnP_SRM",
    },
    {
      title: "Threads",
      icon: (
        <img
          src="https://res.cloudinary.com/dvmfygvr1/image/upload/v1732714718/freepik__background__78845_t27qjy.png"
          className="h-full w-full"
        />
      ),
      href: "https://www.threads.net/@slugnplug",
    },
    {
      title: "X",
      icon: (
        <img
          src="https://res.cloudinary.com/dvmfygvr1/image/upload/v1732715092/icons8-x-144_rvtviv.png"
          className="h-full w-full"
        />
      ),
      href: "https://x.com/SnP_SRM",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/slugnplugofficial",
    },
  ];

  
  const contentData = [
    {
      text: "Welcome to SlugNPlug, a dynamic tech community where passion meets innovation! Founded in 2015, our club was born from the vision of our forward-thinking seniors who aimed to bring together tech enthusiasts eager to explore and master the latest advancements in technology. Over the years, SlugNPlug has become a hub for those interested in data analytics, web development, Artificial Intelligence, and machine learning, offering a variety of workshops and hands-on learning opportunities.",
      logo: "https://res.cloudinary.com/dbbanqws0/image/upload/v1739391300/logolog_tbht2c.png",
      style: { scale: "1", marginTop: "-20px" },
    },
    {
      text: "At SlugNPlug, we don’t just focus on technical skills. We believe in holistic development, encouraging members to explore creative outlets such as writing blog posts, engaging in coding challenges, and participating in thought-provoking debates on trending tech topics. Our events, including Mindwrap and Innovation Quest, have attracted participants from across colleges, allowing students to showcase their talents and make valuable connections in the tech industry.",
      logo: "https://res.cloudinary.com/dbbanqws0/image/upload/v1739382386/WhatsApp_Image_2025-02-12_at_23.12.57_654ee232_w1nrqn.jpg",
      style: {
        scale: "1",
        borderRadius: "40px",
        marginTop: "0px",
      },
    },
    {
      text: "Our club has transformed countless students—from shy freshers into confident presenters, curious minds into innovative thinkers, and independent learners into collaborative powerhouses. SlugNPlug is more than just a club; it's a platform for personal and professional growth, where every member can evolve, innovate, and stay ahead in the ever-changing world of technology. Join us, and let's create the future together!",
      logo: "https://res.cloudinary.com/dbbanqws0/image/upload/v1739393959/WhatsApp_Image_2025-02-12_at_23.17.20_e18ea6e9_df1bcx.jpg",
      style: {
        scale: "1",
        borderRadius: "40px",
        marginTop: "0px",
      },
    },
  ];

  const [index, setIndex] = useState(0);
  const [swapped, setSwapped] = useState(false);

  return (
    <div className="h-screen bg-black flex flex-col items-center overflow-hidden">
      <Navbar />

      {/* Heading with extra top margin on mobile */}
      <div className="h-screen flex flex-col justify-center items-center text-center overflow-x-hidden">
  <motion.div
    className="hidden md:block whitespace-normal mt-20 absolute md:mt-0 md:whitespace-nowrap text-lg md:text-5xl font-bold uppercase text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-700"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2, delay: 1 }}
  >
    WE CALL OURSELVES THE COOLEST CLUB
    <br className="block md:hidden" />
    <p></p> IN SRMRMP
  </motion.div>
</div>


      <div
        onWheel={handleScroll}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="h-screen md:w-full py-10 mt-10 md:mt-0 scale-75 md:scale-100 flex items-center justify-center w-[125vw]"
      >
        <Parallax strength={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:-mt-[15rem] p-5 max-w-5xl">
            <motion.div
              style={{ fontFamily: "lora" }}
              className="text-white leading-8 text-xl text-justify w-full md:w-[35vw] px-4 md:px-0"
              key={index}
              initial={{
                x: swapped ? "-100%" : "100%",
                opacity: 0,
              }}
              animate={{ x: "0%", opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {contentData[index].text}
            </motion.div>

            <motion.div
              key={`image-${index}`}
              initial={{
                x: swapped ? "100%" : "-100%",
                opacity: 0,
              }}
              animate={{ x: "0%", opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="px-4 md:px-0"
            >
              <img
                style={contentData[index].style}
                src={contentData[index].logo}
                className="mx-auto md:ml-[100px]"
                alt="Logo"
              />
            </motion.div>
          </div>
        </Parallax>
      </div>

     
      <div className="hidden md:block fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50">
        <FloatingDock items={links} />
      </div>
    </div>
  );
};

export default About;
