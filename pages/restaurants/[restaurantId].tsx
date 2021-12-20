import { useRouter } from "next/router";
import React from "react";

function Restaurant() {
  const router = useRouter();
  const restaurantId = router.query.restaurantId;
  return <div>Restaurant: {restaurantId}</div>;
}

export default Restaurant;
