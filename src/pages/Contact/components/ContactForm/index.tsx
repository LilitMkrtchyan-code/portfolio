import { useState } from 'react';
import { Form, Input, message } from 'antd';
import Heading from '../../../../components/shared/Heading';
import BaseButton from '../../../../components/shared/BaseButton';
import {
  CONTACT_FORM_LABELS,
  CONTACT_FORM_MESSAGES,
  CONTACT_FORM_PLACEHOLDERS,
  CONTACT_FORM_SUBMIT_TEXT,
  CONTACT_FORM_TITLE,
} from './consts';
import type { ContactFormValues } from './types';
import { sendTelegramMessage } from '../../../../api/telegram';
import styles from './styles.module.css';

const { TextArea } = Input;

const ContactForm = () => {
  const [form] = Form.useForm<ContactFormValues>();
  const [loading, setLoading] = useState(false);

  const handleFinish = async (values: ContactFormValues) => {
    setLoading(true);
    try {
      await sendTelegramMessage(values);
      message.success(CONTACT_FORM_MESSAGES.success);
      form.resetFields();
    } catch (error) {
      console.error('Telegram Error:', error);
      message.error('Something went wrong, please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.contactFormCard} aria-labelledby="contact-form-title">
      <Heading as="h2" variant="cardTitle" id="contact-form-title" className={styles.formTitle}>
        {CONTACT_FORM_TITLE}
      </Heading>

      <Form<ContactFormValues>
        form={form}
        layout="vertical"
        className={styles.form}
        onFinish={handleFinish}
        requiredMark={false}
      >
        <div className={styles.nameRow}>
          <Form.Item
            name="name"
            label={CONTACT_FORM_LABELS.name}
            rules={[{ required: true, message: CONTACT_FORM_MESSAGES.validationRequired }]}
          >
            <Input placeholder={CONTACT_FORM_PLACEHOLDERS.name} />
          </Form.Item>

          <Form.Item
            name="email"
            label={CONTACT_FORM_LABELS.email}
            rules={[
              { required: true, message: CONTACT_FORM_MESSAGES.validationRequired },
              { type: 'email', message: CONTACT_FORM_MESSAGES.validationEmail },
            ]}
          >
            <Input type="email" placeholder={CONTACT_FORM_PLACEHOLDERS.email} />
          </Form.Item>
        </div>

        <Form.Item
          name="message"
          label={CONTACT_FORM_LABELS.message}
          rules={[{ required: true, message: CONTACT_FORM_MESSAGES.validationRequired }]}
        >
          <TextArea placeholder={CONTACT_FORM_PLACEHOLDERS.message} rows={6} />
        </Form.Item>

        <BaseButton
          variant="primary"
          type="submit"
          className={styles.submitButton}
          disabled={loading}
        >
          {loading ? 'Sending' : CONTACT_FORM_SUBMIT_TEXT}
        </BaseButton>
      </Form>
    </section>
  );
};

export default ContactForm;
