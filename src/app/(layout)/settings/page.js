import SettingsComp from "@/components/settingscomp/settingscomp";
import { getadmin } from "@/components/utlis/admin/getadmin";
import { getbotdb } from "@/components/utlis/telebot/getbotdb";
import React from "react";


export const dynamic = "force-dynamic";

const Page = async () => {
  const botdata = await getbotdb();
  const admin = await getadmin();
  return <SettingsComp botdata={botdata} admin={admin?.data} />;
};

export default Page;
