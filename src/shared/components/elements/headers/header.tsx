import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../../../styles/shared/components/elements/headers/Header.module.scss'

const Header: NextPage = () => {
  return (
        <header className={styles.header}>
                <Link href="/">
                    <a className={styles.subheader}>
                    <Image
                        src="/assets/img/logo/zoominspo-logo.png"
                        alt="zoominspo logo"
                        width={60}
                        height={50}
                        priority={true}
                        loading='eager'
                    />
                    <h1>ZoomInspo</h1>
                    </a>
                </Link>
        </header>
  )
}

export default Header