import FilmDetailShell from './FilmDetailShell'

const IMAGE = 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1400&h=600&fit=crop&auto=format'

export default function QuietHour() {
  return (
    <FilmDetailShell
      title="Quiet Hour"
      category="02 — DRAMA"
      heroImage={IMAGE}
      vimeoId="1101378586"
      vimeoHash="c031989b55"
      synopsis="An impending apartment move strains a mother and daughter's relationship as they pack up their lives with the help of a local teenage boy."
      description={
        <>
          <p>
            An impending apartment move strains a mother and daughter's relationship as they pack up their lives with the help of a local teenage boy. The quiet observation of the packing process brings long-held tensions to the surface, exploring the fragile dynamic between mother and daughter in a time of transition.
          </p>
        </>
      }
      details={[
        { label: 'Year', value: '2001' },
        { label: 'Writer / Director', value: 'Imogen Thomas' },
        { label: 'Producers', value: 'Teona Mitevska' },
        { label: 'Co-producer', value: 'Manisha Archarya' },
        { label: 'Length / Format', value: '12 minutes 16mm' },
      ]}
    />
  )
}
