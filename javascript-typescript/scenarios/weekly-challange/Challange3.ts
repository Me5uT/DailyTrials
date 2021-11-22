interface IStudent {
  name: string;
  lessons: ILesson[];
}

interface ILesson {
  name: string;
  mark: number;
}

const classA: IStudent[] = [
  {
    name: "Ahmet",
    lessons: [
      {
        name: "Türkçe",
        mark: 90,
      },
      {
        name: "Matematik",
        mark: 80,
      },
      {
        name: "Fen Bilgisi",
        mark: 70,
      },
    ],
  },
  {
    name: "Mehmet",
    lessons: [
      {
        name: "Türkçe",
        mark: 20,
      },
      {
        name: "Matematik",
        mark: 50,
      },
      {
        name: "Fen Bilgisi",
        mark: 30,
      },
    ],
  },
];

const calculateMarks = (student: IStudent[]) => {
  const calculatedMarks = student.map((student: IStudent) => {
    const not = student.lessons.map((lesson) => {
      if (lesson.mark < 50) {
        return `${lesson.name}'den Kaldınız'`;
      } else return `${lesson.name}'den Geçtiniz'`;
    });

    return `${student.name} ` + not;
  });

  return calculatedMarks;
};

calculateMarks(classA);
