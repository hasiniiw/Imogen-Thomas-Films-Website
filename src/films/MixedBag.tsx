import FilmDetailShell from './FilmDetailShell'

const IMAGE = 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=1400&h=600&fit=crop&auto=format'

export default function MixedBag() {
  return (
    <FilmDetailShell
      title="Mixed Bag"
      category="03 — DRAMA"
      heroImage={IMAGE}
      synopsis="Travelling from the city, a woman finds herself having to stop in a remote country town only to be confronted by her own racial prejudices."
      description={
        <>
          <p>
            Travelling from the city, a woman finds herself having to stop in a remote country town only to be confronted by her own racial prejudices. As she interacts with the local community, her preconceived notions are challenged in subtle but profound ways, leading to an unexpected journey of self-reflection.
          </p>
        </>
      }
      details={[
        { label: 'Year', value: '2008' },
        { label: 'Writer / Director', value: 'Imogen Thomas' },
        { label: 'Executive Producer', value: 'Victor Evatt & Anna Howard' },
        { label: 'First Nations Script', value: 'Frayne Barker' },
        { label: 'Starring', value: 'Arna Maria Winchester & Brooke Rose' },
        { label: 'Length / Format', value: '15 minutes HD' },
      ]}
    />
  )
}
