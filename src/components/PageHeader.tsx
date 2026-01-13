"use client";

import styles from "./PageHeader.module.css";
import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  image: string;
}

export default function PageHeader({
  title,
  subtitle,
  image,
}: PageHeaderProps) {
  return (
    <section className={styles.header}>
      <div className={styles.background}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.content}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gold">{subtitle}</span>
          <h1>{title}</h1>
        </motion.div>
      </div>
    </section>
  );
}
