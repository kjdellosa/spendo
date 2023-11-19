import { useCategory } from '@/hooks/useCategory'
import { Modal, Form, DatePicker, InputNumber, Select, Input } from 'antd'
import momentGenerateConfig from 'rc-picker/lib/generate/moment'

const CustomDatePicker = DatePicker.generatePicker(momentGenerateConfig)

const formLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
  layout: 'horizontal'
}

export const TransactionModalForm = ({
  form,
  isOpen,
  onSubmit,
  onCancel,
  isLoading = false
}) => {
  const { list } = useCategory()

  console.log(list)

  return (
    <Modal
      forceRender
      title='Add Transaction'
      onOk={onSubmit}
      onCancel={onCancel}
      open={isOpen}
      okButtonProps={{ type: 'default', loading: isLoading }}
    >
      <Form form={form} name='Transaction' {...formLayout}>
        <Form.Item name='category_id' label='Category' rules={[{ required: true, message: 'Category is required' }]}>
          <Select
            placeholder="Select"
          >
            {
              list?.category?.map(c => {
                return (
                  <Select.Option value={c.id} key={c.id}>{c.name}</Select.Option>
                )
              })
            }
          </Select>
        </Form.Item>
        <Form.Item name='amount' label='Amount' rules={[{ required: true, message: 'Amount is required' }]}>
          <InputNumber />
        </Form.Item>
        <Form.Item name='date' label='Date' rules={[{ required: true, message: 'Date is required' }]}>
          <CustomDatePicker />
        </Form.Item>
        <Form.Item name='description' label='Description'>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  )
}
