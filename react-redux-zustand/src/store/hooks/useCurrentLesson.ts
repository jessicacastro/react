import { useAppSelector } from "../index";

export const useCurrentLesson = () =>
  useAppSelector((state) => {
    const { currentModuleIndex, currentLessonIndex } = state.player;

    const currentModule = state.player.course.modules[currentModuleIndex];
    const currentLesson = currentModule.lessons[currentLessonIndex];

    return { currentLesson, currentModule };
  });
