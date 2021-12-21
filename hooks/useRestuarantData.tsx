import { useQuery, useQueryClient } from "react-query";

type RestaurantType = {
  _id: string;
};

const fetchRestaurant = async ({ queryKey }) => {
  const restaurantId = queryKey[1];
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
  const queryClient = useQueryClient();
  return useQuery(["restaurant", restaurantId], fetchRestaurant, {
    initialData: () => {
      const restaurants: [RestaurantType] =
        queryClient.getQueryData("restaurants");

      if (restaurants) {
        const restaurant = restaurants.find(
          (restaurant) => restaurant._id === restaurantId
        );
        return {
          data: restaurant,
        };
      } else {
        return undefined;
      }
    },
  });
};
