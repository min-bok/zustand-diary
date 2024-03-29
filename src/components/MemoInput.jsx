import React, { useState, useRef } from "react";
import { useMemoStore } from "../store/MemoStore";

export default function MemoInput() {
  const [value, setValue] = useState("");
  const { addMemo, removeAllMemo } = useMemoStore();
  const inputRef = useRef();

  const addNewMemo = (e) => {
    e.preventDefault();

    if (value.trim()) {
      addMemo(value);
      setValue("");
    }
  };

  const maxLenth = (e) => {
    if (e.target.value.length > 20) {
      alert("최대 20글자까지 입력이 가능합니다 :)");
    }
  };

  const deleteAllMemo = () => {
    removeAllMemo();
    useMemoStore.persist.clearStorage();
  };

  return (
    <div className="flex justify-between">
      <button className="btn btn-outline btn-primary" onClick={deleteAllMemo}>
        모든 일기 삭제
      </button>
      <form
        onSubmit={(e) => {
          addNewMemo(e);
        }}
      >
        <div className="w-96 flex justify-between gap-4">
          <input
            type="text"
            placeholder="한 줄 일기를 입력해주세요 :)"
            className="input input-bordered w-full"
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            maxlength="20"
            onInput={(e) => maxLenth(e)}
          />
          <button className="btn btn-active btn-primary">저장</button>
        </div>
      </form>
    </div>
  );
}
