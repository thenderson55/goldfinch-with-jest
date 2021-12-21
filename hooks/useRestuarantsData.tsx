import { useQuery } from "react-query";

const fetchRestaurants = async (limit, page) => {
  const limitString = `?limit=${limit}`;
  const pageString = `&page=${page}`;

  const data = await fetch(
    `http://localhost:3000/api/restaurants${limitString}${pageString}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const response = await data.json();
  return response;
};

export const useRestuarantsData = (limit, page) => {
  return useQuery(
    ["restaurants", limit, page],
    () => fetchRestaurants(limit, page)
    // {
    //   refetchOnWindowFocus: false,
    //   enabled: false,
    // }
  );
};
