
export const CVButton = () => {
  const cvUrl = `https://devtechmarc.github.io/cv-page/CV-Marc.pdf`

  return (
    <a
      href={cvUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-primary btn-lg md:btn-wide rounded-xl my-1"
    >
      Descargar cv
    </a>
  )
}
