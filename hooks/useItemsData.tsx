import { useQuery, useMutation, useQueryClient } from "react-query";

const fetchItems = async (limit, page) => {
  const limitString = `?limit=${limit}`;
  const pageString = `&page=${page}`;

  const data = await fetch(
    `${
      process.env.PUBLIC_URL || "http://localhost:3000"
    }/api/items${limitString}${pageString}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const response = await data.json();
  console.log("DB RESPONSE: ", response);
  return response;
};

const addItem = async (body) => {
  const data = await fetch(`http://localhost:3000/api/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: body.itemName,
      artist: body.artistName,
    }),
  });
  const response = await data.json();
  return response;
};

export const useItemsData = (limit, page) => {
  return useQuery(
    ["items", limit, page],
    () => fetchItems(limit, page),
    {
      keepPreviousData: true,
    }
    // {
    //   refetchOnWindowFocus: false,
    //   enabled: false,
    // }
  );
};
export const useAddItemData = () => {
  const queryClient = useQueryClient();
  return useMutation(addItem, {
    onSuccess: () => {
      queryClient.invalidateQueries("items");
    },
  });
};
