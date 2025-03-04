import { Form, Button, InputGroup } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import leoProfanity from 'leo-profanity';
import { useTranslation } from 'react-i18next';
import { sendMessagesByToken } from '../slices/messagesSlice';
import SvgIcon from '../utils/SvgIcon';

const MessageForm = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const token = useSelector(({ auth }) => auth.token);
  const username = useSelector(({ auth }) => auth.username);
  const activeChannelId = useSelector(({ channels }) => channels.activeChannelId);

  const formik = useFormik({
    initialValues: {
      body: '',
    },
    onSubmit: (values, { resetForm }) => {
      const cleanMessages = leoProfanity.clean(values.body);
      const newMessage = {
        body: cleanMessages,
        channelId: activeChannelId,
        username,
      };
      dispatch(sendMessagesByToken({ token, newMessage }));
      resetForm();
    },
  });

  return (
    <Form noValidate className="py-1 border rounded-2" onSubmit={formik.handleSubmit}>
      <InputGroup className="has-validation">
        <Form.Control
          name="body"
          aria-label={t('messageForm.ariaLabel')}
          placeholder={t('messageForm.placeholder')}
          className="border-0 p-0 ps-2"
          onChange={formik.handleChange}
          value={formik.values.body}
        />
        <Button
          type="submit"
          disabled={!formik.values.body}
          variant="light"
          className="btn-group-vertical"
        >
          <SvgIcon />
          <span className="visually-hidden">{t('messageForm.submit')}</span>
        </Button>
      </InputGroup>
    </Form>
  );
};

export default MessageForm;
