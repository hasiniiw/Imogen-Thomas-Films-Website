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
      synopsis="Her mother’s death propels a young girl to seek comfort in her ancestral lands, where a bond she forms with a wild emu rebuilds her spirit but also brings her into conflict with a social worker who could break her family apart."
      description={
        <>
          <p>
            Her mother’s death propels a young girl to seek comfort in her ancestral lands, where a bond she forms with a wild emu rebuilds her spirit but also brings her into conflict with a social worker who could break her family apart.
          </p>
          <div className="pt-6">
            <a 
              href="https://www.emurunnerfilm.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[#e9e6df] hover:text-[#c99138] transition-colors font-sans text-xs tracking-[0.2em] uppercase border-b border-[#e9e6df]/30 hover:border-[#c99138] pb-1"
            >
              Emu Runner Website
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          </div>
        </>
      }
      details={[
        { label: 'Year', value: '2018' },
        { label: 'Genre', value: 'Drama' },
        { label: 'Writer/Director', value: 'Imogen Thomas' },
        { label: 'Producers', value: 'Imogen Thomas, Victor Evatt, Antonia Barnard, John Fink & Gabriel Barber Shipton' },
        { label: 'First Nations Script Consultant', value: 'Frayne Barker' },
        { label: 'Starring', value: 'Rhae-Kye Waites, Wayne Blair, Maurial Spearim, Georgia Blizzard & Rob Carlton' },
        { label: 'Length/Format', value: '96 minutes 2K' },
      ]}
    />
  )
}
