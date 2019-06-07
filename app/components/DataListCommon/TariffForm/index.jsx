import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Divider, Row, Button, Select } from 'antd';
import { mapPropsToFields } from 'utils/formHelper';
const { TextArea } = Input;
const { Option } = Select;
const { Item } = Form;

const ClientFormExternal = ({
  onSubmit,
  services = [],
  form: { getFieldDecorator, validateFields },
}) => {
  function handleSubmit(e) {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        onSubmit(values);
      }

      return values;
    });
  }

  return (
    <Row>
      <Form style={{ width: '100%', maxWidth: '400px', margin: '10px auto' }}>
        <Divider>Create</Divider>
        <Row gutter={16}>
          <Item label="Name">
            {getFieldDecorator('name', {
              rules: [
                {
                  required: true,
                  message: 'Please fill the field!',
                },
              ],
            })(<Input />)}
          </Item>
          <Item label="Description">
            {getFieldDecorator('desc', {
              rules: [
                {
                  required: true,
                  message: 'Please fill the field!',
                },
              ],
            })(<TextArea rows={5} />)}
          </Item>
          <Item label="Services">
            {getFieldDecorator('services', {
              rules: [
                {
                  required: true,
                  message: 'Please fill the field!',
                },
              ],
            })(
              <Select mode="multiple">
                {services.map(phone => (
                  <Option key={phone.id} value={phone.id}>
                    {phone.name}
                  </Option>
                ))}
              </Select>,
            )}
          </Item>
        </Row>
        <Row>
          <Button type="primary" htmlType="submit" onClick={handleSubmit}>
            {'OK'}
          </Button>
        </Row>
      </Form>
    </Row>
  );
};

ClientFormExternal.propTypes = {
  form: PropTypes.object,
  onSubmit: PropTypes.func,
  services: PropTypes.any,
};

const ClientForm = Form.create({
  name: 'userForm',
  mapPropsToFields: mapPropsToFields('model', Form),
})(ClientFormExternal);

export default ClientForm;
