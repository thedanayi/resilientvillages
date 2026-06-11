import { useState, useEffect } from "react";
import { Play } from "lucide-react";

interface LiteYouTubeProps {
  videoId: string;
  title?: string;
}

export function LiteYouTube({ videoId, title = "YouTube Video" }: LiteYouTubeProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [ytTitle, setYtTitle] = useState(title);

  useEffect(() => {
    fetch(`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${videoId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.title) {
          setYtTitle(data.title);
        }
      })
      .catch((err) => console.error("Could not fetch YouTube title", err));
  }, [videoId]);

  // standard high-res thumbnail by default
  const posterUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div 
      className="relative w-full aspect-video bg-gray-900 rounded-2xl overflow-hidden cursor-pointer group shadow-lg"
      onClick={() => setIsPlaying(true)}
      title={`Play ${ytTitle}`}
    >
      {!isPlaying ? (
        <>
          <img 
            src={posterUrl} 
            alt={ytTitle} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none group-hover:from-black/60 transition-colors"></div>
          
          <div className="absolute top-0 left-0 w-full p-4 md:p-5 bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none">
            <h3 className="text-white font-sans font-medium text-lg md:text-xl drop-shadow-md leading-tight">
              {ytTitle && ytTitle !== "YouTube Video" ? ytTitle : title}
            </h3>
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <button 
               className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white shadow-xl transition-transform duration-300 group-hover:scale-110 hover:bg-primary-700 pointer-events-auto"
               aria-label={`Play ${ytTitle}`}
            >
              <Play className="w-8 h-8 ml-1 drop-shadow" fill="currentColor" />
            </button>
          </div>
        </>
      ) : (
        <iframe
          className="w-full h-full absolute inset-0"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={ytTitle}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}
