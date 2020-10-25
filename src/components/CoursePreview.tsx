import React from 'react'

interface Props {
  title: string
}

const Comp: React.FC<Props> = ({ title }) => (
  <>
    <h1 className="text-primary mb-3">{title}</h1>
    <button className="btn btn-sm px-3 btn-outline-primary">
      <i className="fa fa-share"></i> แชร์คอร์สนี้
    </button>
  </>
)

export default Comp
