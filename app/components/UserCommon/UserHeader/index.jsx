import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Avatar, Button } from 'antd';
import styles from './styles.scss';

const UserHeader = ({ user, onActivate, onDeactivate }) => {
  const activateHandler = () => onActivate(user.userId);
  const deactivateHandler = () => onDeactivate(user.userId);

  return (
    <div className={styles.header}>
      <Row type="flex">
        <Col className={styles.user}>
          <Row
            type="flex"
            align="middle"
            justify="start"
            className={styles.userInfo}
          >
            <Col className={styles.userAvatar}>
              <Avatar size={100} src={user && user.iconUrl} icon="user" />
            </Col>
            <Col xs={{ span: 18, order: 1 }}>
              <h2 className={styles.title}>{user && user.firstName}</h2>
              <div className={styles.actions}>
                {user.blockedAt ? (
                  <Button onClick={activateHandler}>Activate</Button>
                ) : (
                  <Button onClick={deactivateHandler} type="danger">
                    Deactivate
                  </Button>
                )}
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default UserHeader;

UserHeader.propTypes = {
  user: PropTypes.object,
  onActivate: PropTypes.func,
  onDeactivate: PropTypes.func,
};
