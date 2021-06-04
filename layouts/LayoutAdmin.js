import Head from 'next/head'
import styles from '@styles/admin.module.css'
import SideBar from '@components/admin/SideBar'
import TopMenu from '@components/admin/TopMenu'

const LayoutAdmin = ({ children, title }) => {
  return (
    <div className={styles.admin}>
      <Head>
      <title>SPH Admin | {title}</title>
      </Head>
      <main>{children}</main>
    </div>
  )
}

export default LayoutAdmin