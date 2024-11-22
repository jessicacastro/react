import { PlayCircle, Video } from "lucide-react"

interface LessonProps {
  title: string
  duration: string
  isCurrent?: boolean
  onPlay: () => void
}

export const Lesson = ({ title, duration, onPlay, isCurrent = false }: LessonProps) => {
  return(
    <button 
      onClick={onPlay}
      data-active={isCurrent}
      disabled={isCurrent}
      className="flex items-center gap-3 text-sm text-zinc-400 enabled:hover:text-zinc-100 data-[active=true]:text-emerald-400"
    >
      {
        isCurrent ? (
          <PlayCircle className="w-5 h-5 text-emerald-400" />
        ) : (
          <Video className="w-5 h-5" />
        )
      }
      <span>{title}</span>
      <span className="ml-auto font-mono text-xs text-zinc-500">{duration}</span>
    </button>
  )
}