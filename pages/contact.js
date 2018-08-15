import Layout from "../components/MyLayout";
import { Form, Text } from 'informed';

export default () => (
  <div>
    <Layout>
      <h2>Contact us!</h2>
      <div className='contact-form'>
        <Form id="intro-form">
          <label htmlFor="intro-name">First name:</label>
          <Text field="name" id="intro-name" />
          <label htmlFor="last-name" className='last-name'>Last name:</label>
          <Text field="name-last" id="last-name" />
          <label htmlFor="email" className='email'>Email address:</label>
          <Text field="email" id="email" />
          <button type="submit" className='submit-button'>Submit</button>
        </Form>
      </div>
    </Layout>
  </div>
)