import Player from 'react-player';
import { nextVideo } from '../store/slices/player';
import { useCurrentLesson } from '../store/hooks/useCurrentLesson';
import { useAppDispatch } from '../store';

export const Video = () => {
  const dispatch = useAppDispatch();
  const { currentLesson } = useCurrentLesson();

  const handlePlayNext = () => {
    dispatch(nextVideo());
  }

  if (!currentLesson) {
    return null;
  }

  return(
    <div className="w-full bg-zinc-950 aspect-video">
      <Player 
        width="100%"
        height="100%"
        url={`https://www.youtube.com/watch?v=${currentLesson.id}`}
        onEnded={handlePlayNext}
        controls
      />
    </div>
  )
}