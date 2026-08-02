import FilmDetailShell from './FilmDetailShell'

export default function QuietHour() {
  return (
    <FilmDetailShell
      title="Quiet Hour"
      media={
        <div className="w-full bg-[#1a1917] aspect-video flex items-center justify-center">
          <div className="text-center text-white/40">
            <div className="w-14 h-14 rounded-full border-2 border-white/30 flex items-center justify-center mx-auto mb-3">
              <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-xs font-sans tracking-widest uppercase opacity-60">Video — Quiet Hour</p>
          </div>
        </div>
      }
      synopsis="An impending apartment move strains a mother and daughter's relationship as they pack up their lives with the help of a local teenage boy."
      year="2001"
      genre="Drama"
      credits={[
        { label: 'Writer / Director', value: 'Imogen Thomas' },
        { label: 'Producers', value: 'Teona Mitevska' },
        { label: 'Co-producer', value: 'Manisha Archarya' },
        { label: 'Length / Format', value: '12 minutes 16mm' },
      ]}
    />
  )
}
