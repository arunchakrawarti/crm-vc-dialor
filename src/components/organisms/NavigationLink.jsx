"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavigationLink = ({ title, icon, link, children = [] }) => {
  const pathname = usePathname();

  const hasChildren = children.length > 0;

  const isChildActive = children.some((child) => pathname === child.link);

  const [open, setOpen] = useState(isChildActive);

  useEffect(() => {
    if (isChildActive) {
      setOpen(true);
    }
  }, [pathname]);

  return (
    <li>
      <Link
        href={link || "#"}
        onClick={() => hasChildren && setOpen(!open)}
        className={`flex items-center justify-between px-4 py-2 rounded-xl transition
        ${
          pathname === link || isChildActive
            ? "bg-gray-200 text-gray-500"
            : "text-gray-500 hover:bg-gray-100"
        }`}
      >
        <div className="flex items-center gap-3 min-w-0">
          <i className={`${icon} text-lg`}></i>

          <span className="text-sm font-medium truncate">
            {title}
          </span>
        </div>

        {hasChildren && (
          <i
            className={`ri-arrow-down-s-line transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          ></i>
        )}
      </Link>

      {hasChildren && open && (
        <ul className="ml-6 md:ml-8 mt-2 space-y-2 text-sm">
          {children.map((child, index) => (
            <li key={index}>
              <Link
                href={child.link}
                className={`flex font-medium items-center gap-2 px-3 py-2 rounded-lg transition w-full
                ${
                  pathname === child.link
                    ? "bg-gray-200 text-gray-500"
                    : "text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                }`}
              >
                {child.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavigationLink;