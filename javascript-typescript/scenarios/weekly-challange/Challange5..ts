interface ILesson {
  id: number;
  name: string;
  mark: number;
}

interface IStudent {
  id: number;
  name: string;
  lessons: ILesson[];
}

const ahmet: IStudent = {
  id: 1,
  name: "Ahmet Yılmaz",
  lessons: [
    {
      id: 1,
      name: "Matematik",
      mark: 10,
    },
    {
      id: 2,
      name: "Türkçe",
      mark: 10,
    },
    {
      id: 3,
      name: "Hayat Bilgisi",
      mark: 10,
    },
  ],
};

const getAverageMark = (student: IStudent): number => {
  let totalMark = 0;
  const { lessons } = student;

  lessons.map((lesson) => {
    totalMark = lesson.mark + totalMark;
  });

  let averageMark = totalMark / lessons.length;
  return averageMark;
};

const averageMark = getAverageMark(ahmet);

const passingStatusWithIfElse = (mark: number): string => {
  if (mark <= 49) {
    return "Kaldınız";
  } else {
    return "Geçtiniz";
  }
};

const ahmetsNoteStatus = passingStatusWithIfElse(averageMark);

const harfNotu = (mark: number): string => {
  if (mark > 65) return "AA";
  else if (mark <= 65 && mark > 50) return "BB";
  else if (mark <= 50 && mark > 30) return "CC";
  else return "FF";
};

const ahmetinHarfNotu = harfNotu(averageMark);

console.log(
  `Ahmet'in ortalama notu: ${averageMark} ve harf notu: ${ahmetinHarfNotu}`
);
