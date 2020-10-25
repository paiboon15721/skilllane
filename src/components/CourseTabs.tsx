import React from 'react'
import PaymentInstruction from './PaymentInstruction'
import ChatRoom from './ChatRoom'

interface Props {}

const Comp: React.FC<Props> = () => (
  <>
    <ul className="nav nav-tabs" id="myTab" role="tablist">
      <li className="nav-item">
        <a
          className="nav-link active"
          id="course-detail-tab"
          data-toggle="tab"
          href="#course-detail"
          role="tab"
          aria-controls="course-detail"
          aria-selected="true"
        >
          รายละเอียด
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          id="payment-instruction-tab"
          data-toggle="tab"
          href="#payment-instruction"
          role="tab"
          aria-controls="payment-instruction"
          aria-selected="false"
        >
          วิธีการชำระเงิน
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          id="chat-room-tab"
          data-toggle="tab"
          href="#chat-room"
          role="tab"
          aria-controls="chat-room"
          aria-selected="false"
        >
          ห้องสนทนา
        </a>
      </li>
    </ul>
    <div className="tab-content" id="myTabContent">
      <div
        className="tab-pane fade show active"
        id="course-detail"
        role="tabpanel"
        aria-labelledby="course-detail-tab"
      >
        Detail
      </div>
      <div
        className="tab-pane fade"
        id="payment-instruction"
        role="tabpanel"
        aria-labelledby="payment-instruction-tab"
      >
        <PaymentInstruction />
      </div>
      <div
        className="tab-pane fade"
        id="chat-room"
        role="tabpanel"
        aria-labelledby="chat-room-tab"
      >
        <ChatRoom />
      </div>
    </div>
  </>
)

export default Comp
