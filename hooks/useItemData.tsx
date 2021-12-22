import { useQuery, useQueryClient } from "react-query";

type ItemType = {
  _id: string;
};

const fetchItem = async ({ queryKey }) => {
  const itemId = queryKey[1];
  const data = await fetch(`http://localhost:3000/api/items/${itemId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const response = await data.json();
  return response;
};

export const useItemData = (itemId) => {
  const queryClient = useQueryClient();
  return useQuery(["item", itemId], fetchItem, {
    initialData: () => {
      const items: [ItemType] = queryClient.getQueryData("items");

      if (items) {
        const item = items.find((item) => item._id === itemId);
        return {
          data: item,
        };
      } else {
        return undefined;
      }
    },
  });
};
