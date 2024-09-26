import { CalendarIcon } from "@shikshak/assets/icons/Calendar";
import { NotesIcon } from "@shikshak/assets/icons/Notes";
import Image1 from "@shikshak/assets/images/learnease1.png";
import Image2 from "@shikshak/assets/images/learnease2.png";
import { NAVIGATION_ROUTES } from "@shikshak/pages/App/navigationRoutes";

export const allInOneData = [
  {
    id: 1,
    heading: "Flexible Learning",
    description:
      "Study on your terms with self-paced courses, allowing you to learn when it suits you best.",
    icon: NotesIcon
  },
  {
    id: 2,
    heading: "Expert Instructors",
    description:
      "Learn from professionals and experts in their respective fields, ensuring high-quality education.",
    icon: CalendarIcon
  },
  {
    id: 3,
    heading: "Interactive Community",
    description:
      "Engage with a diverse community of learners, fostering discussions, collaboration, and peer learning."
  }
];

export const ShikshakData = [
  {
    id: 1,
    heading: "For Instructors",
    button: "Start a class today",
    image: Image1,
    link: "http://localhost:7000/"
  },
  {
    id: 2,
    heading: "For Students",
    button: "Browse through courses",
    image: Image2,
    link: NAVIGATION_ROUTES.ALL_COURSES
  }
];
