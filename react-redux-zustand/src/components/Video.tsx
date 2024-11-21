import Player from 'react-player';
import { useAppSelector } from '../store';

export const Video = () => {
  const lesson = useAppSelector(state => {
    const { currentModuleIndex, currentLessonIndex } = state.player;

    const currentLesson = state.player.course.modules[currentModuleIndex].lessons[currentLessonIndex];

    return currentLesson;
  })
  return(
    <div className="w-full bg-zinc-950 aspect-video">
      <Player 
        width="100%"
        height="100%"
        url={`https://www.youtube.com/watch?v=${lesson.id}`}
        controls
      />
    </div>
  )
}