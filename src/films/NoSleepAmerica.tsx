import FilmDetailShell from './FilmDetailShell'

const IMAGE = 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1400&h=600&fit=crop&auto=format'

export default function NoSleepAmerica() {
  return (
    <FilmDetailShell
      title="No Sleep America"
      category="04 — DOCUMENTARY"
      heroImage={IMAGE}
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
