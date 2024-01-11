import RoomCompo from "@/components/RoomCompo";
import React from "react";

export default function page() {
  return (
    <div className="pt-6 px-4 grid grid-cols-2 gap-2">
      <RoomCompo />
      <RoomCompo />
    </div>
  );
}
