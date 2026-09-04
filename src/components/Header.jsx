import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.svg";
import NavLink from "./NavLink";
import Menu from "./Menu";
import DropdownMenu from "./DropdownMenu";

export default function Header() {
  return (
    <header className="w-full">
      {/* Upper Header */}
      <div className="w-full bg-white border-b border-gray-100 lg:border-b-0">
        <div className="mx-auto flex h-[60px] sm:h-[75px] md:h-[90px] lg:h-[105px] 2xl:h-[123px] max-w-[1920px] items-center justify-between px-3 sm:px-6 md:px-8 xl:px-6 2xl:px-10 min-[1800px]:px-[102px] w-full">
          {/* Left Navigation (Visible on xl and 2xl desktop) */}
          <div className="hidden xl:flex items-center justify-start flex-1 min-w-0">
            <nav className="flex items-center gap-4 xl:gap-5 2xl:gap-7 min-[1800px]:gap-[86px]">
              <NavLink href="/about-us">About Us</NavLink>
              <NavLink href="/services">Services</NavLink>
              <NavLink href="/our-work">Our Work</NavLink>
              <NavLink href="/resources">Resources</NavLink>
            </nav>
          </div>

          {/* Centered Brand Logo */}
          <Link href="/" className="flex items-center justify-center shrink-0 mx-2 sm:mx-4">
            <Image
              src={logo}
              alt="Z&S Carpets"
              width={227}
              height={96}
              className="h-[38px] sm:h-[48px] md:h-[60px] lg:h-[75px] xl:h-[78px] 2xl:h-[88px] min-[1800px]:h-[96.22px] w-auto min-[1800px]:w-[227px] object-contain"
              priority
            />
          </Link>

          {/* Right Group: Right Nav Links, Action Button, and Menu */}
          <div className="flex items-center justify-end xl:flex-1 min-w-0 gap-3 sm:gap-4 xl:gap-5 2xl:gap-7 min-[1800px]:gap-[50px] shrink-0">
            {/* Right Nav Links (Visible on xl and 2xl screens) */}
            <div className="hidden xl:flex items-center gap-3 xl:gap-4 2xl:gap-6 min-[1800px]:gap-[50px]">
              <NavLink href="/expert-insights">Expert Insights</NavLink>
              <NavLink href="/contact-us">Contact us</NavLink>
              <NavLink href="/get-a-sample">Get a sample</NavLink>
            </div>

            {/* Action Buttons (SVG Action Button + Menu) */}
            <div className="flex items-center gap-2 sm:gap-3 2xl:gap-[16px] shrink-0">
              <button
                type="button"
                className="flex h-[34px] w-[34px] sm:h-[38px] sm:w-[38px] md:h-[42px] md:w-[42px] 2xl:h-[46px] 2xl:w-[46px] items-center justify-center cursor-pointer transition-opacity hover:opacity-90 shrink-0"
                aria-label="Request Quote"
              >
                <svg
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[34px] w-[34px] sm:h-[38px] sm:w-[38px] md:h-[42px] md:w-[42px] 2xl:h-[46px] 2xl:w-[46px]"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="45"
                    height="45"
                    rx="22.5"
                    fill="#0066B3"
                    stroke="#0066B3"
                  />
                  <g clipPath="url(#clip0_4004_3173)">
                    <path
                      d="M33.7492 23.7617L31.3185 21.331C31.1573 21.1698 30.9387 21.0793 30.7108 21.0793C30.4828 21.0793 30.2643 21.1698 30.1031 21.331L22.6754 28.7587C22.0736 29.3605 21.6673 30.1198 21.5004 30.9543L21.0968 32.9721C21.0404 33.2538 21.1286 33.5451 21.3318 33.7483C21.4946 33.9111 21.7138 34 21.9395 34C21.9955 34 22.052 33.9945 22.108 33.9833L24.1258 33.5797H24.1258C24.9604 33.4128 25.7196 33.0065 26.3215 32.4047L33.7492 24.977C34.0847 24.6414 34.0847 24.0973 33.7492 23.7617ZM25.1061 31.1893C24.745 31.5504 24.2895 31.7942 23.7887 31.8944L23.035 32.0451L23.1857 31.2913C23.2859 30.7906 23.5297 30.335 23.8908 29.9739L30.7108 23.1539L31.9261 24.3692L25.1061 31.1893Z"
                      fill="white"
                    />
                    <path
                      d="M18.4337 32.2812H14.5781C14.1043 32.2812 13.7188 31.8957 13.7188 31.4219V14.5781C13.7188 14.1043 14.1043 13.7188 14.5781 13.7188H22.3125V16.2969C22.3125 17.7185 23.469 18.875 24.8906 18.875H27.4688V19.4595C27.4688 19.9341 27.8535 20.3188 28.3281 20.3188C28.8028 20.3188 29.1875 19.9341 29.1875 19.4595V18.0156C29.1875 17.7829 29.0894 17.5599 28.9354 17.4075L23.7796 12.2517C23.621 12.0932 23.3989 12 23.1719 12H14.5781C13.1565 12 12 13.1565 12 14.5781V31.4219C12 32.8435 13.1565 34 14.5781 34H18.4337C18.9083 34 19.293 33.6153 19.293 33.1406C19.293 32.666 18.9083 32.2812 18.4337 32.2812ZM24.8906 17.1562C24.4168 17.1562 24.0312 16.7707 24.0312 16.2969V14.9341L26.2534 17.1562H24.8906Z"
                      fill="white"
                    />
                    <path
                      d="M25.75 21.1094C25.75 20.6347 25.3653 20.25 24.8906 20.25H16.2969C15.8222 20.25 15.4375 20.6347 15.4375 21.1094C15.4375 21.584 15.8222 21.9688 16.2969 21.9688H24.8906C25.3653 21.9688 25.75 21.584 25.75 21.1094Z"
                      fill="white"
                    />
                    <path
                      d="M16.2969 23.6875C15.8222 23.6875 15.4375 24.0722 15.4375 24.5469C15.4375 25.0215 15.8222 25.4062 16.2969 25.4062H23.2407C23.7153 25.4062 24.1001 25.0215 24.1001 24.5469C24.1001 24.0722 23.7153 23.6875 23.2407 23.6875H16.2969Z"
                      fill="white"
                    />
                    <path
                      d="M19.991 27.125H16.2969C15.8222 27.125 15.4375 27.5097 15.4375 27.9844C15.4375 28.459 15.8222 28.8438 16.2969 28.8438H19.991C20.4656 28.8438 20.8504 28.459 20.8504 27.9844C20.8504 27.5097 20.4656 27.125 19.991 27.125Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4004_3173">
                      <rect
                        width="22"
                        height="22"
                        fill="white"
                        transform="translate(12 12)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <Menu />
            </div>
          </div>
        </div>
      </div>

      {/* Lower Header */}
      <div className="w-full bg-[#0066B3]">
        <div className="mx-auto flex h-[36px] sm:h-[40px] md:h-[44px] 2xl:h-[48px] max-w-[1920px] items-center justify-between px-3 sm:px-6 md:px-8 xl:px-6 2xl:px-10 min-[1800px]:px-[102px]">
          <nav className="flex items-center gap-4 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-5 2xl:gap-6 min-[1800px]:gap-0 min-[1800px]:justify-between min-[1800px]:w-full overflow-x-auto no-scrollbar py-1">
            <DropdownMenu label="Artificial Grass" />
            <DropdownMenu label="Vinyl Flooring" />
            <DropdownMenu label="Deck Flooring" />
            <DropdownMenu label="Spc Flooring" />
            <DropdownMenu label="Laminate Flooring" />
            <DropdownMenu label="Carpet Flooring" />
            <DropdownMenu label="Lvt Flooring" />
            <DropdownMenu label="More" />
            <DropdownMenu label="En" />

            {/* On wide 2xl screen, search button sits cleanly at the end of the justify-between nav */}
            <button
              type="button"
              className="hidden min-[1800px]:flex items-center justify-center text-white cursor-pointer transition-opacity hover:opacity-85 shrink-0"
              aria-label="Search"
            >
              <svg
                width="21"
                height="20.83"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[21px] h-[20.83px]"
              >
                <path
                  d="M20.8012 19.6974L15.3792 14.4052C16.799 12.875 17.6714 10.8514 17.6714 8.6246C17.6707 3.86106 13.7152 0 8.83537 0C3.95557 0 0 3.86106 0 8.6246C0 13.3881 3.95557 17.2492 8.83537 17.2492C10.9438 17.2492 12.8776 16.5258 14.3966 15.3232L19.8396 20.6363C20.1048 20.8954 20.5353 20.8954 20.8006 20.6363C21.0664 20.3772 21.0664 19.9565 20.8012 19.6974ZM8.83537 15.9223C4.70652 15.9223 1.35945 12.655 1.35945 8.6246C1.35945 4.59421 4.70652 1.32695 8.83537 1.32695C12.9643 1.32695 16.3113 4.59421 16.3113 8.6246C16.3113 12.655 12.9643 15.9223 8.83537 15.9223Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </nav>

          {/* On screens < 1800px, search button is pinned on the right of the header */}
          <button
            type="button"
            className="flex min-[1800px]:hidden items-center justify-center text-white cursor-pointer transition-opacity hover:opacity-85 shrink-0 pl-3 sm:pl-4"
            aria-label="Search"
          >
            <svg
              width="21"
              height="20.83"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[18px] h-[17.8px] sm:w-[20px] sm:h-[19.8px]"
            >
              <path
                d="M20.8012 19.6974L15.3792 14.4052C16.799 12.875 17.6714 10.8514 17.6714 8.6246C17.6707 3.86106 13.7152 0 8.83537 0C3.95557 0 0 3.86106 0 8.6246C0 13.3881 3.95557 17.2492 8.83537 17.2492C10.9438 17.2492 12.8776 16.5258 14.3966 15.3232L19.8396 20.6363C20.1048 20.8954 20.5353 20.8954 20.8006 20.6363C21.0664 20.3772 21.0664 19.9565 20.8012 19.6974ZM8.83537 15.9223C4.70652 15.9223 1.35945 12.655 1.35945 8.6246C1.35945 4.59421 4.70652 1.32695 8.83537 1.32695C12.9643 1.32695 16.3113 4.59421 16.3113 8.6246C16.3113 12.655 12.9643 15.9223 8.83537 15.9223Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
