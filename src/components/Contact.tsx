import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";
import axios from "axios";
import { Highlight, themes } from "prism-react-renderer";
import emailjs from "@emailjs/browser";
import { contactData, toastMessages } from "../assets/lib/data.tsx";
import { useSectionInView } from "../assets/lib/hooks";
import { useLanguage } from "../context/language-context";
import { ToastContainer, toast } from "react-toastify";
import { useTheme } from "../context/theme-context";
import { motion, useScroll, useTransform } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

const Contact: React.FC = () => {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "";

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [cursor, setCursor] = useState<string>("");
  const [lastUpdatedField, setLastUpdatedField] = useState<string | null>(null);
  const { ref } = useSectionInView("Contact");
  const { language } = useLanguage();
  const { theme } = useTheme();
  const [error, setError] = useState<string | any>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);

  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  // ✅ FIXED FORM SUBMIT - EmailJS template parameters corrected
  const notifySentForm: React.FormEventHandler<HTMLFormElement> = async (e) => {
    setError(null);
    e.preventDefault();
    setIsSubmitting(true);

    const formData = {
      name,
      email,
      subject,
      message,
    };

    try {
      let emailSent = false;

      // ✅ TRY METHOD 1: EmailJS (if configured)
      if (
        import.meta.env.VITE_EMAILJS_SERVICE_ID &&
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID &&
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      ) {
        try {
          await emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            e.currentTarget,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
          );
          console.log("✅ EmailJS sent successfully!");
          emailSent = true;
        } catch (emailJsError) {
          console.warn("⚠️ EmailJS failed, trying backend...", emailJsError);
        }
      }

      // ✅ TRY METHOD 2: Your Backend (if EmailJS failed or not configured)
      if (!emailSent && apiBaseUrl) {
        try {
          const response = await axios.post(`${apiBaseUrl}/contact`, formData, {
            headers: {
              'Content-Type': 'application/json',
            },
            timeout: 10000,
          });

          if (response.data.success) {
            console.log("✅ Backend sent successfully!");
            emailSent = true;
          }
        } catch (backendError) {
          console.error("❌ Backend also failed:", backendError);
          if (axios.isAxiosError(backendError)) {
            if (backendError.code === 'ECONNABORTED' || backendError.message.includes('Network Error')) {
              throw new Error('Backend server is not running. Please start your backend server.');
            }
          }
          throw backendError;
        }
      }

      // ✅ FIXED ACKNOWLEDGMENT EMAIL - Standard EmailJS parameters
      if (emailSent &&
          import.meta.env.VITE_EMAILJS_SERVICE_ID &&
          import.meta.env.VITE_EMAILJS_ACK_TEMPLATE_ID &&
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY &&
          email && name && subject && message) {
        try {
          const ackServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
          const ackTemplateId = import.meta.env.VITE_EMAILJS_ACK_TEMPLATE_ID;
          const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

          console.log("🔄 Sending acknowledgment with:", {
            serviceId: ackServiceId,
            templateId: ackTemplateId,
            toEmail: email
          });

          // ✅ FIXED: Standard EmailJS template parameters (NOT custom ones)
          const ackFormData = {
            from_name: name,           // ✅ Standard: sender's name
            to_email: email,           // ✅ Standard: recipient email
            subject: `Re: ${subject}`, // ✅ Standard: email subject
            message: message,          // ✅ Standard: email message
            reply_to: email            // ✅ Standard: reply-to field
          };

          const result = await emailjs.send(
            ackServiceId,
            ackTemplateId,
            ackFormData,
            publicKey
          );
          console.log("✅ ✅ Acknowledgment email sent successfully!", result);
        } catch (ackError: any) {
          console.error("❌ Acknowledgment email FAILED:", ackError);
          console.error("Error details:", ackError.status, ackError.text);
        }
      }

      // ✅ SUCCESS
      if (emailSent) {
        if (language === "DE") {
          toast.success(toastMessages.successEmailSent.de);
        } else {
          toast.success(toastMessages.successEmailSent.en);
        }

        if (formRef.current) {
          formRef.current.reset();
        }
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setLastUpdatedField(null);
      } else {
        throw new Error('No email service configured. Please set up EmailJS or Backend.');
      }

    } catch (error) {
      console.error("❌ Form submission error:", error);

      if (axios.isAxiosError(error)) {
        if (error.message.includes('Backend server is not running')) {
          toast.error("🦄 Backend server is not running. Please start the backend first or configure EmailJS.");
        } else {
          toast.error(language === "DE" ? toastMessages.failedEmailSent.de : toastMessages.failedEmailSent.en);
        }
      } else if (error instanceof Error) {
        if (error.message.includes('No email service configured')) {
          toast.error("🦄 Please configure EmailJS or start the backend server. Check .env file.");
        } else {
          toast.error(language === "DE" ? toastMessages.failedEmailSent.de : toastMessages.failedEmailSent.en);
        }
      } else {
        toast.error(language === "DE" ? toastMessages.failedEmailSent.de : toastMessages.failedEmailSent.en);
      }

      setError("An Error occurred, try again later");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputFocus = (fieldName: string) => {
    setCursor(`${fieldName}${cursor}`);
  };

  const wordWrap = (
    text: string,
    maxLineLength: number,
    indentation: string
  ) => {
    const words = text.split(" ");
    let lines: string[] = [];
    let currentLine = "";

    words.forEach((word) => {
      if (currentLine.length + word.length <= maxLineLength) {
        currentLine += word + " ";
      } else {
        lines.push(currentLine.trim());
        currentLine = `${indentation}${word} `;
      }
    });

    if (currentLine) {
      lines.push(currentLine.trim());
    }

    return lines.join("\n");
  };

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "subject") {
      setSubject(value);
    } else if (name === "message") {
      setMessage(value);
    }

    setLastUpdatedField(name);
  };

  const [cursorBlink, setCursorBlink] = useState<boolean>(true);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setCursorBlink((prev) => !prev);
    }, 400);

    return () => {
      clearInterval(blinkInterval);
    };
  }, []);

  const codeSnippet = `
import { useState } from "react";

// 🌈 Spreading Stardust:
// Crafting Cosmic Email 🌌

const [sender, setSender] = "${name}${
    lastUpdatedField === "name" ? (cursorBlink ? "|" : " ") : ""
  }🚀";
const [recipient, setRecipient] = "${email}${
    lastUpdatedField === "email" ? (cursorBlink ? "|" : " ") : ""
  }📧";
const [subject, setSubject] = \n"${subject}${
    lastUpdatedField === "subject" ? (cursorBlink ? "|" : " ") : ""
  }✨";
const [message, setMessage] =
\`Hello, intrepid traveler! 👋\n
Across the cosmos, a message for you:\n
"${wordWrap(message, 40, " ")}${
    lastUpdatedField === "message" ? (cursorBlink ? "|" : " ") : ""
  }"\n
Wishing you stardust dreams,\n
${name}${lastUpdatedField === "name" ? (cursorBlink ? "|" : " ") : ""}
\``;

  return (
    <React.Fragment>
      <section className="contact-container w-full min-[1921px]:px-[55rem] mt-16" id="contact">
        <div className="title-container flex flex-col gap-6 justify-center items-center py-16 max-lg:p-16" ref={ref}>
          <motion.div
            ref={animationReference}
            style={{
              scale: scaleProgess,
              opacity: opacityProgess,
              textAlign: "center",
            }}
          >
            <p className="text-[--black] mb-6">
              <span className="text-[--orange]">&lt;</span>
              {language === "DE" ? contactData.title.de : contactData.title.en}
              <span className="text-[--orange]">/&gt;</span>
            </p>
            <h2 className="text-[--black] text-center">
              {language === "DE" ? contactData.description.de : contactData.description.en}
            </h2>
          </motion.div>
        </div>
        <div className="flex flex-row justify-center items-start px-32 pt-32 mb-32 max-lg:flex-col max-lg:p-10">
          <div className="w-1/2 bg-[--darkblue] text-[--white] flex flex-col justify-center items-start gap-24 rounded-2xl p-20 border-solid border-[0.4rem] border-[--lightblue] hover:border-orange duration-500 transition-all quote-outer-container text-left max-lg:hidden cursor-progress">
            <Highlight code={codeSnippet} language="tsx" theme={themes.nightOwl}>
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={`${className} text-4xl `} style={style}>
                  {tokens.map((line, i) => (
                    <div key={i} {...getLineProps({ line, key: i })}>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          </div>
          <form
            ref={formRef}
            className="flex flex-col gap-6 justify-center items-center px-32 w-1/2 max-lg:w-full max-lg:p-10"
            onSubmit={notifySentForm}
            autoComplete="off"
          >
            {contactData.inputfields.map((input, index) => (
              <input
                key={index}
                type={input.type}
                placeholder={
                  language === "DE"
                    ? `${input.placeholder.de}`
                    : `${input.placeholder.en}`
                }
                name={input.name}
                value={
                  input.name === "name"
                    ? name
                    : input.name === "email"
                    ? email
                    : input.name === "subject"
                    ? subject
                    : message
                }
                required
                disabled={isSubmitting}
                onFocus={() => {
                  handleInputFocus(input.name);
                  setLastUpdatedField(input.name);
                }}
                onMouseEnter={() => {
                  handleInputFocus(input.name);
                  setLastUpdatedField(input.name);
                }}
                onChange={handleInputChange}
                className={`${
                  theme === "dark"
                    ? "bg-[--blackblue] dark-mode-shadow "
                    : "bg-[--icewhite] dark-shadow "
                } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              />
            ))}
            <textarea
              rows={contactData.textarea.rows}
              placeholder={
                language === "DE"
                  ? `${contactData.textarea.placeholder.de}`
                  : `${contactData.textarea.placeholder.en}`
              }
              name={contactData.textarea.name}
              value={message}
              required
              disabled={isSubmitting}
              onFocus={() => {
                handleInputFocus(contactData.textarea.name);
                setLastUpdatedField(contactData.textarea.name);
              }}
              onMouseEnter={() => {
                handleInputFocus(contactData.textarea.name);
                setLastUpdatedField(contactData.textarea.name);
              }}
              onChange={handleInputChange}
              className={`${
                theme === "dark"
                  ? "bg-[--blackblue] dark-mode-shadow"
                  : "bg-[--icewhite] dark-shadow"
              } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            />
            <div className="privacy-checkbox flex gap-16">
              <label className="block w-2 h-2 cursor-pointer" htmlFor="checkbox-label">
                <input
                  type="checkbox"
                  required
                  disabled={isSubmitting}
                  name="checkbox-label"
                  id="checkbox-label"
                />
                <span className="checkbox"></span>
              </label>
              <p>
                {language === "DE"
                  ? `${contactData.privacyOptIn.checkbox.de}`
                  : `${contactData.privacyOptIn.checkbox.en}`}
              </p>
            </div>
            <p>
              {language === "DE"
                ? `${contactData.privacyOptIn.description.de}`
                : `${contactData.privacyOptIn.description.en}`}
            </p>
            <Button
              value={
                isSubmitting
                  ? (language === "DE" ? "Wird gesendet..." : "Sending...")
                  : (language === "DE"
                      ? `${contactData.button.value.de}`
                      : `${contactData.button.value.en}`)
              }
              iconSVG={contactData.icon}
              buttoncolor={contactData.colors.main}
              iconcolor={contactData.colors.icon}
              type="submit"
              elementType="input"
              disabled={isSubmitting}
            />
            <ToastContainer
              className="w-max text-3xl block p-3 max-lg:w-full "
              position="bottom-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme={theme}
            />
          </form>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
