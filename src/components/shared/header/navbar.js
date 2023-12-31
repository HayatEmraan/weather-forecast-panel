"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownMenu,
  DropdownItem,
  Avatar,
  DropdownTrigger,
  Dropdown,
  Input,
} from "@nextui-org/react";
import { SearchIcon } from "./searchicon";
import { usePathname, useRouter } from "next/navigation";
import { logout } from "@/components/auth/logout";

export default function Header({ admin }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const routerRef = useRouter();
  const router = usePathname();
  const menuItems = ["Dashboard", "Settings"];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="">
        <NavbarBrand>
          <p className="font-bold text-lg text-inherit">
            <em>W/F</em>
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarBrand className="hidden sm:flex gap-4">
        <p className="font-bold text-xl text-inherit">
          <em>W/F</em>
        </p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            href="/"
            className={router === "/" ? "text-purple-500" : "text-default-500"}
          >
            Dashboard
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/settings"
            className={
              router === "/settings" ? "text-purple-500" : "text-default-500"
            }
          >
            Settings
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 hidden sm:flex bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name={admin?.name}
              size="sm"
              src={
                admin?.photoURL
                  ? admin?.photoURL
                  : "https://i.pravatar.cc/150?u=a042581f4e29026704d"
              }
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">{admin?.email}</p>
            </DropdownItem>
            <DropdownItem key="logout" color="danger">
              <h1
                onClick={() => {
                  logout();
                  routerRef.refresh();
                }}
              >
                Log Out
              </h1>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href={item === "Settings" ? "/settings" : "/"}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
