import React from 'react'

interface Props {}

const Comp: React.FC<Props> = () => (
  <>
    <h5>
      <i className="fa fa-comments"></i> ห้องสนทนา
    </h5>
    <p className="text-muted">
      กรุณาลงทะเบียนเรียนคอร์สนี้เพื่อใช้งานห้องสนทนา
    </p>
  </>
)

export default Comp
