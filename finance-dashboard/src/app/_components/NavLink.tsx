"use client";

import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";
import cx from "classnames";
import { usePathname } from "next/navigation";

interface NavLinksProps {
  name: string;
  href: string;
  icon: IconProp;
  bottomBorder?: boolean;
}

const NavLink = ({ name, href, icon, bottomBorder = true }: NavLinksProps) => {
  const pathname = usePathname();
  const borderClass = bottomBorder ? "border-b-4" : "border-l-4";
  return (
    <Link
      href={href}
      className={cx("!rounded-none", {
        [`${borderClass} border-primary`]: pathname === href,
      })}
    >
      <span className="text-left">
        <FontAwesomeIcon icon={icon} />
      </span>
      <span className="mx-2 text-sm font-normal">{name}</span>
    </Link>
  );
};

export default NavLink;
