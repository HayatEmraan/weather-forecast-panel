import UserTable from "@/components/table/table";
import { getusersdb } from "@/components/utlis/users/getusersdb";

import React from "react";

const Page = async () => {
  const getusers = await getusersdb();
  return (
    <main className="container mx-auto max-w-7xl my-8 px-4">
      <UserTable users={getusers?.data} />
    </main>
  );
};

export default Page;
