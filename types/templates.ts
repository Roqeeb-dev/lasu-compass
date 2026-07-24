import { LetterConfig } from "./types";

const fallback = (value: string, placeholder: string) => value || placeholder;

export const letterConfigs: Record<string, LetterConfig> = {
  correctionOfResult: {
    label: "Correction of Result",
    subject: (data) =>
      `APPLICATION FOR CORRECTION OF MY RESULT - ${fallback(
        data.courseCode,
        "[Course Code]",
      )}`,
    recipient: { title: "The Head of Department" },
    through: [{ title: "The Level Coordinator" }],
    body: (
      data,
    ) => `I humbly write to bring to your attention an issue concerning my result for ${fallback(
      data.courseCode,
      "[Course Code]",
    )}: ${fallback(data.courseTitle, "[Course Title]")} for ${fallback(
      data.semester,
      "[Semester/Session]",
    )}.

Sir/Ma, I was given zero for the course, I participated in all practicals, assignments, and exhibitions, and I also attended classes regularly throughout the semester. I also sat for the examination.

Therefore, I kindly request that you look into the matter and order a review of my scores for this course.`,
  },

  overRegistration: {
    label: "Correction of Over-Registration",
    subject: () =>
      "APPLICATION FOR APPROVAL OF EXCESS CREDIT LOAD / OVER-REGISTRATION",
    recipient: { title: "Director ICT" },
    through: [{ title: "The Dean" }, { title: "The Head of Department" }],
    body: (
      data,
    ) => `I am writing to formally apply for special permission to register for additional course units above the maximum prescribed credit limit for ${fallback(
      data.semester,
      "[Semester/Session]",
    )}.

I request approval to register for the excess credit unit(s) so that I can balance my registration and continue my programme without disruption.

I will be glad if you can help me handle the issue as soon as possible so that it will not affect my studentship.`,
  },

  waiver: {
    label: "Waiver Request",
    subject: (data) =>
      `COMPASSIONATE APPEAL TO WAIVE MY ${fallback(data.courseCode, "[Course Code]")}`,
    recipient: { title: "The Head of Department" },
    through: [{ title: "The Level Coordinator" }],
    body: (
      data,
    ) => `I, ${fallback(data.name, "[Your Name]")} with Matriculation Number: ${fallback(
      data.matricNo,
      "[Matric No.]",
    )}, a ${fallback(data.level, "[Level]")} level student, write to formally request a waiver for the outstanding course, ${fallback(
      data.courseCode,
      "[Course Code]",
    )}.

I kindly request that this course be waived so that it does not affect my graduation. I am willing to comply with any conditions attached to this request.`,
  },

  transcript: {
    label: "Transcript Request",
    subject: () => "REQUEST FOR TRANSCRIPT",
    recipient: { title: "The Registrar" },
    body: (
      data,
    ) => `I, ${fallback(data.name, "[Your Name]")} with Matriculation Number: ${fallback(
      data.matricNo,
      "[Matric No.]",
    )}, kindly request the processing of my academic transcript for the purpose of: ${fallback(
      data.purpose,
      "[Purpose]",
    )}.

I would be grateful for your prompt attention to this request.`,
  },

  courseAddition: {
    label: "Course Addition Request",
    subject: (data) =>
      `REQUEST FOR ADDITION OF ${fallback(data.courseCode, "[Course Code]")}`,
    recipient: { title: "The Head of Department" },
    through: [{ title: "The Level Coordinator" }],
    body: (data) => `I write to request permission to add ${fallback(
      data.courseCode,
      "[Course Code]",
    )}: ${fallback(data.courseTitle, "[Course Title]")} to my course registration for ${fallback(
      data.semester,
      "[Semester/Session]",
    )}.

Reason: ${fallback(data.purpose, "[Purpose]")}

I kindly request your approval for this addition.`,
  },

  permission: {
    label: "Permission Letter",
    subject: () => "REQUEST FOR PERMISSION",
    recipient: { title: "The Head of Department" },
    body: (
      data,
    ) => `I write to formally request permission regarding: ${fallback(
      data.purpose,
      "[Purpose]",
    )}.

I would be grateful for your kind consideration of this request.`,
  },
};

export function buildRecipientLines(config: LetterConfig): string[] {
  return [
    `To: ${config.recipient.title}`,
    ...(config.through?.map((t) => `Through: ${t.title}`) ?? []),
  ];
}
