import Player from 'react-player';

export const Video = () => {
  return(
    <div className="w-full bg-zinc-950 aspect-video">
      <Player 
        width="100%"
        height="100%"
        url="https://www.youtube.com/watch?v=jNXIQW6mmFA"
        controls
      />
    </div>
  )
}