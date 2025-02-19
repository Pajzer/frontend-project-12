import { Col, Container, Row, Nav } from 'react-bootstrap';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChannelsByToken } from '../slices/channelsSlice';
import { fetchMessagesByToken } from '../slices/messagesSlice';
import MessageForm from './MessageForm.jsx';
import AddChannelModal from '../components/modals/AddChannelModal.jsx';
import ChannelsList from '../components/ChannelsList.jsx';

const ChatPage = () => {
  const dispatch = useDispatch();
  const token = useSelector(({ auth }) => auth.token);
  const username = useSelector(({ auth }) => auth.username);
  const channels = useSelector(({ channels }) => channels.channelsData);
  const activeChannelId = useSelector(({ channels }) => channels.activeChannelId);
  const messages = useSelector(({ messages }) => messages.messagesData);

  const ActiveChannelForTitle = channels.find((channel) => channel.id === activeChannelId) || {};
  const filteredMessage = messages.filter((message) => message.channelId === activeChannelId);

  useEffect(() => {
    dispatch(fetchChannelsByToken(token));
    dispatch(fetchMessagesByToken(token));
  }, [dispatch, token]);

  const renderMessages = () => {
    return filteredMessage.map((message) => (
      <div
        id="messages-box"
        className="chat-messages overflow-auto px-5"
        key={message.id}
      >
        <span
          className={message.username === username ? 'fw-bold' : 'fw-normal'}
        >
          {message.username}:{' '}
        </span>
        {message.body}
        </div>
    ));
  };

  return (
    <Container className="h-100 my-4 overflow-hidden rounded shadow">
      <Row className="h-100 bg-white flex-md-row">
        <Col
          xs={4}
          className="col-md-2 border-end px-0 bg-light flex-column h-100 d-flex"
        >
          <div className="d-flex mt-1 justify-content-between mb-2 ps-4 pe-2 p-4">
            <b>Каналы</b>
            <AddChannelModal />
          </div>
          <Nav
            as="ul"
            id="channels-box"
            className="flex-column nav-pills nav-fill px-2 mb-3 overflow-auto h-100 d-block"
          >
            <ChannelsList data={{ channels, activeChannelId }} />
          </Nav>
        </Col>
        <Col className="p-0 h-100">
          <div className="d-flex flex-column h-100">
            <div className="bg-light mb-4 p-3 shadow-sm small">
              <p className="m-0">
                <b># {ActiveChannelForTitle.name}</b>
              </p>
              <span className="text-muted">
                {filteredMessage.length} сообщений
              </span>
            </div>
            {renderMessages()}
            <div className="mt-auto px-5 py-3">
              <MessageForm />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ChatPage;