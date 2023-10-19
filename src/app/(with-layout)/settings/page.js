import SettingsComp from "@/components/settingscomp/settingscomp";
import { getbotdb } from "@/components/utlis/telebot/getbotdb";
import React from "react";

const Page = async () => {
  const botdata = await getbotdb();
  console.log(botdata);
  return <SettingsComp botdata={botdata} />;
};

export default Page;
