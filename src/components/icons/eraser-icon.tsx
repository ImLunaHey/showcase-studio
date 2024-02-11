import { cn } from '@/cn';

type EraserIconProps = {
  className?: string;
};

export const EraserIcon = ({ className }: EraserIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className={cn('stroke-black dark:stroke-white w-8 h-8', className)}
    >
      <path
        fill="currentColor"
        d="M5.505 11.41l.53.53-.53-.53zM3 14.952h-.75H3zM9.048 21v.75V21zM11.41 5.505l-.53-.53.53.53zm1.831 12.34a.75.75 0 001.06-1.061l-1.06 1.06zM7.216 9.697a.75.75 0 10-1.06 1.061l1.06-1.06zm10.749 2.362l-5.905 5.905 1.06 1.06 5.905-5.904-1.06-1.06zm-11.93-.12l5.905-5.905-1.06-1.06-5.905 5.904 1.06 1.06zm0 6.025c-.85-.85-1.433-1.436-1.812-1.933-.367-.481-.473-.79-.473-1.08h-1.5c0 .749.312 1.375.78 1.99.455.596 1.125 1.263 1.945 2.083l1.06-1.06zm-1.06-7.086c-.82.82-1.49 1.488-1.945 2.084-.468.614-.78 1.24-.78 1.99h1.5c0-.29.106-.6.473-1.08.38-.498.962-1.083 1.812-1.933l-1.06-1.06zm7.085 7.086c-.85.85-1.435 1.433-1.933 1.813-.48.366-.79.472-1.08.472v1.5c.75 0 1.376-.312 1.99-.78.596-.455 1.264-1.125 2.084-1.945l-1.06-1.06zm-7.085 1.06c.82.82 1.487 1.49 2.084 1.945.614.468 1.24.78 1.989.78v-1.5c-.29 0-.599-.106-1.08-.473-.497-.38-1.083-.962-1.933-1.812l-1.06 1.06zm12.99-12.99c.85.85 1.433 1.436 1.813 1.933.366.481.472.79.472 1.08h1.5c0-.749-.312-1.375-.78-1.99-.455-.596-1.125-1.263-1.945-2.083l-1.06 1.06zm1.06 7.086c.82-.82 1.49-1.488 1.945-2.084.468-.614.78-1.24.78-1.99h-1.5c0 .29-.106.6-.473 1.08-.38.498-.962 1.083-1.812 1.933l1.06 1.06zm0-8.146c-.82-.82-1.487-1.49-2.084-1.945-.614-.468-1.24-.78-1.989-.78v1.5c.29 0 .599.106 1.08.473.497.38 1.083.962 1.933 1.812l1.06-1.06zm-7.085 1.06c.85-.85 1.435-1.433 1.933-1.812.48-.367.79-.473 1.08-.473v-1.5c-.75 0-1.376.312-1.99.78-.596.455-1.264 1.125-2.084 1.945l1.06 1.06zm2.362 10.749L7.216 9.698l-1.06 1.061 7.085 7.085 1.06-1.06z"
      />
      <path stroke="currentColour" strokeLinecap="round" strokeWidth="1.5" d="M9 21h12" />
    </svg>
  );
};
