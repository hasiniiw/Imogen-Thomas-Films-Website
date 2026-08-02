import FilmDetailShell from './FilmDetailShell'

const IMAGE = 'https://images.unsplash.com/photo-1663256936394-ee943b28b695?w=1400&h=580&fit=crop&auto=format'

function FestivalBadge({ lines }: { lines: string[] }) {
  return (
    <div className="border-2 border-[#2a2927]/60 rounded-full w-36 h-36 flex flex-col items-center justify-center text-center px-3">
      {lines.map((l, i) => (
        <p key={i} className={`text-[#2a2927] font-display font-extrabold uppercase leading-tight ${i === 0 ? 'text-[9px] tracking-widest' : i === lines.length - 1 ? 'text-[9px] tracking-wider' : 'text-[11px]'}`}
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {l}
        </p>
      ))}
    </div>
  )
}

export default function ApyRangerVisit() {
  return (
    <FilmDetailShell
      title="APY Ranger Visit"
      media={
        <img
          src={IMAGE}
          alt="Alpine rocky mountain landscape with blue sky"
          className="w-full object-cover bg-[#2a2927]"
          style={{ maxHeight: 520 }}
        />
      }
      synopsis="A group of APY (Anangu Pitjantjatjara Yankunytjatjara) rangers, their co-ordinators and ecologists travel to the Snowy Mountains to observe the work being carried out on the critically endangered frog species of the region."
      year="2025"
      genre="Documentary"
      credits={[
        { label: 'Producers', value: 'Imogen Thomas & Victor Evatt' },
        { label: 'Length / Format', value: '20 minutes 4K' },
        {
          label: 'Made in Partnership with',
          value: 'Anangu Pitjantjatjara Yankunytjatjara and the Brungle Tumut Local Aboriginal Land Council',
        },
      ]}
      festivalBadges={
        <>
          <FestivalBadge lines={['Heart of Gold', 'International Short', 'Film Festival', 'Official Selection', '— 2025 —']} />
          <FestivalBadge lines={['Official Selection', 'Canberra Short', 'Film Festival', '2025']} />
        </>
      }
    />
  )
}
