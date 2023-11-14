const resumeData={
    name: "M Divya",
    title: "Full Stack Developer",
    contact: {
      email: "divya20m07@gmail.com",
      phone: "12345678910",
      address: "Chennai TamilNadu",
    },
    summary: "A Passionate Aspiring Full Stack Developer",
    education: [
      {
        degree: "Bachelor of Science in Physics",
        school: "St Xaviers",
        graduationYear: 2022,
      },
      {
        degree: "High School",
        school: "Kendriya Vidyalaya",
        graduationYear: 2018,
      },
    ],
    skills: [
      "JavaScript",
      "React",
      "Node.js",
      "HTML",
      "CSS",
      "Problem Solving",
    ],
    languages: [
      { language: "English", fluency: "Fluent" },
      { language: "Hindi", fluency: "Fluent" },
      { language: "Tamil", fluency: "Fluent" },
    ],
    projects: [
      {
        name: "Web application for dresses",
        description: "A brief description of the project.",
        technologies: ["React", "Node.js", "MongoDB"],
        link: "https://github.divya20m",
      },
    ],
  };
  
  


//for of
for (const language of resumeData.languages) {
    console.log(`for of loop:-Language: ${language.language}, Fluency: ${language.fluency}`);
  }


//for in
  for (const key in resumeData.contact) {
    console.log(`for in loop:-${key}: ${resumeData.contact[key]}`);
  }

  //for each
  resumeData.education.forEach((educationItem) => {
    console.log(`for each loop:-Degree: ${educationItem.degree}, School: ${educationItem.school}, Year: ${educationItem.graduationYear}`);
  });

  //for
  for (let i = 0; i < resumeData.education.length; i++) {
    const educationItem = resumeData.education[i];
    console.log(`for loop:-Degree: ${educationItem.degree}, School: ${educationItem.school}, Year: ${educationItem.graduationYear}`);
  }