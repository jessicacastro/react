import Player from 'react-player';
import { useAppSelector } from '../store';
import { useDispatch } from 'react-redux';
import { nextVideo } from '../store/slices/player';

export const Video = () => {
  const dispatch = useDispatch();
  const lesson = useAppSelector(state => {
    const { currentModuleIndex, currentLessonIndex } = state.player;

    const currentLesson = state.player.course.modules[currentModuleIndex].lessons[currentLessonIndex];

    return currentLesson;
  })

  const handlePlayNext = () => {
    dispatch(nextVideo());
  }

  return(
    <div className="w-full bg-zinc-950 aspect-video">
      <Player 
        width="100%"
        height="100%"
        url={`https://www.youtube.com/watch?v=${lesson.id}`}
        onEnded={handlePlayNext}
        controls
      />
    </div>
  )
}