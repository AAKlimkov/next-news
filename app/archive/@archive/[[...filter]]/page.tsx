import NewsList from "@/components/news-list";
import { DUMMY_NEWS } from "@/DUMMY_NEWS";
import Link from "next/link";
import { getAvailableNewsYears, getNewsForYear } from "@/lib/news";

import React from "react";

const page = ({ params }) => {
  const filter = params.filter;
  const news = getNewsForYear(filter);
  const links = getAvailableNewsYears();
  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link: string) => (
              <li key={link}>
                <Link href={`/archive/${link}`}>{link}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <NewsList news={news} />
    </>
  );
};

export default page;
