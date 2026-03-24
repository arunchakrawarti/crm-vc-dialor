"use client";
import React from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const LocationHistory = () => {
  return (
    <div className="bg-white p-3 sm:p-4 md:p-5">

      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
        Location History Track
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-white p-3 sm:p-4 rounded-lg space-y-4">

          <Input
            type="select"
            placeholder="-Select Users-"
            options={["User 1", "User 2"]}
          />

          <Input
            type="date"
          />
          <Button className="w-full h-[45px]" variant="success">
            <i className="ri-search-line text-lg sm:text-xl"></i>
          </Button>
          <div className="text-sm sm:text-base text-gray-700 font-medium">
            Distance = <span className="font-semibold">0 KM</span>
          </div>

        </div>
        <div className="lg:col-span-2 w-full">

          <div className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] rounded-lg overflow-hidden border border-gray-300">
            <iframe
              src="https://maps.google.com/maps?q=jaipur&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>

        </div>

      </div>
    </div>
  );
};

export default LocationHistory;