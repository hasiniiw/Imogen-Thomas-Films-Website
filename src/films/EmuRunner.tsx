import FilmDetailShell from './FilmDetailShell'
import emuRunnerHero from '../imports/emu-runner-hero.jpg'

const IMAGE = emuRunnerHero

export default function EmuRunner() {
  return (
    <FilmDetailShell
      title="Emu Runner"
      category="01 — FEATURE FILM"
      heroImage={IMAGE}
      youtubeId="z7TqkvUADEI"
      synopsis="A grieving young Aboriginal girl finds solace and a deeper sense of belonging through her bond with a wild emu on her community's land."
      description={
        <>
          <p>
            A grieving young Aboriginal girl finds solace and a deeper sense of belonging through her bond with a wild emu on her community's land. The film explores the profound connection between the young girl, her family, and the natural world around them as they navigate loss and healing.
          </p>
          <p>
            Premiered at Toronto International Film Festival 2018. Winner of Best Independent Film at the Gold Coast Film Festival and received a 2019 AACTA nomination for Best Independent Film.
          </p>
        </>
      }
      details={[
        { label: 'Year', value: '2018' },
        { label: 'Writer / Director', value: 'Imogen Thomas' },
        { label: 'Producers', value: 'Catriona McKenzie, Greer Simpkin & David Jowsey' },
        { label: 'Length / Format', value: 'Feature' },
        { label: 'Starring', value: 'Rhae-Kye Waites, Wayne Blair & Ningali Lawford-Wolf' },
      ]}
    />
  )
}
