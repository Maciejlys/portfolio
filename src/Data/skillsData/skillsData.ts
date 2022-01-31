export interface SkillProps {
  order: number;
  title: string;
  dates: string;
  description: string[];
}

export const skills: SkillProps[] = [
  {
    order: 2,
    title: "test2",
    dates: "dates2",
    description: ["description2", "description2"],
  },
  {
    order: 1,
    title: "test1",
    dates: "dates1",
    description: ["description1", "description1"],
  },
];
