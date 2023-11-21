const makeTransactionMailer = ({ makeTransporter }) => {
  return Object.freeze({
    sendMail
  })

  async function sendMail(message) {
    const { from, to, subject, html } = message

    const transporter = await makeTransporter()

    return await transporter.sendMail({
      from,
      to,
      subject,
      html,
    })

  }
}

export default makeTransactionMailer