import { useQuery, useMutation, useQueryClient } from "react-query";

const fetchItems = async (limit = 10, page = 1) => {
  const limitString = `?limit=${limit}`;
  const pageString = `&page=${page}`;
  // console.log(
  //   "OG",
  //   `${window.document.location.origin}/api/items${limitString}${pageString}`
  // );

  const data = await fetch(`/api/items${limitString}${pageString}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const response = await data.json();
  return response;
};

const addItem = async (body) => {
  const data = await fetch(`/api/items`, {
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
