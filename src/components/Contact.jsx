import { useState } from "react";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import PlaceRoundedIcon from "@mui/icons-material/PlaceRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import ScheduleRoundedIcon from "@mui/icons-material/ScheduleRounded";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/profile";

const socialIcons = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
};

const emptyForm = { name: "", email: "", subject: "", message: "" };

// Set VITE_CONTACT_ENDPOINT in .env to a Formspree (or similar) URL and the
// form posts to it. With no endpoint configured it falls back to opening a
// pre-filled email, which works everywhere with zero setup.
const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;

function validate(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Please tell me your name";
  }

  if (!values.email.trim()) {
    errors.email = "An email address lets me reply";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "That email address looks incomplete";
  }

  if (!values.message.trim()) {
    errors.message = "A short message is enough to start";
  } else if (values.message.trim().length < 12) {
    errors.message = "Could you add a little more detail?";
  }

  return errors;
}

function Contact() {
  const theme = useTheme();

  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState(null);

  const details = [
    {
      icon: MailOutlineRoundedIcon,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    { icon: PlaceRoundedIcon, label: "Location", value: profile.location },
    { icon: ScheduleRoundedIcon, label: "Availability", value: profile.availability },
  ];

  const handleChange = (field) => (event) => {
    setValues((current) => ({ ...current, [field]: event.target.value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const sendByMail = () => {
    const subject = values.subject.trim() || `Portfolio enquiry from ${values.name}`;
    const body = `${values.message}\n\n— ${values.name}\n${values.email}`;

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setToast({
      severity: "info",
      text: "Your email app should be opening with the message ready to send.",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const found = validate(values);
    setErrors(found);

    if (Object.keys(found).length > 0) {
      return;
    }

    if (!endpoint) {
      sendByMail();
      return;
    }

    setSending(true);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error(`Request failed with ${response.status}`);
      }

      setValues(emptyForm);
      setToast({
        severity: "success",
        text: "Message sent — I'll get back to you shortly.",
      });
    } catch {
      setToast({
        severity: "error",
        text: "That didn't send. Opening your email app instead.",
      });
      sendByMail();
    } finally {
      setSending(false);
    }
  };

  return (
    <Box component="section" id="contact" sx={{ py: { xs: 9, md: 14 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          overline="Get in touch"
          title="Let's build something"
          subtitle="Have a role, a project, or a system that needs untangling? Send the details and I'll reply personally."
        />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "0.85fr 1.15fr" },
            gap: { xs: 4, md: 6 },
            alignItems: "start",
          }}
        >
          <Reveal direction="left">
            <Stack spacing={2.5}>
              {details.map((detail) => {
                const Icon = detail.icon;

                const content = (
                  <Card
                    sx={{
                      transition: theme.transitions.create(["border-color"]),
                      "&:hover": {
                        borderColor: alpha(theme.palette.primary.main, 0.5),
                      },
                    }}
                  >
                    <CardContent
                      sx={{
                        p: 2.75,
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        "&:last-child": { pb: 2.75 },
                      }}
                    >
                      <Box
                        sx={{
                          display: "grid",
                          placeItems: "center",
                          width: 46,
                          height: 46,
                          flexShrink: 0,
                          borderRadius: 2.5,
                          color: "primary.main",
                          bgcolor: alpha(theme.palette.primary.main, 0.12),
                        }}
                      >
                        <Icon fontSize="small" />
                      </Box>

                      <Box sx={{ minWidth: 0 }}>
                        <Typography
                          variant="overline"
                          sx={{ color: "text.secondary", display: "block" }}
                        >
                          {detail.label}
                        </Typography>

                        <Typography
                          sx={{
                            fontWeight: 600,
                            overflowWrap: "anywhere",
                            color: "text.primary",
                          }}
                        >
                          {detail.value}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                );

                return detail.href ? (
                  <Box
                    key={detail.label}
                    component="a"
                    href={detail.href}
                    sx={{ textDecoration: "none", display: "block" }}
                  >
                    {content}
                  </Box>
                ) : (
                  <Box key={detail.label}>{content}</Box>
                );
              })}

              <Stack direction="row" spacing={1.5} sx={{ pt: 0.5 }}>
                {profile.socials.map((social) => {
                  const Icon = socialIcons[social.icon];

                  return (
                    <IconButton
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      sx={{
                        border: "1px solid",
                        borderColor: "divider",
                        color: "text.secondary",
                        "&:hover": {
                          color: "primary.main",
                          borderColor: "primary.main",
                        },
                      }}
                    >
                      {Icon ? <Icon fontSize="small" /> : null}
                    </IconButton>
                  );
                })}
              </Stack>
            </Stack>
          </Reveal>

          <Reveal direction="right" delay={100}>
            <Card>
              <CardContent
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ p: { xs: 3, sm: 4 } }}
              >
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
                    gap: 2.5,
                    mb: 2.5,
                  }}
                >
                  <TextField
                    label="Your name"
                    value={values.name}
                    onChange={handleChange("name")}
                    error={Boolean(errors.name)}
                    helperText={errors.name}
                    fullWidth
                    required
                  />

                  <TextField
                    label="Email address"
                    type="email"
                    value={values.email}
                    onChange={handleChange("email")}
                    error={Boolean(errors.email)}
                    helperText={errors.email}
                    fullWidth
                    required
                  />
                </Box>

                <TextField
                  label="Subject"
                  value={values.subject}
                  onChange={handleChange("subject")}
                  fullWidth
                  sx={{ mb: 2.5 }}
                />

                <TextField
                  label="Message"
                  value={values.message}
                  onChange={handleChange("message")}
                  error={Boolean(errors.message)}
                  helperText={errors.message}
                  fullWidth
                  required
                  multiline
                  minRows={5}
                  sx={{ mb: 3 }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={sending}
                  endIcon={
                    sending ? (
                      <CircularProgress size={18} color="inherit" />
                    ) : (
                      <SendRoundedIcon />
                    )
                  }
                  sx={{ width: { xs: "100%", sm: "auto" } }}
                >
                  {sending ? "Sending…" : "Send message"}
                </Button>
              </CardContent>
            </Card>
          </Reveal>
        </Box>
      </Container>

      <Snackbar
        open={Boolean(toast)}
        autoHideDuration={6000}
        onClose={() => setToast(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        {toast ? (
          <Alert
            severity={toast.severity}
            variant="filled"
            onClose={() => setToast(null)}
            sx={{ width: "100%" }}
          >
            {toast.text}
          </Alert>
        ) : undefined}
      </Snackbar>
    </Box>
  );
}

export default Contact;
