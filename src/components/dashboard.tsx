"use client";

import Column from "./column";

export default function Home() {
  return (
    <>
      <div>
        <Column title={"TO DO"} />
        <Column title={"IN Progress"} />
        <Column title={"DONE"} />
      </div>
    </>
  );
}
