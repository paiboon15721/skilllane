import React from 'react'

interface Props {}

const Comp: React.FC<Props> = () => (
  <div className="card">
    <div className="card-header">ผู้สอน</div>
    <div className="card-body">
      <h5 className="card-title">Primary card title</h5>
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
    </div>
  </div>
)

export default Comp
