import React from 'react'
import banner from '../assets/banner.png'

interface Props {}

const Comp: React.FC<Props> = () => (
  <img src={banner} width="100%" alt="banner" />
)

export default Comp
