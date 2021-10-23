export function Quote({ quote, speaker }) {
  return (
    <>
      <p>{quote}</p>
      <p>- {speaker}</p>
      <button>New Quote</button>
    </>
  )
}
