import FilmDetailShell from './FilmDetailShell'
import IMAGE from '../imports/no-sleep-america-new.jpg'

export default function NoSleepAmerica() {
  return (
    <FilmDetailShell
      title="No Sleep America"
      category="04 — DOCUMENTARY"
      heroImage={IMAGE}
      vimeoId="1101384428"
      vimeoHash="c03d45e1e9"
      synopsis="An observational documentary about the working day of a Russian bakery in Brighton Beach, New York."
      description={
        <>
          <p>
            An observational documentary about the working day of a Russian bakery in Brighton Beach, New York. The bakers, Natalya Dresvin and Kolya Chingrinsky, as well as Vitor Alfonso, the kitchen assistant, reveal the unrelenting demands of the job.
          </p>
          <p>
            The film intimately captures the exhausting rhythm, the physical toll, and the camaraderie of essential labor in a bustling immigrant community.
          </p>
        </>
      }
      details={[
        { label: 'Year', value: '1999' },
        { label: 'Editor / Director', value: 'Imogen Thomas' },
        { label: 'Length / Format', value: '8 minutes 16mm' },
      ]}
    />
  )
}
