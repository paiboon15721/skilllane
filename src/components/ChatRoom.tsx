import React from 'react'

interface Props {}

const Comp: React.FC<Props> = () => (
  <div className="pl-4">
    <h5>
      <i className="fa fa-comments"></i> ห้องสนทนา
    </h5>
    <p className="text-muted">
      กรุณาลงทะเบียนเรียนคอร์สนี้เพื่อใช้งานห้องสนทนา
    </p>
  </div>
)

export default Comp
