export const clinicConfig = {
  name: "[CLINIC NAME]",
  doctorName: "[DOCTOR NAME]",
  qualifications: "[DOCTOR QUALIFICATIONS]",
  specialization: "[MEDICAL SPECIALIZATION]",
  address: "[CLINIC ADDRESS]",
  phone: "[CLINIC PHONE]",
  hours: "[CLINIC HOURS]",
  mapUrl: "[MAPS URL]",
  googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeC1Nu_0rV4DeHPohXXmlv7XyjsfciYXzbDNlQQrpRHb0D0KQ/viewform",
  timeSlots: ["[TIME SLOT 1]", "[TIME SLOT 2]", "[TIME SLOT 3]"],
  services: [
    { name: "[CLINIC SERVICE 01]", description: "[SERVICE DESCRIPTION]" },
    { name: "[CLINIC SERVICE 02]", description: "[SERVICE DESCRIPTION]" },
    { name: "[CLINIC SERVICE 03]", description: "[SERVICE DESCRIPTION]" },
  ],
} as const;

export const isPlaceholder = (value: string) => /^\[[^\]]+\]$/.test(value);

export const appointmentUrl = () =>
  isPlaceholder(clinicConfig.googleFormUrl)
    ? "https://docs.google.com/forms/"
    : clinicConfig.googleFormUrl;
