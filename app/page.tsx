
import { Education, Hero,Internship, Project, Skills, Hobbies } from "../components";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Internship />
      <Project />
      <Skills />
      <Education />
      <Hobbies />
    </main>
  );
}
