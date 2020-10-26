import React, { useState } from 'react'
import { Collapse } from 'react-collapse'

interface DetailProps {
  opened: boolean
}

const Detail: React.FC<DetailProps> = ({ opened }) => (
  <div
    style={
      opened
        ? { height: 'auto', overflow: 'initial' }
        : { height: 195, overflow: 'hidden' }
    }
  >
    <p>
      <span className="font-italic mr-2">
        คอร์สออนไลน์สอนสร้างเว็บขายของออนไลน์ ด้วย WordPress + Woocommerce
      </span>
      เรียนรู้ขั้นตอนการสร้างเว็บไซต์ WordPress
      สำหรับการทำเว็บร้านขายของออนไลน์โดยเฉพาะ สอนวิธีสร้างเว็บตั้งแต่เริ่มต้น
      ทีละขั้นตอนแบบละเอียด เรียนรู้วิธีการใช้ปลั๊กอิน Woocommerce แบบมืออาชีพ
      เพื่อให้เว็บของคุณใช้งานจริงได้
    </p>
    <h5 className="mt-4">คอร์สนี้ เราสอนอะไรบ้าง</h5>
    <p>
      เรียนรู้ทุกสิ่งทุกอย่างเกี่ยวกับการสร้างเว็บ WordPress
      และการทำระบบตระกร้าขายของออนไลน์ สอนตั้งแต่เริ่มต้น
      ไม่จำเป็นต้องมีพื้นฐานมาก่อน ก็สามารถเข้าเรียนได้
    </p>
    <h5 className="mt-4">ผู้เรียนต้องมีความรู้อะไรมาก่อนหรือไม่</h5>
    <p>
      ผู้เรียนไม่จำเป็นต้องมีความรู้พื้นฐานการทำเว็บมาก่อน
      เพราะคอร์สนี้สอนตั้งแต่เริ่มต้น จนถึงระดับ Advance
    </p>
    <p>
      หมายความว่า หากคุณไม่มีพื้นฐานอะไรเลยก็สามารถลงเรียนได้
      หรือหากคุณพอมีพื้นฐาน WordPress อยู่แล้ว ก็สามารถลงเรียนได้เช่นกัน
      เพื่อจะได้นำความรู้ในคอร์สเรียนนี้
      มาใช้ต่อยอดเพิ่มเติมเรื่องระบบตระกร้าสินค้าบนเว็บของคุณ
    </p>
    <h5 className="mt-4">ปรึกษาหลังเรียนคอร์สได้หรือไม่</h5>
    <p>
      หากคุณเรียนคอร์สนี้จบแล้ว จุดไหนที่ยังไม่เข้าใจ
      สามารถสอบถามเพิ่มเติมจากผู้สอนได้โดยตรงได้เลย
      แต่ขอจำกัดระยะเวลาในการสอบถามเพิ่มเติมได้เพียงคนละ 3 เดือน
      นับจากวันที่ลงเรียนคอร์สนี้ (วิธีการจะอยู่ในอีเมลที่ SkillLane ส่งให้
      หลังจากชำระเงินเสร็จเรียบร้อยแล้ว)
    </p>
  </div>
)

interface Props {}

const Comp: React.FC<Props> = () => {
  const [opened, setOpened] = useState(false)

  return (
    <>
      <Collapse isOpened>
        <Detail opened={opened} />
      </Collapse>
      <button
        type="button"
        onClick={() => setOpened(!opened)}
        className="btn btn-link mt-3"
      >
        {opened ? 'ซ่อน' : 'อ่านทั้งหมด'}
      </button>
    </>
  )
}

export default Comp
