"use client";
import Image from "next/image";
import UserIcon from "@/app/_components/_icons/User";
import Close from "@/app/_components/_icons/Close";
import Heart from "@/app/_components/_icons/Heart";
import Offcanvas from "@/app/_components/Offcanvas";
import Dropdown from "@/app/_components/Dropdown";
import NavLink from "@/app/_components/NavLink";
import LinkIcon from "@/app/_components/LinkIcon";
import ArchiveBox from "./_icons/ArchiveBox";

function User() {
  return (
    <>
      <div className="hidden md:flex relative">
        <Dropdown>
          <Dropdown.Open>
            <button type="button">
              <UserIcon />
            </button>
          </Dropdown.Open>
          <Dropdown.Window>
            <WindowUserWindow />
          </Dropdown.Window>
        </Dropdown>
      </div>
      <div className="md:hidden">
        <Offcanvas>
          <Offcanvas.Open>
            <button type="button">
              <UserIcon />
            </button>
          </Offcanvas.Open>
          <Offcanvas.Window>
            <WindowUserMobile  />
          </Offcanvas.Window>
        </Offcanvas>
      </div>
    </>
  );
}

function WindowUserMobile({ close }: { close: () => void }) {
  return (
    <div className="w-full h-screen py-3 px-5">
      <div className="flex justify-between pb-4 border-b border-b-gray-300 dark:border-b-gray-700 mb-4">
        <button type="button" onClick={close}>
          <Close />
        </button>
        <h3 className="dark:text-gray-50">حساب کاربری</h3>
      </div>
      <div className="flex flex-col items-start gap-7">
        <div className="flex justify-start gap-2">
          <Image
            src="https://roti-preview.taymakz.ir/assets/images/user.png"
            alt="person"
            width={35}
            height={35}
            className="rounded-full"
          />
          <NavLink hover={true} href="/">
            امیرحسین شکری
          </NavLink>
        </div>
        <div className="flex justify-between gap-2">
          <LinkIcon href="/">
            <ArchiveBox />
            <span>سفارش ها</span>
          </LinkIcon>
          <span className="relative flex size-6">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-color-success-200 opacity-75"></span>
            <span className="relative flex justify-center items-center size-6 rounded-full bg-color-success-200 text-gray-50">
              2
            </span>
          </span>
        </div>

        <div className="flex justify-between gap-2">
          <LinkIcon href="/">
            <Heart />
            <span>علاقه مندی ها</span>
          </LinkIcon>
          <span className="relative flex size-6">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-color-success-200 opacity-75"></span>
            <span className="relative flex justify-center items-center size-6 rounded-full bg-color-success-200 text-gray-50">
              2
            </span>
          </span>
        </div>
        <div className="flex justify-start gap-2 py-4 border-t border-t-gray-300 dark:border-t-gray-700">
          <button
            type="button"
            className="flex items-start justify-center gap-2 text-color-danger-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
              />
            </svg>
            <span>خروج</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function WindowUserWindow() {
  return (
    <div className="w-64 py-3 px-5 border border-t-2 dark:border-gray-400 border-t-color-success-100 dark:border-t-color-success-200 rounded-2xl flex flex-col gap-6">
      <div className="flex justify-start gap-2">
        <Image
          src="https://roti-preview.taymakz.ir/assets/images/user.png"
          alt="person"
          width={35}
          height={35}
          className="rounded-full"
        />
        <NavLink hover={true} href="/">
          امیرحسین شکری
        </NavLink>
      </div>

      <div className="flex justify-between gap-2">
        <LinkIcon href="/">
          <ArchiveBox />
          <span>سفارش ها</span>
        </LinkIcon>
        <span className="relative flex size-6">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-color-success-200 opacity-75"></span>
          <span className="relative flex justify-center items-center size-6 rounded-full bg-color-success-200 text-gray-50">
            2
          </span>
        </span>
      </div>

      <div className="flex justify-between gap-2">
        <LinkIcon href="/">
          <Heart />
          <span>علاقه مندی ها</span>
        </LinkIcon>
        <span className="relative flex size-6">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-color-success-200 opacity-75"></span>
          <span className="relative flex justify-center items-center size-6 rounded-full bg-color-success-200 text-gray-50">
            2
          </span>
        </span>
      </div>

      <div className="flex justify-start gap-2 py-3 border-t border-t-gray-300 dark:border-t-gray-700">
        <button
          type="button"
          className="flex items-start justify-center gap-2 text-color-danger-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
            />
          </svg>
          <span>خروج</span>
        </button>
      </div>
    </div>
  );
}

export default User;
