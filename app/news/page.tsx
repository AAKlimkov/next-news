import React from "react";

import NewsList from "@/components/news-list";
import { DUMMY_NEWS } from "@/DUMMY_NEWS";

export default function NewsPage() {
  return (
    <>
      <h1>News page</h1>
      <NewsList news={DUMMY_NEWS}></NewsList>
    </>
  );
}
