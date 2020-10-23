import React from 'react'
import Layout from './components/Layout'

interface Props {}

const App: React.FC<Props> = () => (
  <Layout>
    <button className="btn btn-primary">Submit</button>
  </Layout>
)

export default App
