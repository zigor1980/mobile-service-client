import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Divider, Row, Col } from 'antd';
import ReactPlayer from 'react-player';
import moment from 'moment';
import styles from './styles.scss';

const UserForm = ({ user }) => {
  if (!user) {
    return null;
  }
  return (
    <Form className={styles.form}>
      <Row gutter={16} type="flex">
        <Col xs={{ span: 24, order: 1 }} md={{ span: 12, order: 2 }}>
          {user.playlistUrl && (
            <div className={styles.video}>
              <Divider>Video</Divider>
              <ReactPlayer
                playing
                controls
                pip={false}
                width="100%"
                url={user.playlistUrl}
              />
            </div>
          )}
        </Col>
        <Col xs={{ span: 24, order: 1 }} md={{ span: 12, order: 1 }}>
          <Divider>Info</Divider>
          <Form.Item label="Name">
            <Input value={user.firstName} />
          </Form.Item>
          <Form.Item label="Phone number">
            <Input value={user.phoneNumber} />
          </Form.Item>
          <Form.Item label="Gender">
            <Input value={user.gender} />
          </Form.Item>
          <Form.Item label="Date of Birth">
            <Input value={moment(user.dateOfBirth).format()} />
          </Form.Item>
          {user.settings && (
            <React.Fragment>
              <Divider>Settings</Divider>
              <Form.Item label="Gender I’m interested in">
                <Input value={user.settings.genderOfInterest} />
              </Form.Item>
              <Form.Item label="Age of interest">
                <Input
                  rows={6}
                  value={`${user.settings.ageOfInterestFrom} - ${
                    user.settings.ageOfInterestTo
                  }`}
                />
              </Form.Item>
            </React.Fragment>
          )}
        </Col>
      </Row>
    </Form>
  );
};

UserForm.propTypes = {
  user: PropTypes.object,
};

export default UserForm;
