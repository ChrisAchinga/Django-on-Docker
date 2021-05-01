import Layout from '@layouts/Layout'
import About from '@components/homePage/About'
import MemberBenefit from '@components/homePage/MemberBenefit'
import ActivityHub from '@components/homePage/ActivityHub'
import SectionTitle from '@components/SectionTitle'

export default function Home() {
  return (
    <Layout title='Home Page'>
      <About />
      <SectionTitle title='Member Benefits' />
      <MemberBenefit />
      <SectionTitle title='We are a Tech, Creative & Heritage Hub' />
      <ActivityHub />
      <SectionTitle title='Explore the hub spaces' />
    </Layout>
  )
}
