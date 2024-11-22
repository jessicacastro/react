import Player from 'react-player';
import { useDispatch } from 'react-redux';
import { nextVideo } from '../store/slices/player';
import { useCurrentLesson } from '../store/hooks/useCurrentLesson';

export const Video = () => {
  const dispatch = useDispatch();
  const { currentLesson } = useCurrentLesson();

  const handlePlayNext = () => {
    dispatch(nextVideo());
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