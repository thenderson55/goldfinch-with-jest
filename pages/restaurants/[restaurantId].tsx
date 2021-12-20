import { useRouter } from "next/router";
import React from "react";
import { useRestuarantData } from "../../hooks/useRestuarantData";

function Restaurant() {
  const router = useRouter();
  const restaurantId = router.query.restaurantId;
  const { data, isLoading } = useRestuarantData(restaurantId);

  return (
    <div>
      <p>Restaurant: {restaurantId}</p>
      <p>Restaurant name: {data?.name}</p>
    </div>
  );
}

export default Restaurant;
