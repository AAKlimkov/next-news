import React from "react";

import { DUMMY_NEWS } from "@/DUMMY_NEWS";
import { notFound } from "next/navigation";

export default function NewsPageDetails({ params }) {
  const newsId = params.id;

  const news = DUMMY_NEWS.find((news) => news.slug === newsId);
  if (!news) {
    notFound();
  }
  return (
    <article>
      <h1>News page details</h1>
      <header>
        <img src={`/images/news/${news.image}`} alt={`${news.title}`} />
        <h1>{news.title}</h1>
        <time dateTime={`${news.date}`}>{`${news.date}`}</time>
      </header>
      <div>Id = {newsId}</div>
    </article>
  );
}
