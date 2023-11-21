import entities from '../../entities/index.js'
const { SMTP_USER } = process.env

export default function makeCreateTransaction({ transactionDb, transactionMailer }) {
  return async function ucCreateTransaction(transaction) {
    const entity = entities.makeTransaction(transaction)

    const message = {
      from: `${SMTP_USER}`,
      to: 'kenjdellosa@gmail.com',
      subject: 'New transaction',
      html: `
      <h1>New transaction<h1>
      <p>New transaction amounting to ${entity.getAmount()} has been recorded.</p>
      `
    }

    try {
      transactionMailer.sendMail(message)
    } catch (err) {
      console.error(err)
    }

    return transactionDb.saveRecord(entity.json())
  }
}