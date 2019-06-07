import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Divider, Row, Button, Select } from 'antd';
import { mapPropsToFields } from 'utils/formHelper';
const { TextArea } = Input;
const { Option } = Select;
const { Item } = Form;

const PhoneFormExternal = ({
  onSubmit,
  clients = [],
  tariffs = [],
  models = [],
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
          <Item label="Number">
            {getFieldDecorator('number', {
              rules: [
                {
                  required: true,
                  message: 'Please fill the field!',
                },
              ],
            })(<Input />)}
          </Item>
          <Item label="Description">
            {getFieldDecorator('description', {
              rules: [
                {
                  required: true,
                  message: 'Please fill the field!',
                },
              ],
            })(<TextArea rows={5} />)}
          </Item>
          <Item label="Client">
            {getFieldDecorator('client', {
              rules: [
                {
                  required: true,
                  message: 'Please fill the field!',
                },
              ],
            })(
              <Select>
                {clients.map(el => (
                  <Option key={el.id} value={el.id}>
                    {`${el.name} ${el.lastName}`}
                  </Option>
                ))}
              </Select>,
            )}
          </Item>
          <Item label="Models">
            {getFieldDecorator('model', {
              rules: [
                {
                  required: true,
                  message: 'Please fill the field!',
                },
              ],
            })(
              <Select>
                {models.map(phone => (
                  <Option key={phone.id} value={phone.id}>
                    {phone.name}
                  </Option>
                ))}
              </Select>,
            )}
          </Item>
          <Item label="Tariff">
            {getFieldDecorator('tariff', {
              rules: [
                {
                  required: true,
                  message: 'Please fill the field!',
                },
              ],
            })(
              <Select>
                {tariffs.map(phone => (
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

PhoneFormExternal.propTypes = {
  form: PropTypes.object,
  onSubmit: PropTypes.func,
  clients: PropTypes.any,
  tariffs: PropTypes.any,
  models: PropTypes.any,
};

const PhoneForm = Form.create({
  name: 'userForm',
  mapPropsToFields: mapPropsToFields('phone', Form),
})(PhoneFormExternal);

export default PhoneForm;
