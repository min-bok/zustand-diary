import React from "react";

export default function Noting() {
  return (
    <div className="text-center">
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        아직 작성된 일기가 없어요!
      </h1>
      <p className="mt-6 text-base leading-7 text-gray-600">
        하루, 한 줄에서 오늘의 감정이나 소소한 순간을 함께 기록해보세요!
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6"></div>
    </div>
  );
}
