import LocationList from "./locationList";

const Locations = async ({ searchParams }) => {
  const searchParam = await searchParams;
  //   console.log("outer ", searchParam);

  // const category = searchParam?.category || "all";
  // const sort = searchParam?.sort || "default";
  // const page = searchParam?.page || 1;

  const name = searchParam?.name || "other";
  const URL = `https://api.genderize.io/?name=${name}`;

  const res = await fetch(URL);
  const data = await res.json();
  const gender = data.gender;

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });

  return (
    <div>
      <LocationList />
      {/* Showing {category} Locations, sorted by {sort}, page {page} */}
      clientName - {name} & {gender}
    </div>
  );
};

export default Locations;