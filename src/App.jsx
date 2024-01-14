import { MemoInput, MemoList } from "./components";

export default function App() {
  return (
    <div className="md:container md:mx-auto h-screen py-20 px-12 flex flex-col justify-between">
      <div className="text-center">
        <p className="text-2xl font-bold">하루, 한 줄</p>
        <p className="pt-1.5 text-slate-400">
          매일 자신의 하루를 최대 15글자로 간결하게 표현하여 기록해 보세요
        </p>
      </div>
      <MemoList />
      <MemoInput />
    </div>
  );
}
