import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";
import axios from "axios";
import { Highlight, themes } from "prism-react-renderer";
import { contactData } from "../assets/lib/data.tsx";  // ✅ Fixed: Removed unused toastMessages
import { useSectionInView } from "../assets/lib/hooks";
import { useLanguage } from "../context/language-context";
import { ToastContainer, toast } from "react-toastify";
import { useTheme } from "../context/theme-context";
import { motion, useScroll, useTransform } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

const Contact: React.FC = () => {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "https://portfolio-backend-1-hvs1.onrender.com/api";
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [cursor, setCursor] = useState<string>("");
  const [lastUpdatedField, setLastUpdatedField] = useState<string | null>(null);
  const { ref } = useSectionInView("Contact");
  const { language } = useLanguage();
  const { theme } = useTheme();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);

  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  // ✅ COMPLETE ERROR HANDLING: Backend ONLY - 2 Emails (You + User Ack)
  const notifySentForm: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = {
      name,
      email,
      subject,
      message,
    };

    try {
      console.log('🚀 Sending to backend:', `${apiBaseUrl}/contact`);

      const response = await axios.post(`${apiBaseUrl}/contact`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 60000,  // 60s for Gmail cold start + Render
      });

      if (response.data.success) {
        console.log('✅ Backend response:', response.data.message);

        // Reset form completely
        if (formRef.current) formRef.current.reset();
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setLastUpdatedField(null);

        // ✅ 2 EMAILS SUCCESS TOAST
        toast.success(
          language === "DE"
            ? "✨ 2 E-Mails gesendet! Danke!"
            : "✨ 2 Emails sent successfully! Thank you!"
        );
      } else {
        throw new Error(response.data.error || 'Backend returned failure');
      }

    } catch (error: any) {
      console.error("❌ Form submission error:", error);

      if (axios.isAxiosError(error)) {
        if (error.code === 'ECONNABORTED') {
          toast.error(
            language === "DE"
              ? "⏳ Backend startet auf (Render Free). 30s warten."
              : "⏳ Backend waking up (Render Free). Wait 30s."
          );
        } else if (error.response?.status === 0) {
          toast.error(
            language === "DE"
              ? "❌ Backend nicht erreichbar. Status prüfen."
              : "❌ Backend unreachable. Check status indicator."
          );
        } else if (error.response?.data?.success === false) {
          // SHOW ACTUAL BACKEND ERROR
          toast.error(
            language === "DE"
              ? error.response.data.error || "Backend Fehler"
              : error.response.data.error || "Backend error"
          );
        } else if (error.response?.status === 500) {
          toast.error(
            language === "DE"
              ? "❌ Server Fehler. Render Logs prüfen."
              : "❌ Server error. Check Render logs."
          );
        } else if (error.response?.status === 400) {
          toast.error(
            language === "DE"
              ? "❌ Formular unvollständig"
              : "❌ Incomplete form data"
          );
        } else {
          toast.error(
            language === "DE"
              ? `❌ HTTP ${error.response?.status || 'Unknown'}: ${error.message}`
              : `❌ HTTP ${error.response?.status || 'Unknown'}: ${error.message}`
          );
        }
      } else {
        toast.error(
          language === "DE"
            ? "❌ Unerwarteter Fehler. Seite neu laden."
            : "❌ Unexpected error. Reload page."
        );
      }
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
                disabled={isSubmitting}
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
              disabled={isSubmitting}
            />
            <div className="privacy-checkbox flex gap-16">
              <label className="block w-2 h-2 cursor-pointer" htmlFor="checkbox-label">
                <input
                  type="checkbox"
                  required
                  name="checkbox-label"
                  id="checkbox-label"
                  disabled={isSubmitting}
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
              // ✅ FIXED: Removed disabled prop (Button component doesn't support it)
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
