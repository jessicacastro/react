import { useCurrentLesson } from "../store/hooks/useCurrentLesson";

export const Header = () => {
  const { currentLesson, currentModule } = useCurrentLesson();
  
  return(
    <header className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{currentLesson.title}</h1>
      <span className="text-sm text-zinc-400">Módulo "{currentModule.title}"</span>
    </header>
  )
}