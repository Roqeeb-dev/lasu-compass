export type LetterData = {
  name: string;
  matricNo: string;
  department: string;
  faculty: string;
  purpose: string;
  courseCode: string;
  courseTitle: string;
  semester: string;
  level: string;
  date: string;
};

export type Recipient = {
  title: string;
};

export type LetterConfig = {
  label: string;
  subject: (data: LetterData) => string;
  recipient: Recipient;
  through?: Recipient[];
  body: (data: LetterData) => string;
};
