"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="flex justify-center">
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="pt-2"
      >
        <h1 className="text-3xl upppercase text-white">Hostel Management</h1>
      </motion.div>
    </div>
  );
}
