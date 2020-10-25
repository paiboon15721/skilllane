import React from 'react'
import paymentInstruction from '../assets/payment-instruction.png'

interface Props {}

const Comp: React.FC<Props> = () => (
  <img
    src={paymentInstruction}
    className="img-fluid"
    alt="Payment instruction"
  />
)

export default Comp
