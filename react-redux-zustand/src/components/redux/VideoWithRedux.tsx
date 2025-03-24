import Player from 'react-player';
import { nextVideo } from '../../store/slices/player';
import { useCurrentLesson } from '../../store/hooks/useCurrentLesson';
import { useAppDispatch, useAppSelector } from '../../store';
import { Loader } from 'lucide-react';

export const VideoWithRedux = () => {
  const dispatch = useAppDispatch();
  const { currentLesson } = useCurrentLesson();
  const isCourseLoading = useAppSelector(state => state.player.isLoading);

  const handlePlayNext = () => {
    dispatch(nextVideo());
  }


  return(
    <div className="w-full bg-zinc-950 aspect-video"> 
      { isCourseLoading && (
        <div className="flex h-full items-center justify-center">
          <Loader className='w-6 h-6 text-zinc-400 animate-spin' />
        </div>
      )}

      { !isCourseLoading && (
        <Player 
          width="100%"
          height="100%"
          url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
          onEnded={handlePlayNext}
          controls
        />
      )}
    </div>
  )
}