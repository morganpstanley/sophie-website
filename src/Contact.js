import { useForm, ValidationError } from "@formspree/react";
import "./Contact.css"

const Contact = ({contactRef}) => {
  const [state, handleSubmit] = useForm("mpzbzgpl");

  if (state.succeeded) {
    return (
      <div id="thank-you-message" ref={contactRef}>
        Thanks! I'll get back to you as soon as I can.
      </div>
    );
  }
  return (
    <div id="contact" className="block">
      <h1>Contact</h1>
      <form ref={contactRef} onSubmit={handleSubmit}>
        <div className="input-area" id="input-name">

          <br />

          <input id="name" type="name" name="name" required placeholder="Name"/>
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>

        <div className="input-area" id="input-email">

          <br />

          <input id="email" type="email" name="email" required placeholder="Email"/>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <br />

        <textarea id="message" name="message" required placeholder="Message"/>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

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
