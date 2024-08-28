import React from "react";

const ArchiveLayout = ({ archive, latest }) => {
  return (
    <>
      <div>News Archive</div>
      <section id="archive-filtes">{archive}</section>
      <section id="archive-lates">{latest}</section>
    </>
  );
};

export default ArchiveLayout;
