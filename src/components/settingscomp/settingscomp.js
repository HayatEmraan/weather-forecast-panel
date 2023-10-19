"use client";
import React from "react";
import Swal from "sweetalert2";
import { updatebotdb } from "../utlis/telebot/updatebotdb";

const SettingsComp = ({ botdata }) => {
  const handleupdate = async (e) => {
    e.preventDefault();
    const middle = e.target;
    const name = middle.name.value;
    const username = middle.username.value;
    const api = middle.api.value;

    const obj = {
      name,
      username,
      api,
    };
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this! Your Bot users would be Deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        (async () => {
            const dbpost = await updatebotdb(obj);
            console.log(dbpost);
          if (dbpost.success) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Bot updated successfully",
              showConfirmButton: false,
              timer: 700,
            });
          } else {
            Swal.fire({
              position: "center",
              icon: "error",
              title: "Something went wrong!",
              showConfirmButton: false,
              timer: 700,
            });
          }
        })();
      }
    });
  };
  return (
    <main className="container mx-auto max-w-7xl my-8 px-4">
      <div className="grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
        {/* Right Content */}
        <div className="col-span-full xl:col-auto">
          <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <div className="items-center sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
              <img
                className="mb-4 rounded-lg w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0"
                src="https://i.ibb.co/VMk1CZQ/images.jpg"
                alt="Profile picture"
              />
              <div>
                <p className="mb-1 text-md font-semibold text-gray-500 dark:text-gray-400">
                  Sign in as
                </p>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Jason Hughes
                </h3>
                <h5 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  jason@example.com
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <h3 className="mb-4 text-xl font-semibold dark:text-white">
              Telegram Bot Configurations
            </h3>
            <form onSubmit={handleupdate}>
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Bot Name
                  </label>
                  <input
                    type="text"
                    name="Name"
                    id="name"
                    defaultValue={botdata?.data?.name}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Bonnie"
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Bot Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    defaultValue={botdata?.data?.username}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Green"
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="api"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Bot API
                  </label>
                  <input
                    type="text"
                    name="api"
                    id="api"
                    defaultValue={botdata?.data?.api}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="United States"
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="updatedat"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Last Update Date
                  </label>
                  <input
                    type="text"
                    name="updatedat"
                    id="updatedat"
                    defaultValue={botdata?.data?.updatedAt}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    disabled
                  />
                </div>
                <div className="col-span-6 sm:col-full">
                  <button
                    className="bg-[#003B95]   text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    type="submit"
                  >
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SettingsComp;
