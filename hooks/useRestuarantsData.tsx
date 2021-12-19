import { useQuery } from "react-query";

const fetchRestaurants = async () => {
  const data = await fetch("http://localhost:3000/api/restaurants", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const response = await data.json();
  return response;
};

export const useRestuarantsData = () => {
  return useQuery("restaurants", fetchRestaurants, {
    refetchOnWindowFocus: false,
    enabled: false,
  });
};
