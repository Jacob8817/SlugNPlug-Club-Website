"use client";
import React, { useState, useEffect } from "react";
import { HeroParallax } from "../components/ui/parallax";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import Navbar from "../components/Navbar";

const Gallery = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Prev_Events"));
        const eventsArray = querySnapshot.docs.map((doc) => ({
          title: doc.data().Event_desc || "Untitled Event",
          link: doc.data().link || "#",
          thumbnail: doc.data().Image || "https://via.placeholder.com/150",
        }));
        setProducts(eventsArray);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return loading ? (
    <div className="text-center text-white">Loading events...</div>
  ) : (
    <>
    <div className="bg-black h-">
      <Navbar></Navbar>
    <HeroParallax products={products} />
    </div>
    
    </>
  );
};

export default Gallery;
