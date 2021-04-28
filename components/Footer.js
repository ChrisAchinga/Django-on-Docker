import styles from '@styles/Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <>
      <footer className={styles.footer}>Community Space &copy; {currentYear}</footer>
    </>
  )
}
