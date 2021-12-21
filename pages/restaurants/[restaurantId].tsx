import { useRouter } from "next/router";
import React from "react";
import { useRestuarantData } from "../../hooks/useRestuarantData";

function Restaurant() {
  const router = useRouter();
  const restaurantId = router.query.restaurantId;
  const { data, isLoading } = useRestuarantData(restaurantId);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <p>Restaurant query id: {restaurantId}</p>
      <p>Restaurant name: {data?.name}</p>
      <p>Restaurant id from result: {data?._id}</p>
    </div>
  );
}

export default Restaurant;
