import nodemailer from 'nodemailer'
import makeTransactionMailer from './mailer.transaction.js'

let transporter = null

const { SMTP_HOST, SMTP_PORT } = process.env

async function makeTransporter() {
  if (!transporter) {
    try {
      transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: false,
        auth: null
      })
    } catch (err) {
      console.error(err)
      transporter = null
    }
  }

  return transporter
}

// async function disconnect() {

// }

const transactionMailer = makeTransactionMailer({ makeTransporter })

export default {
  makeTransporter,
  transactionMailer
}