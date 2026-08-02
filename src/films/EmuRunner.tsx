import FilmDetailShell from './FilmDetailShell'

const IMAGE = 'https://images.unsplash.com/photo-1717957389547-cec922a4182f?w=1400&h=600&fit=crop&auto=format'

export default function EmuRunner() {
  return (
    <FilmDetailShell
      title="Emu Runner"
      media={
        <img
          src={IMAGE}
          alt="Emu standing in the Australian outback"
          className="w-full object-cover bg-[#2a2927]"
          style={{ maxHeight: 520 }}
        />
      }
      synopsis="A grieving young Aboriginal girl finds solace and a deeper sense of belonging through her bond with a wild emu on her community's land."
      year="2018"
      genre="Feature Film"
      credits={[
        { label: 'Writer / Director', value: 'Imogen Thomas' },
        { label: 'Producers', value: 'Catriona McKenzie, Greer Simpkin & David Jowsey' },
        { label: 'Length / Format', value: 'Feature' },
        { label: 'Starring', value: 'Rhae-Kye Waites, Wayne Blair & Ningali Lawford-Wolf' },
      ]}
      note="Premiered at Toronto International Film Festival 2018 · Best Independent Film, Gold Coast Film Festival · 2019 AACTA nomination for Best Independent Film"
    />
  )
}
