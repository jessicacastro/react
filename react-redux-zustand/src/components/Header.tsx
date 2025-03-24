import { useStore } from "../zustand-store";
import { useCurrentLesson } from "../zustand-store/hooks/useCurrentLesson";

export const Header = () => {
  const { isLoading } = useStore(store => ({ isLoading: store.isLoading }));
  const { currentLesson, currentModule } = useCurrentLesson();

  if(isLoading) return null;

  return(
    <header className="flex flex-col gap-1 transition-transform">
      <h1 className="text-2xl font-bold">{currentLesson?.title}</h1>
      <span className="text-sm text-zinc-400">Módulo "{currentModule?.title}"</span>
    </header>
  )
}