import { useQuery } from "react-query";

const fetchRestaurant = async (restaurantId) => {
  const data = await fetch(
    `http://localhost:3000/api/restaurants/${restaurantId}`,
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

export const useRestuarantData = (restaurantId) => {
  return useQuery(["restaurant", restaurantId], () =>
    fetchRestaurant(restaurantId)
  );
};
