import Player from 'react-player';
import { Loader } from 'lucide-react';
import { useCurrentLesson } from '../zustand-store/hooks/useCurrentLesson';
import { useStore } from '../zustand-store';

export const Video = () => {
  const { currentLesson } = useCurrentLesson();
  const { isLoading, nextVideo } = useStore(store => ({ isLoading: store.isLoading, nextVideo: store.nextVideo }));

  const handlePlayNext = () => {
    nextVideo()
  }


  return(
    <div className="w-full bg-zinc-950 aspect-video"> 
      { isLoading && (
        <div className="flex h-full items-center justify-center">
          <Loader className='w-6 h-6 text-zinc-400 animate-spin' />
        </div>
      )}

      { !isLoading && (
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