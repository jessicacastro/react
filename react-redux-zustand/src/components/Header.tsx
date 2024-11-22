import { useAppSelector } from "../store";

export const Header = () => {
  const { currentLesson, currentModule } = useAppSelector(state => {
    const { currentModuleIndex, currentLessonIndex } = state.player;

    const currentModule = state.player.course.modules[currentModuleIndex];
    const currentLesson = currentModule.lessons[currentLessonIndex];

    return {currentLesson, currentModule };
  })
  
  return(
    <header className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{currentLesson.title}</h1>
      <span className="text-sm text-zinc-400">Módulo "{currentModule.title}"</span>
    </header>
  )
}