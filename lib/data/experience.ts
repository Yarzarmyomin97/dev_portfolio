import { Experience } from "../types";

export const experiences: Experience[] = [
  {
    id: "1",
    company: "One Atkhayar Co., Ltd",
    companyUrl: "https://atkhayar.com",
    title: "Senior Full Stack Developer",
    startDate: "2022-02",
    endDate: null,
    accomplishments: [
      "Develop and maintain multiple both Flutter and Ionic applications for Android and iOS platforms",
      "Collaborate with designers and product managers to create intuitive and visually appealing user interfaces",
      "Implement state management solutions using Provider and Bloc to efficiently manage app state and data flow",
      "Integrate RESTful APIs, third-party APIs and services, such as Firebase, Google Maps, OneSignal, BranchIO and Typesense to enhance app functionality and user experience.",
      "Conduct code reviews and provide constructive feedback to team members to ensure code quality and consistency.",
      "Actively participate in Agile development processes, including sprint planning, daily stand-ups, and retrospectives."
    ],
    skills: ["Flutter", "Dart", "Ionic Framework", "HTML", "CSS", "JavaScript", "TypeScript", "NodeJS", "Firebase", "PostgreSQL", "Docker"],
  },
  {
    id: "2",
    company: "Global Wave Technology",
    companyUrl: "https://globalwave.com.mm",
    title: "Mobile App Developer",
    startDate: "2018-10",
    endDate: "2022-01",
    accomplishments: [
      "Developed and maintained both Android and iOS Apps using Xamarin",
      "Collaborated with project managers, backend developers, designers and testers to define, design and execute new features",
      "Worked with different APIs and Data sources",
    ],
    skills: ["Xamarin", "C#", "Android", "iOS", "REST APIs", ".NET"],
  },
  {
    id: "3",
    company: "Global Wave Technology",
    companyUrl: "https://globalwave.com.mm",
    title: "Intern Software Developer",
    startDate: "2018-06",
    endDate: "2018-09",
    accomplishments: [
      "Developed Web projects using Angular 6, C#, .NET Framework",
    ],
    skills: ["HTML", "CSS", "JavaScript", "C#", "Angular"],
  },
];
