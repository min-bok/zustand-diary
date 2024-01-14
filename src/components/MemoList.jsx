import React from "react";
import { Memo, Noting } from "../components";
import { useMemoStore } from "../store/MemoStore";

export default function MemoList() {
  const { memoList } = useMemoStore();

  return (
    <>
      {/* scrollbar-hide */}
      {!!memoList.length ? (
        <div className="grid grid-cols-4 auto-rows-max gap-4 overflow-y-auto h-4/6 ">
          {memoList &&
            memoList.map((el) => (
              <Memo key={el.id} id={el.id} date={el.date}>
                {el.content}
              </Memo>
            ))}
        </div>
      ) : (
        <Noting />
      )}
    </>
  );
}
