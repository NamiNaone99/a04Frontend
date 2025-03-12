import Link from "next/link";
import React from "react";

export default function TopMenuItem() {
  return (
    <Link
      href="/booking"
      className="flex flex-col items-center p-4 bg-gray-300 hover:bg-gray-100 rounded-md transition duration-300 ease-in-out"
    >
      <p className="text-gray-600">Menu Item</p>
      <p className="font-bold text-blue-600">Booking</p>
    </Link>
  );
}
