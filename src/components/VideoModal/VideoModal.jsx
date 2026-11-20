import { useEffect } from 'react'
import './VideoModal.css'

function VideoModal({ youtubeId, onClose }) {
  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="video-modal" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="video-modal__frame" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="video-modal__close" onClick={onClose} aria-label="Close video">
          ×
        </button>
        <div className="video-modal__ratio">
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
            title="Chicken Royal Road trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}

export default VideoModal
