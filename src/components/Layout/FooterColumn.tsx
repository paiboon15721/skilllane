import React from 'react'

interface Props {
  title: string
  links: string[]
}

const Comp: React.FC<Props> = ({ title, links }) => (
  <>
    <h5>{title}</h5>
    <ul className="list-unstyled text-small">
      {links.map(v => (
        <li key={v} className="text-muted">
          <a href="/#">{v}</a>
        </li>
      ))}
    </ul>
  </>
)

export default Comp
