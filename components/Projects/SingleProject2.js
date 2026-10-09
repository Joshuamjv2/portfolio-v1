import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

import placeholder from "../../public/images/ink.png";

export default function Project({
title,
detail,
live,
image,
stack,
github = null,
}) {
const projectImage = image || placeholder;

const technologies = Array.isArray(stack)
? stack
: (stack || "")
.split(",")
.map((technology) => technology.trim())
.filter(Boolean);

return ( <article className="flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow duration-300 hover:shadow-md">
{/* Project image */} <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
<Image
src={projectImage}
alt={`${title} project preview`}
fill
sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
className="object-cover transition-transform duration-300 hover:scale-[1.03]"
/> </div>

```
  {/* Project details */}
  <div className="flex flex-1 flex-col p-4">
    <h3 className="text-lg font-bold text-[#3c6e71]">
      {title}
    </h3>

    <p className="mt-2 text-sm leading-6 text-gray-700">
      {detail}
    </p>

    {/* Technologies */}
    {technologies.length > 0 && (
      <ul className="mt-3 flex flex-wrap gap-1.5">
        {technologies.map((technology) => (
          <li
            key={technology}
            className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-700"
          >
            {technology}
          </li>
        ))}
      </ul>
    )}

    {/* Links */}
    {(live || github) && (
      <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-4">
        {live && (
          <Link
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${title} live website`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#6A040F] hover:text-[#3c6e71]"
          >
            Live project
            <FontAwesomeIcon
              icon={["fa", "external-link"]}
              aria-hidden="true"
            />
          </Link>
        )}

        {github && (
          <Link
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${title} source code on GitHub`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#6A040F] hover:text-[#3c6e71]"
          >
            Source code
            <FontAwesomeIcon
              icon={["fab", "github"]}
              aria-hidden="true"
            />
          </Link>
        )}
      </div>
    )}
  </div>
</article>
```

);
}
