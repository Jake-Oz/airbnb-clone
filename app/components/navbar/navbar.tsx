"use client";

import { SafeUser } from "@/app/types";
import Container from "../container";
import RegisterModal from "../modals/RegisterModal";
import Logo from "./logo";
import Search from "./search";
import UserMenu from "./usermenu";
import Categories from "./Categories";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
            <RegisterModal />
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
};
export default Navbar;
