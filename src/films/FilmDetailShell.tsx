import type { ReactNode } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

interface Credit {
  label: string
  value: string
}

interface Props {
  title: string
  media: ReactNode
  synopsis: string
  year: string
  genre: string
  credits: Credit[]
  note?: string
  festivalBadges?: ReactNode
}

export default function FilmDetailShell({
  title,
  media,
  synopsis,
  year,
  genre,
  credits,
  note,
  festivalBadges,
}: Props) {
  return (
    <div className="bg-[#3d3c3a] text-white min-h-screen flex flex-col">
      {/* Dark top section */}
      <div className="bg-[#3d3c3a]">
        <Nav />
        <div className="px-6 md:px-16 pt-4 pb-8">
          <h1
            className="text-white text-4xl md:text-6xl font-display font-extrabold uppercase mb-6"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
          >
            {title}
          </h1>
          <div className="max-w-4xl mx-auto">
            {media}
          </div>
        </div>
      </div>

      {/* Light info section */}
      <div className="bg-[#b0aba4] text-[#2a2927] flex-1 px-6 md:px-16 py-10">
        <div className="max-w-4xl mx-auto">
          {/* Synopsis + Year/Genre */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
            <div>
              <p
                className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#6b6560] mb-3"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                Synopsis
              </p>
              <p className="text-[#2a2927] text-lg md:text-xl font-sans font-light leading-snug">
                {synopsis}
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <p
                  className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#6b6560] mb-1"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  Year
                </p>
                <p className="text-[#2a2927] text-2xl font-sans font-light">{year}</p>
              </div>
              <div>
                <p
                  className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#6b6560] mb-1"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  Genre
                </p>
                <p className="text-[#2a2927] text-xl font-sans font-light">{genre}</p>
              </div>
            </div>
          </div>

          {/* Divider + Credits */}
          <div className="border-t border-[#9a9590] pt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {credits.map((c) => (
                <div key={c.label}>
                  <p
                    className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#6b6560] mb-1"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {c.label}
                  </p>
                  <p className="text-[#2a2927] text-sm font-sans font-light leading-snug">
                    {c.value}
                  </p>
                </div>
              ))}
            </div>
            {note && (
              <p className="text-[#6b6560] text-xs font-sans font-light mt-8 italic">{note}</p>
            )}
          </div>
        </div>
      </div>

      {festivalBadges && (
        <div className="bg-[#9a9590] px-6 md:px-16 py-10">
          <div className="max-w-4xl mx-auto flex flex-wrap gap-12 items-center justify-center">
            {festivalBadges}
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
