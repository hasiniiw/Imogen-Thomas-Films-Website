import FilmDetailShell from './FilmDetailShell'

export default function NoSleepAmerica() {
  return (
    <FilmDetailShell
      title="No Sleep America"
      media={
        <div className="w-full bg-[#1a1917] aspect-video flex items-center justify-center">
          <div className="text-center text-white/40">
            <div className="w-14 h-14 rounded-full border-2 border-white/30 flex items-center justify-center mx-auto mb-3">
              <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-xs font-sans tracking-widest uppercase opacity-60">Video — No Sleep America</p>
          </div>
        </div>
      }
      synopsis="An observational documentary about the working day of a Russian bakery in Brighton Beach, New York. The bakers, Natalya Dresvin and Kolya Chingrinsky, as well as Vitor Alfonso, the kitchen assistant, reveal the unrelenting demands of the job."
      year="1999"
      genre="Documentary"
      credits={[
        { label: 'Editor / Director / Producer', value: 'Imogen Thomas' },
        { label: 'Length / Format', value: '8 minutes 16mm' },
      ]}
    />
  )
}
