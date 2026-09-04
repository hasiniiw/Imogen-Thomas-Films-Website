import FilmDetailShell from './FilmDetailShell'

const IMAGE = 'https://images.unsplash.com/photo-1663256936394-ee943b28b695?w=1400&h=580&fit=crop&auto=format'

function FestivalBadge({ lines }: { lines: string[] }) {
  return (
    <div className="border border-[#d8d4cb] rounded-full w-32 h-32 flex flex-col items-center justify-center text-center px-3">
      {lines.map((l, i) => (
        <p key={i} className={`text-[#2a2927] font-display font-bold uppercase leading-tight ${i === 0 ? 'text-[8px] tracking-widest' : i === lines.length - 1 ? 'text-[8px] tracking-wider' : 'text-[10px]'}`}
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
      category="05 — DOCUMENTARY"
      heroImage={IMAGE}
      synopsis="A group of APY (Anangu Pitjantjatjara Yankunytjatjara) rangers, their co-ordinators and ecologists travel to the Snowy Mountains to observe the work being carried out on the critically endangered frog species of the region."
      description={
        <>
          <p>
            A group of APY (Anangu Pitjantjatjara Yankunytjatjara) rangers, their co-ordinators and ecologists travel to the Snowy Mountains to observe the work being carried out on the critically endangered frog species of the region.
          </p>
          <p>
            This documentary intimately captures the cross-cultural exchange of environmental knowledge, tracking the deeply rooted connection between the rangers and the delicate ecosystems they are fighting to protect.
          </p>
        </>
      }
      details={[
        { label: 'Year', value: '2025' },
        { label: 'Producers', value: 'Imogen Thomas & Victor Evatt' },
        { label: 'Length / Format', value: '20 minutes 4K' },
        {
          label: 'Partnership',
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
