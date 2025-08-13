import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Project({ title, detail, live, image, stack, github = null }) {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-8 lg:gap-12 md:items-center">
      {/* Image Container */}
      <div className="relative sm:w-1/3 md:w-1/2 max-w-[350px] aspect-[4/3] overflow-hidden border">
        <Link href={live}>
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 cursor-pointer"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </Link>
      </div>

      {/* Text Content */}
      <div className="pt-4 sm:pt-0 sm:w-2/3 md:w-1/2">
        <h2 className="text-[#3c6e71] text-xl lg:text-2xl font-bold lg:mb-6">
          {title}
          {github && (
            <Link href={github}>
              <FontAwesomeIcon
                icon={['fab', 'github']}
                className="px-4"
                style={{ fontSize: 18, color: "#6A040F" }}
              />
            </Link>
          )}
          {live && (
            <Link href={live}>
              <FontAwesomeIcon
                icon={['fa', 'external-link']}
                className="px-4"
                style={{ fontSize: 18, color: "#6A040F" }}
              />
            </Link>
          )}
        </h2>
        <p className="lg:mb-6 my-2 md:my-0 md:mb-1">{detail}</p>
        <p className="text-[#3c6e71] font-semibold">
          Stack: <span className="font-semibold text-[#000]">{stack}</span>
        </p>
      </div>
    </div>
  );
}
