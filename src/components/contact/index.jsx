import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { StyledButton } from "../../styles/styled-components/buttons";

const schema = yup
  .object({
    fullName: yup
      .string()
      .required("Please enter your full name")
      .min(3, "Name must be at least 3 characters"),
    subject: yup
      .string()
      .required("Please enter a subject")
      .min(3, "Subject must be at least 3 characters"),
    email: yup
      .string()
      .required("Please enter a valid email address")
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        "Invalid email format"
      ),
    message: yup
      .string()
      .required("Please enter a message")
      .min(3, "Message must be at least 3 characters"),
  })
  .required();

function ContactForm() {
  const confirmation = document.querySelector("#confirmation");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);

    reset();

    confirmation.classList.remove("sentForm");
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="fullName">Full name:*</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          {...register("fullName", {
            required: true,
            minLength: 3,
          })}
        />
        <p className="warn">{errors.fullName?.message}</p>
        <label htmlFor="subject">Subject:*</label>
        <input
          type="text"
          id="subject"
          name="subject"
          {...register("subject", { required: true, minLength: 3 })}
        />
        <p className="warn">{errors.subject?.message}</p>
        <label htmlFor="email">Email:*</label>
        <input
          type="email"
          id="email"
          name="email"
          {...register("email", {
            required: true,
          })}
        />
        <p className="warn">{errors.email?.message}</p>
        <label htmlFor="message">Message:*</label>
        <textarea
          id="message"
          name="message"
          {...register("message", {
            required: true,
            minLength: 3,
          })}
        />
        <p className="warn">{errors.message?.message}</p>
        <StyledButton type="submit">Submit</StyledButton>
      </form>
      <p id="confirmation" className="sentForm centered">
        Message successfully sent
      </p>
    </>
  );
}

export { ContactForm };
