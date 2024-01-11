"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { FaBath } from "react-icons/fa6";

export default function RoomCompo() {
  return (
    <Card className=" shadow-xl">
      <CardContent className="pt-2">
        <p>Room ID : 1</p>
      </CardContent>
      <CardContent className="flex gap-10 justify-center">
        <figure className="w-[100px] h-[100px] border-2 border-slate-300 flex items-center justify-center rounded-full">
          <img
            src="/img.avif"
            alt="profile-image"
            className="rounded-full w-[100
        %] h-[100%]"
          />
        </figure>
        <figure className="w-[100px] h-[100px] border-2 border-slate-300 flex items-center justify-center rounded-full">
          <img
            src="/img.avif"
            alt="profile-image"
            className="rounded-full w-[100
                %] h-[100%]"
          />
        </figure>
        <figure className="w-[100px] h-[100px] border-2 border-slate-300 flex items-center justify-center rounded-full bg-gray-300">
          {/* <img
                    src="/img.avif"
                    alt="profile-image"
                    className="rounded-full w-[100
                %] h-[100%]"
                  /> */}
        </figure>
      </CardContent>
      <CardContent>
        <p>
          <b>Beds:</b> 3/4
        </p>
      </CardContent>
      <CardContent>
        <p className="flex items-center gap-2">
          <b>Facilities: </b>
          <FaBath />
        </p>
      </CardContent>
    </Card>
  );
}
