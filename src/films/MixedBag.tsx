import FilmDetailShell from './FilmDetailShell'

export default function MixedBag() {
  return (
    <FilmDetailShell
      title="Mixed Bag"
      media={
        <div className="w-full bg-[#1a1917] aspect-video flex items-center justify-center">
          <div className="text-center text-white/40">
            <div className="w-14 h-14 rounded-full border-2 border-white/30 flex items-center justify-center mx-auto mb-3">
              <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-xs font-sans tracking-widest uppercase opacity-60">Video — Mixed Bag</p>
          </div>
        </div>
      }
      synopsis="Travelling from the city, a woman finds herself having to stop in a remote country town only to be confronted by her own racial prejudices."
      year="2008"
      genre="Drama"
      credits={[
        { label: 'Writer / Director / Producer', value: 'Imogen Thomas' },
        { label: 'Executive Producer', value: 'Victor Evatt & Anna Howard' },
        { label: 'First Nations Script Consultant', value: 'Frayne Barker' },
        { label: 'Starring', value: 'Arna Maria Winchester & Brooke Rose' },
        { label: 'Length / Format', value: '15 minutes HD' },
      ]}
    />
  )
}
