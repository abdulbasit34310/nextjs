"use client";
import { useSearchParams } from "next/navigation";

const LocationList = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  // const entries = Object.fromEntries(searchParams.entries());

  return (
    <>
      <h1>client - {category} </h1>
    </>
  );
};

export default LocationList;