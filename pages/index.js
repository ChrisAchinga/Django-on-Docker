import Layout from '@layouts/Layout'
import About from '@components/homePage/About'
import MemberBenefit from '@components/homePage/MemberBenefit'
import SectionTitle from '@components/SectionTitle'

export default function Home() {
  return (
    <Layout title='Home Page'>
      <About />
      <SectionTitle title='Member Benefits' />
      <MemberBenefit />
    </Layout>
  )
}
