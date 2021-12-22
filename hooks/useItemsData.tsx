import { useQuery } from "react-query";

const fetchItems = async (limit, page) => {
  const limitString = `?limit=${limit}`;
  const pageString = `&page=${page}`;

  const data = await fetch(
    `http://localhost:3000/api/items${limitString}${pageString}`,
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
