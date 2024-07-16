import React from "react"

import Button from "../Button/Button"
import styles from "./Exportable.module.css"

interface ExportProps {
  label: string
}

const Export: React.FC<ExportProps> = ({ label }) => {
  return (
    <div className={styles.container}>
      <Button label={label} onClick={() => console.log("1st")} />
      <Button label={label} onClick={() => console.log("2nd")} />
      <Button label={label} onClick={() => console.log("3rd")} />
    </div>
  )
}

export default Export
