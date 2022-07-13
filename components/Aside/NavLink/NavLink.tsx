import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { IconType } from "react-icons/lib";

interface Props {
  Icon: IconType;
  title: string;
  href: string;
  active: boolean;
}

export default function NavLink({ Icon, title, href, active }: Props) {
  return (
    <React.Fragment>
      {href && (
        <Link href={href}>
          <div
            className={`py-4 hover:bg-hovColor cursor-pointer ${
              useRouter().pathname === href ? "bg-hovColor" : "bg-transparent"
            } md:px-2 lg:px-10 flex items-center justify-center md:justify-start`}
          >
            {Icon && (
              <Icon
                className={`text-2xl md:mr-2 lg:mr-3 ${
                  useRouter().pathname === href ? "text-orange" : "text-icon"
                }`}
              />
            )}
            {title && <div className="text-white hidden md:block">{title}</div>}
          </div>
        </Link>
      )}
    </React.Fragment>
  );
}
