import Link from "next/link";
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
    <>
      {href && (
        <Link href={href}>
          <div
            className={`py-4 hover:bg-hovColor cursor-pointer ${
              active ? "bg-hovColor" : "bg-transparent"
            } lg:px-10 flex items-center justify-center lg:justify-start`}
          >
            {Icon && (
              <Icon
                className={`text-2xl lg:mr-3 ${
                  active ? "text-orange" : "text-icon"
                }`}
              />
            )}
            {title && <div className="text-white hidden lg:block">{title}</div>}
          </div>
        </Link>
      )}
    </>
  );
}
