import FilmDetailShell from "./FilmDetailShell"
import IMAGE from "../imports/apy-ranger-new.jpg"

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
            A group of APY (Anangu Pitjantjatjara Yankunytjatjara) rangers,
            their co-ordinators and ecologists travel to the Snowy Mountains to
            observe the work being carried out on the critically endangered frog
            species of the region.
          </p>
          <p>
            This documentary intimately captures the cross-cultural exchange of
            environmental knowledge, tracking the deeply rooted connection
            between the rangers and the delicate ecosystems they are fighting to
            protect.
          </p>
        </>
      }
      details={[
        { label: "Year", value: "2025" },
        { label: "Producers", value: "Imogen Thomas & Victor Evatt" },
        { label: "Length / Format", value: "20 minutes 4K" },
        {
          label: "Partnership",
          value:
            "Anangu Pitjantjatjara Yankunytjatjara and the Brungle Tumut Local Aboriginal Land Council",
        },
      ]}
    />
  )
}
