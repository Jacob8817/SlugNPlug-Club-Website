import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import Footer from '../components/Footer';
import { HoverBorderGradient } from '../components/ui/cardhover';
import { IconHome, IconClock, IconLocation, IconChevronDown } from '@tabler/icons-react';

const Update3 = () => {
  const [data, setData] = useState(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "EventCollection", "EventData");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const scrollToContent = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {data ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="min-h-screen flex flex-col justify-between relative"
          style={{ background: data.Gradient }}
        >
          <Navbar />

          <motion.div
            onClick={scrollToContent}
            className="fixed bottom-5 left-1/2 transform -translate-x-1/2 cursor-pointer z-50"
            whileHover={{ scale: 1.1 }}
          >
            {/* Optionally, add an icon or text here */}
          </motion.div>

          <div className="h-16"></div>

          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 min-h-screen -mt-5 p-4 md:p-10 gap-6 items-center"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 flex flex-col space-y-6"
            >
              <motion.img
                src={data.Image_link}
                alt="Event"
                className="w-full rounded-2xl"
                whileHover={{ scale: 1.05 }}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-2">
                {[
                  { id: 1, icon: <IconHome />, title: data.Event_Date, desc: "Join us on" },
                  { id: 2, icon: <IconClock />, title: data.Event_time || "TBA", desc: "Event time" },
                  { id: 3, icon: <IconLocation />, title: data.Event_location, desc: "Event Venue" },
                  { id: 4, icon: <IconHome />, title: data.Members, desc: "Team Size" },
                ].map((item) => (
                  <motion.div
                    key={item.id}
                    className="text-white h-[15vh] md:h-[20vh] p-4 rounded-xl flex flex-col justify-center items-center bg-slate-700 shadow-lg"
                    whileHover={{ scale: 1.1 }}
                  >
                    {item.icon}
                    <p className="text-sm md:text-lg font-semibold">{item.desc}</p>
                    <p className="text-sm md:text-lg font-semibold">{item.title}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col space-y-6"
            >
              <div className="p-4 bg-slate-600 text-white bg-opacity-50 md:-mt-20 rounded-xl">
                <h2 className="text-lg font-semibold mb-2">Event Coordinator</h2>
                <ul className="list-disc pl-5">
                  {data.Event_coordinator && data.Event_coordinator.map((coordinator, i) => (
                    <li key={i}>{coordinator}</li>
                  ))}
                </ul>
              </div>
              <div className="p-4 bg-slate-600 text-white bg-opacity-50 rounded-xl">
                <h2 className="text-lg font-semibold mb-2">Event Staff</h2>
                <ul className="list-disc pl-5">
                  {data.Event_staff && data.Event_staff.map((staff, i) => (
                    <li key={i}>{staff}</li>
                  ))}
                </ul>
              </div>
              <div className="p-4 bg-slate-600 text-white bg-opacity-50 rounded-xl">
                <h2 className="text-lg font-semibold">Event Description</h2>
                <p className="mt-2">{data.Event_desc}</p>
              </div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  className="dark:bg-black bg-white text-black dark:text-white flex items-center justify-center w-full py-3"
                >
                  <a href={data.Link}>Register</a>
                </HoverBorderGradient>
              </motion.div>
            </motion.div>
          </motion.div>
          
      
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-white text-center min-h-screen flex justify-center items-center"
        >
          Loading...
        </motion.div>
      )}
    </>
  );
};

export default Update3;
