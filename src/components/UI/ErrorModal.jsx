import Card from './Card'
import Button from './Button'
import styles from './ErrorModal.module.css'
import { Fragment } from 'react'
import ReactDom from 'react-dom'

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.resetError} />
}

const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.resetError}>Okay</Button>
      </footer>
    </Card>
  )
}

function ErrorModal(props) {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop resetError={props.resetError} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDom.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          resetError={props.resetError}
        />,
        document.getElementById('errormodal-root')
      )}
    </Fragment>
  )
}

ReactDom.createPortal
export default ErrorModal
