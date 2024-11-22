import { useAppSelector } from "../store";
import { useCurrentLesson } from "../store/hooks/useCurrentLesson";

export const Header = () => {
  const { currentLesson, currentModule } = useCurrentLesson();
  const isCourseLoading = useAppSelector(state => state.player.isLoading);

  if(isCourseLoading) return null;

  return(
    <header className="flex flex-col gap-1 transition-transform">
      <h1 className="text-2xl font-bold">{currentLesson?.title}</h1>
      <span className="text-sm text-zinc-400">Módulo "{currentModule?.title}"</span>
    </header>
  )
}