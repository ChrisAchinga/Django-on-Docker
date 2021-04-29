import Link from 'next/link'
import { API_URL } from 'configuration/index'
import Layout from '@layouts/Layuout'

const Sitemap = ({ routes }) => {
  const title = 'Sitemap Page'
  const description = 'Swahilipot Hub is a tech and art hub for the community'
  return (
    <Layout title={title} description={description}>
      <main>
        <h1 className='text-center align-content-center'>
          Website Routes and Pages
        </h1>
        <div className='list-group'>
          {routes.map((rte) => (
            <div
              key={rte.id}
              className='container list-group-item list-group-item-action align-content-center text-center'
            >
                <p>
                  {rte.page} (status: {rte.status}):
                </p>
              <Link href={rte.path}>
              {rte.page}
              </Link>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/routes`)
  const routes = await res.json()

  console.log(routes)

  return {
    props: { routes },
  }
}

export default Sitemap
