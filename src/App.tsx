import React from 'react'
import Layout from './components/Layout'
import CourseDetail from './pages/CourseDetail'

interface Props {}

const App: React.FC<Props> = () => (
  <Layout>
    <CourseDetail />
  </Layout>
)

export default App
