import { useForm, ValidationError } from "@formspree/react";
import "./Contact.css"

const Contact = ({contactRef}) => {
  const [state, handleSubmit] = useForm("xknpzqqj");

  if (state.succeeded) {
    return (
      <p>
        Thank you. I'll get back to you as soon as I can.
      </p>
    );
  }
  return (
    <div id="contact">
      <h2>Contact</h2>
      <form ref={contactRef} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" >
            Name
          </label>

          <br />

          <input id="name" type="name" name="name" required />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="email" >
            Email
          </label>

          <br />

          <input id="email" type="email" name="email" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="message" >
            Message
          </label>

          <br />

          <textarea id="message" name="message" required />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <button
          type="submit"
          
          id="form--submit"
          disabled={state.submitting}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
