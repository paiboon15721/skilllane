import React from 'react'
import CourseBanner from '../components/CourseBanner'
import CoursePreview from '../components/CoursePreview'
import CourseGlance from '../components/CourseGlance'
import CourseTabs from '../components/CourseTabs'
import InstructorDetail from '../components/InstructorDetail'
import RelatedCourse from '../components/RelatedCourses'
import CourseCurriculum from '../components/CourseCurriculum'

interface Props {}

const Comp: React.FC<Props> = () => (
  <>
    <div className="row">
      <div className="col-12">
        <CourseBanner title="Woo Expert เรียนสร้างเว็บขายของออนไลน์ด้วย WordPress + Woocommerce" />
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-lg-8 mt-4">
        <CoursePreview />
      </div>
      <div className="col-12 col-lg-4 mt-4">
        <CourseGlance />
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-lg-8 mt-4">
        <CourseTabs />
      </div>
      <div className="col-12 col-lg-4 mt-4">
        <InstructorDetail />
      </div>
      <div className="col-12 col-lg-8 mt-4">
        <CourseCurriculum />
      </div>
      <div className="col-12 col-lg-4 mt-4">
        <RelatedCourse />
      </div>
    </div>
  </>
)

export default Comp
