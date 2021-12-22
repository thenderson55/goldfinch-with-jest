import { useRouter } from "next/router";
import React from "react";
import { useItemData } from "../../hooks/useItemData";
import { format } from "date-fns";

function Item() {
  const router = useRouter();
  const itemId = router.query.itemId;
  const { data, isLoading } = useItemData(itemId);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <p>ItemId from result: {data?._id}</p>
      <p>Date created: {format(new Date(data?.createdAt), "MM/dd/yyyy")}</p>
      <p>Item name: {data?.name}</p>
      <p>Artist name: {data?.artist}</p>
    </div>
  );
}

export default Item;
