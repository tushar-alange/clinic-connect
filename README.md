# Clinic Connect

Build a complete, modern, responsive clinic website using React, TypeScript, Vite, and Tailwind CSS. Use placeholder details for all clinic information.

GOAL
Create a fast, professional healthcare website with appointment requests handled exclusively through Google Forms and Google Sheets. Do not use WhatsApp anywhere in the project.

1. CLINIC WEBSITE
Create a polished, trustworthy medical clinic website with a white background, soft green accents, readable typography, subtle animations, and mobile-first responsive design.

Use configurable placeholders:
- Clinic name: [CLINIC NAME]
- Doctor name: [DOCTOR NAME]
- Qualifications: [DOCTOR QUALIFICATIONS]
- Specialization: [MEDICAL SPECIALIZATION]
- Clinic address: [CLINIC ADDRESS]
- Phone: [CLINIC PHONE]
- Opening hours: [CLINIC HOURS]
- Services: [CLINIC SERVICES]
- Google Maps URL: [MAPS URL]
- Google Form URL: [GOOGLE_FORM_URL]

Include:
- Responsive navigation bar and clinic logo placeholder
- Hero section with a prominent "Book Appointment" button
- About the clinic and doctor profile
- Services section
- Opening hours
- Appointment booking section
- Contact details and map link
- Footer with contact details and privacy notice

Do not invent real doctors, qualifications, reviews, awards, or medical claims. Clearly identify all placeholder information.

2. APPOINTMENT BOOKING
Google Forms is the ONLY appointment-request method.

Include a prominent "Book Appointment" button in the navigation bar, hero section, and appointment section. Each button must open [GOOGLE_FORM_URL] in a new tab.

Near the button, explain that patients can submit an appointment request using the form. State clearly that submitting the form does not confirm an appointment; clinic staff will check availability and confirm it.

Do not add WhatsApp buttons, WhatsApp links, phone QR codes, chatbots, messaging widgets, or any WhatsApp-related functionality.

3. GOOGLE FORM
Prepare a form named "Clinic Appointment Request" with these fields:
- Patient full name — required short answer
- Phone number — required short answer with validation guidance
- Preferred appointment date — required date field; prevent past dates if possible
- Preferred time slot — required dropdown with configurable clinic time slots
- New or existing patient — required multiple choice
- Brief reason for visit or symptom summary — optional short answer
- Consent checkbox acknowledging that information will be used to handle the appointment request

Time slots are preferences, not guaranteed availability. Clinic staff must confirm the booking.

Do not pretend to create a Google Form inside my Google account. If direct form creation is unavailable, provide exact setup instructions and use [GOOGLE_FORM_URL] as a placeholder.

4. GOOGLE SHEETS
Use Google Forms' built-in response destination to save submissions to Google Sheets.

Explain how to create the form, open Responses, link it to a new spreadsheet, and add staff-managed columns:
- Booking Status: Pending, Confirmed, Rejected, Cancelled
- Staff Notes: minimal operational notes only

Recommend restricting spreadsheet access to authorized clinic staff. Do not claim the website can write directly to Google Sheets without an authorized integration or backend.

5. TECHNICAL REQUIREMENTS
- React + TypeScript + Vite
- Tailwind CSS
- Responsive, accessible, SEO-friendly, lightweight frontend
- Free dependencies only
- No custom backend, Supabase, paid database, authentication system, or paid API
- No WhatsApp functionality of any kind
- No API keys or secrets in frontend code
- Store clinic details and the Google Form URL in a single configuration file
- All buttons and navigation must work
- Static frontend deployment with a README explaining configuration and deployment

6. DELIVERABLES
Build the actual website, not just a mockup.

After implementation, provide:
- Files created
- Instructions to replace clinic placeholders
- Exact Google Form setup instructions
- Instructions to link responses to Google Sheets
- Instructions to configure the Google Form URL
- Instructions to deploy and test the website on mobile

Start by building the website with placeholder details. Do not ask for actual clinic information yet.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/8c624e58-d6aa-4766-8137-2004c371ae7c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
