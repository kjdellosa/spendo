import { Modal, Form, Select, Input } from 'antd'

const formLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
  layout: 'horizontal'
}

export const CategoryModalForm = ({
  form,
  isOpen,
  onSubmit,
  onCancel,
  isLoading = false
}) => {
  return (
    <Modal
      forceRender
      title='Category'
      onOk={onSubmit}
      onCancel={onCancel}
      open={isOpen}
      okButtonProps={{ type: 'default', loading: isLoading }}
    >
      <Form form={form} name='Category' {...formLayout}>
        <Form.Item name='name' label='Name' rules={[{ required: true, message: 'Name is required' }]}>
          <Input />
        </Form.Item>
        <Form.Item name='type' label='Type' rules={[{ required: true, message: 'Type is required' }]}>
          <Select placeholder="Select">
            <Select.Option value={'INCOME'}>INCOME</Select.Option>
            <Select.Option value={'EXPENSE'}>EXPENSE</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name='description' label='Description'>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  )
}
