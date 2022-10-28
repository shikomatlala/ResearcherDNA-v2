export const apiUrl:string = 'http://44.204.59.197:3000/api/v1/';
export const activePageName = ['Home', 'Students', 'Project', 'Toolbox', 'Forum', 'Account'];
export var activeUser = {
    email: "admin@tut.ac.za",
    title: "Prof",
    password: "tut4life",
    firstname: "Admin",
    lastname: "Shilaluke",
    department: "Informatics",
    userId: 1,
    userType: 1,
    description: "Admin",
};
export const users = [{
    email: "supervisor@tut.ac.za",
    title: "Prof",
    password: "tut4life",
    firstname: "Supervisor",
    lastname: "Nyembe",
    department: "Informatics",
    userId: 2,
    userType: 2,
    description: "Supervisor",
},{
    email: "student@tut.ac.za",
    title: "Student",
    password: "tut4life",
    firstname: "Student",
    lastname: "Paledi",
    department: "Informatics",
    userId: 3,
    userType: 3,
    description: "Student",
},{
    email: "admin@tut.ac.za",
    title: "Prof",
    password: "tut4life",
    firstname: "Admin",
    lastname: "Shilaluke",
    department: "Informatics",
    userId: 1,
    userType: 1,
    description: "Admin"
}]

export const studentsList = [
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "216955961", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: true, supervisorId: "280233"}, startDate: "Tue 04 Oct 2022", studentComplains: 1},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "216923960", firstName: "Lerato",lastName: "Marokoane", supervisorId: {status: true, supervisorId: "280233"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "216955967", firstName: "James",lastName: "Livingston", supervisorId: {status: true, supervisorId: "280233"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "219525596", firstName: "Wisani",lastName: "Maluleka", supervisorId: {status: true, supervisorId: "280233"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "289545960", firstName: "Mashoto",lastName: "Tema", supervisorId: {status: true, supervisorId: "280233"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "216955701", firstName: "Noxolo",lastName: "Moletsane", supervisorId: {status: true, supervisorId: "298323"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "216955496", firstName: "Moletsane",lastName: "Keith", supervisorId: {status: true, supervisorId: "298323"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "216955960", firstName: "George",lastName: "Lusanda", supervisorId: {status: true, supervisorId: "280233"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "216955960", firstName: "Isabel",lastName: "Malatji", supervisorId: {status: true, supervisorId: "092122"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "216955960", firstName: "Tsholofelo",lastName: "Masemene", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "216955960", firstName: "Itumeleng",lastName: "Matlala", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "216955960", firstName: "Musa",lastName: "Tshoma", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "216955960", firstName: "Mercy",lastName: "Pitsi", supervisorId: {status: true, supervisorId: "092122"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "216955960", firstName: "Mohau",lastName: "Selamolela", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "216955960", firstName: "Kody",lastName: "Martin", supervisorId: {status: true, supervisorId: "280233"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "216955960", firstName: "Zack",lastName: "Rowe", supervisorId: {status: true, supervisorId: "280233"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "216955960", firstName: "Rowe",lastName: "Henly", supervisorId: {status: true, supervisorId: "280233"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "216955960", firstName: "Katleho",lastName: "Molwelang", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "216955960", firstName: "Makhoba",lastName: "Thato", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "216955960", firstName: "Jack",lastName: "Letswalo", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "216955960", firstName: "Mo",lastName: "Mawela", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "216955960", firstName: "Monique",lastName: "Matlala", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "216955960", firstName: "Molemo",lastName: "Mokaleng", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "216955960", firstName: "Doctor",lastName: "Malinga", supervisorId: {status: true, supervisorId: "280233"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "216955960", firstName: "Daniel",lastName: "Tshimo", supervisorId: {status: true, supervisorId: "280233"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "216955960", firstName: "Joshep",lastName: "Smith", supervisorId: {status: true, supervisorId: "280233"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "216955960", firstName: "Jill",lastName: "Scott", supervisorId: {status: true, supervisorId: "280233"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: true, supervisorId: "280233"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: true, supervisorId: "280233"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: true, supervisorId: "773222"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: true, supervisorId: "773222"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: true, supervisorId: "280233"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: true, supervisorId: "280233"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: true, supervisorId: "773222"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: true, supervisorId: "827232"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: true, supervisorId: "280233"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: true, supervisorId: "280233"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
  { studentCount: 1, projectName: "Lorem ipsum", studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},]

export const studentMails = [
    {studNumber: 215955270, messages: [{
    date: "27 Oct 2022",
    status: "new", from: "Prof Nyembe", time: "09:30AM",
    text: `Dear Brothers and Sisters,

 

    When we began our service as a new Area Presidency in August, one of our first tasks was to counsel with local leaders, the Lord, and one another to define a vision for the Africa South Area. We would like to share that vision with you today.
    
     
    
    We invite all to come unto Christ, make and keep sacred covenants, and become His lifelong disciples. To achieve this vision, we invite you to act on the following three objectives:
    
    I will make and keep temple covenants
    I will serve a mission. I will help others to serve.
    I will assist in God’s work by ministering and by doing missionary work.
     
    
    A small card has been printed with these objectives and is being shipped to stakes and districts for delivery to wards and branches. We ask you to prayerfully consider what you can do as individuals and as families to act on these objectives. We promise that as you do so, you will find peace and joy in your lives.
    
     
    
    We have also created a short video where the Area Presidency discusses the vision. Please watch this video at AfricaSouth.ChurchofJesusChrist.org/area-vision-2023.
    
     
    
    As you become lifelong disciples of Jesus Christ, His blessings will be yours, and “ye shall find rest unto your souls” (Matthew 11:28-29).
    
     
    
    Sincerely yours,`,
    subject: "Introducing the Africa South Area Vision: Lifelong Disciples of Christ"
}]},{studNumber: 215955270, messages: [{
    date: "27 Oct 2022",
    status: "new", from: "Prof Nyembe", time: "11:41AM",
    text: `The Beauty of Biodiversity
    Former BYU faculty and renowned ethnobotanist Paul Alan Cox recently enthralled campus with his forum “Exploring Nature’s Curiosity Cabinet.” Drawing inspiration from the old collecting trend of European nobles, he highlighted some of God’s greatest botanical creations—from prehistoric plants to lifesaving mangroves to carbon-negative sea grass—and encouraged us to reverence and preserve our planet’s beauty and biodiversity.`,
    subject: "Everyday Wonders of the World"
}]},{studNumber: 215955270, messages: [{
    date: "27 Oct 2022",
    status: "new", from: "Prof Nyembe", time: "09:30AM",
    text: `Hi Shiko,

    I saw your profile online and wanted to reach out! You might be a great fit for many of the remote software engineering roles that top U.S. companies are hiring for on Turing.
    
    Turing is based in Palo Alto, California, U.S.A., also known as “Silicon Valley”. We connect exceptional software engineers from around the world to top U.S. and Silicon Valley companies that are hiring for full-time remote software positions.
    
    Live anywhere, enjoy rapid career growth: Live anywhere in the world, enjoy career growth opportunities formerly only available to engineers living in the Silicon Valley - Work with former Tech Leads and Engineering Managers from Google, Facebook, Microsoft, Amazon, & various top tech companies and advance rapidly towards your professional goals.
    
    Full-Time, Long term opportunities: - Turing only partners with U.S companies that are hiring for full-time long term roles remotely and also work hard on re-matching you to subsequent long term opportunities. If you register and pass Turing’s tests and interviews, you may never have to interview for a job again.
    
    Compensation: - Turing engineers are compensated with salaries more than local companies in most countries.
    
    Find jobs across levels: - Turing hires mid level, senior level as well as tech lead level engineers.
    
    Find jobs in 100+ Skills: - Get hired for React, Node, Python, Angular, Swift, React Native, Android, Java, Rails, Golang, PHP, Vue, Devops, Machine Learning etc.`,
    subject: "We have awesome remote U.S. jobs waiting for engineers like you"
}]},{studNumber: 215955270, messages: [{
    date: "26 Oct 2022",
    status: "new", from: "Prof Nyembe", time: "11:25PM",
    text: `Hi ,

    We've identified great opportunities for you! Your next dream job might be listed below, what are you waiting for?
    `,
    subject: "New jobs at Dell Careers"
}]},{studNumber: 215955270, messages: [{
    date: "27 Oct 2022",
    status: "new", from: "Prof Nyembe", time: "09:30AM",
    text: `    
    Quora
     
    My IQ is 75. I want to study in college and become a theorist or an inventor. Is that possible for me?
    David Franchi, studied Finance at Columbia University (2019) • Answered June 2, 2020
    
    I think I’m qualified person to answer this. I grew up in Italy. I was born and raised in a cult that didn’t value formal education.`,
    subject: "My IQ is 75. I want to study in college and become a theorist or an inventor."
}]},
{studNumber: 215955270, messages: [{
    date: "27 Oct 2022",
    status: "new", from: "Prof Nyembe", time: "09:30AM",
    text: `Dear Brothers and Sisters,

 

    When we began our service as a new Area Presidency in August, one of our first tasks was to counsel with local leaders, the Lord, and one another to define a vision for the Africa South Area. We would like to share that vision with you today.
    
     
    
    We invite all to come unto Christ, make and keep sacred covenants, and become His lifelong disciples. To achieve this vision, we invite you to act on the following three objectives:
    
    I will make and keep temple covenants
    I will serve a mission. I will help others to serve.
    I will assist in God’s work by ministering and by doing missionary work.
     
    
    A small card has been printed with these objectives and is being shipped to stakes and districts for delivery to wards and branches. We ask you to prayerfully consider what you can do as individuals and as families to act on these objectives. We promise that as you do so, you will find peace and joy in your lives.
    
     
    
    We have also created a short video where the Area Presidency discusses the vision. Please watch this video at AfricaSouth.ChurchofJesusChrist.org/area-vision-2023.
    
     
    
    As you become lifelong disciples of Jesus Christ, His blessings will be yours, and “ye shall find rest unto your souls” (Matthew 11:28-29).
    
     
    
    Sincerely yours,`,
    subject: "Introducing the Africa South Area Vision: Lifelong Disciples of Christ"
}]},
{studNumber: 215955270, messages: [{
    date: "27 Oct 2022",
    status: "new", from: "Prof Nyembe", time: "09:30AM",
    text: `Dear Brothers and Sisters,

 

    When we began our service as a new Area Presidency in August, one of our first tasks was to counsel with local leaders, the Lord, and one another to define a vision for the Africa South Area. We would like to share that vision with you today.
    
     
    
    We invite all to come unto Christ, make and keep sacred covenants, and become His lifelong disciples. To achieve this vision, we invite you to act on the following three objectives:
    
    I will make and keep temple covenants
    I will serve a mission. I will help others to serve.
    I will assist in God’s work by ministering and by doing missionary work.
     
    
    A small card has been printed with these objectives and is being shipped to stakes and districts for delivery to wards and branches. We ask you to prayerfully consider what you can do as individuals and as families to act on these objectives. We promise that as you do so, you will find peace and joy in your lives.
    
     
    
    We have also created a short video where the Area Presidency discusses the vision. Please watch this video at AfricaSouth.ChurchofJesusChrist.org/area-vision-2023.
    
     
    
    As you become lifelong disciples of Jesus Christ, His blessings will be yours, and “ye shall find rest unto your souls” (Matthew 11:28-29).
    
     
    
    Sincerely yours,`,
    subject: "Introducing the Africa South Area Vision: Lifelong Disciples of Christ"
}]},
{studNumber: 215955270, messages: [{
    date: "27 Oct 2022",
    status: "new", from: "Prof Nyembe", time: "09:30AM",
    text: `Dear Brothers and Sisters,

 

    When we began our service as a new Area Presidency in August, one of our first tasks was to counsel with local leaders, the Lord, and one another to define a vision for the Africa South Area. We would like to share that vision with you today.
    
     
    
    We invite all to come unto Christ, make and keep sacred covenants, and become His lifelong disciples. To achieve this vision, we invite you to act on the following three objectives:
    
    I will make and keep temple covenants
    I will serve a mission. I will help others to serve.
    I will assist in God’s work by ministering and by doing missionary work.
     
    
    A small card has been printed with these objectives and is being shipped to stakes and districts for delivery to wards and branches. We ask you to prayerfully consider what you can do as individuals and as families to act on these objectives. We promise that as you do so, you will find peace and joy in your lives.
    
     
    
    We have also created a short video where the Area Presidency discusses the vision. Please watch this video at AfricaSouth.ChurchofJesusChrist.org/area-vision-2023.
    
     
    
    As you become lifelong disciples of Jesus Christ, His blessings will be yours, and “ye shall find rest unto your souls” (Matthew 11:28-29).
    
     
    
    Sincerely yours,`,
    subject: "Introducing the Africa South Area Vision: Lifelong Disciples of Christ"
}]},
{studNumber: 215955270, messages: [{
    date: "27 Oct 2022",
    status: "new", from: "Prof Nyembe", time: "09:30AM",
    text: `Dear Brothers and Sisters,

 

    When we began our service as a new Area Presidency in August, one of our first tasks was to counsel with local leaders, the Lord, and one another to define a vision for the Africa South Area. We would like to share that vision with you today.
    
     
    
    We invite all to come unto Christ, make and keep sacred covenants, and become His lifelong disciples. To achieve this vision, we invite you to act on the following three objectives:
    
    I will make and keep temple covenants
    I will serve a mission. I will help others to serve.
    I will assist in God’s work by ministering and by doing missionary work.
     
    
    A small card has been printed with these objectives and is being shipped to stakes and districts for delivery to wards and branches. We ask you to prayerfully consider what you can do as individuals and as families to act on these objectives. We promise that as you do so, you will find peace and joy in your lives.
    
     
    
    We have also created a short video where the Area Presidency discusses the vision. Please watch this video at AfricaSouth.ChurchofJesusChrist.org/area-vision-2023.
    
     
    
    As you become lifelong disciples of Jesus Christ, His blessings will be yours, and “ye shall find rest unto your souls” (Matthew 11:28-29).
    
     
    
    Sincerely yours,`,
    subject: "Introducing the Africa South Area Vision: Lifelong Disciples of Christ"
}]},
{studNumber: 215955270, messages: [{
    date: "27 Oct 2022",
    status: "new", from: "Prof Nyembe", time: "09:30AM",
    text: `Dear Brothers and Sisters,

 

    When we began our service as a new Area Presidency in August, one of our first tasks was to counsel with local leaders, the Lord, and one another to define a vision for the Africa South Area. We would like to share that vision with you today.
    
     
    
    We invite all to come unto Christ, make and keep sacred covenants, and become His lifelong disciples. To achieve this vision, we invite you to act on the following three objectives:
    
    I will make and keep temple covenants
    I will serve a mission. I will help others to serve.
    I will assist in God’s work by ministering and by doing missionary work.
     
    
    A small card has been printed with these objectives and is being shipped to stakes and districts for delivery to wards and branches. We ask you to prayerfully consider what you can do as individuals and as families to act on these objectives. We promise that as you do so, you will find peace and joy in your lives.
    
     
    
    We have also created a short video where the Area Presidency discusses the vision. Please watch this video at AfricaSouth.ChurchofJesusChrist.org/area-vision-2023.
    
     
    
    As you become lifelong disciples of Jesus Christ, His blessings will be yours, and “ye shall find rest unto your souls” (Matthew 11:28-29).
    
     
    
    Sincerely yours,`,
    subject: "Introducing the Africa South Area Vision: Lifelong Disciples of Christ"
}]},
{studNumber: 215955270, messages: [{
    date: "27 Oct 2022",
    status: "new", from: "Prof Nyembe", time: "09:30AM",
    text: `Dear Brothers and Sisters,


    When we began our service as a new Area Presidency in August, one of our first tasks was to counsel with local leaders, the Lord, and one another to define a vision for the Africa South Area. We would like to share that vision with you today.
    
     
    
    We invite all to come unto Christ, make and keep sacred covenants, and become His lifelong disciples. To achieve this vision, we invite you to act on the following three objectives:
    
    I will make and keep temple covenants
    I will serve a mission. I will help others to serve.
    I will assist in God’s work by ministering and by doing missionary work.
     
    
    A small card has been printed with these objectives and is being shipped to stakes and districts for delivery to wards and branches. We ask you to prayerfully consider what you can do as individuals and as families to act on these objectives. We promise that as you do so, you will find peace and joy in your lives.
    
     
    
    We have also created a short video where the Area Presidency discusses the vision. Please watch this video at AfricaSouth.ChurchofJesusChrist.org/area-vision-2023.
    
     
    
    As you become lifelong disciples of Jesus Christ, His blessings will be yours, and “ye shall find rest unto your souls” (Matthew 11:28-29).
    
     
    
    Sincerely yours,`,
    subject: "Introducing the Africa South Area Vision: Lifelong Disciples of Christ"
}]},
{studNumber: 215955270, messages: [{
    date: "27 Oct 2022",
    status: "new", from: "Prof Nyembe", time: "09:30AM",
    text: `Dear Brothers and Sisters,

 

    When we began our service as a new Area Presidency in August, one of our first tasks was to counsel with local leaders, the Lord, and one another to define a vision for the Africa South Area. We would like to share that vision with you today.
    
     
    
    We invite all to come unto Christ, make and keep sacred covenants, and become His lifelong disciples. To achieve this vision, we invite you to act on the following three objectives:
    
    I will make and keep temple covenants
    I will serve a mission. I will help others to serve.
    I will assist in God’s work by ministering and by doing missionary work.
     
    
    A small card has been printed with these objectives and is being shipped to stakes and districts for delivery to wards and branches. We ask you to prayerfully consider what you can do as individuals and as families to act on these objectives. We promise that as you do so, you will find peace and joy in your lives.
    
     
    
    We have also created a short video where the Area Presidency discusses the vision. Please watch this video at AfricaSouth.ChurchofJesusChrist.org/area-vision-2023.
    
     
    
    As you become lifelong disciples of Jesus Christ, His blessings will be yours, and “ye shall find rest unto your souls” (Matthew 11:28-29).
    
     
    
    Sincerely yours,`,
    subject: "Introducing the Africa South Area Vision: Lifelong Disciples of Christ"
}]},
{studNumber: 215955270, messages: [{
    date: "27 Oct 2022",
    status: "new", from: "Prof Nyembe", time: "09:30AM",
    text: `Dear Brothers and Sisters,

 

    When we began our service as a new Area Presidency in August, one of our first tasks was to counsel with local leaders, the Lord, and one another to define a vision for the Africa South Area. We would like to share that vision with you today.
    
     
    
    We invite all to come unto Christ, make and keep sacred covenants, and become His lifelong disciples. To achieve this vision, we invite you to act on the following three objectives:
    
    I will make and keep temple covenants
    I will serve a mission. I will help others to serve.
    I will assist in God’s work by ministering and by doing missionary work.
     
    
    A small card has been printed with these objectives and is being shipped to stakes and districts for delivery to wards and branches. We ask you to prayerfully consider what you can do as individuals and as families to act on these objectives. We promise that as you do so, you will find peace and joy in your lives.
    
     
    
    We have also created a short video where the Area Presidency discusses the vision. Please watch this video at AfricaSouth.ChurchofJesusChrist.org/area-vision-2023.
    
     
    
    As you become lifelong disciples of Jesus Christ, His blessings will be yours, and “ye shall find rest unto your souls” (Matthew 11:28-29).
    
     
    
    Sincerely yours,`,
    subject: "Introducing the Africa South Area Vision: Lifelong Disciples of Christ"
}]},
{studNumber: 215955270, messages: [{
    date: "27 Oct 2022",
    status: "new", from: "Prof Nyembe", time: "09:30AM",
    text: `Dear Brothers and Sisters,

 

    When we began our service as a new Area Presidency in August, one of our first tasks was to counsel with local leaders, the Lord, and one another to define a vision for the Africa South Area. We would like to share that vision with you today.
    
     
    
    We invite all to come unto Christ, make and keep sacred covenants, and become His lifelong disciples. To achieve this vision, we invite you to act on the following three objectives:
    
    I will make and keep temple covenants
    I will serve a mission. I will help others to serve.
    I will assist in God’s work by ministering and by doing missionary work.
     
    
    A small card has been printed with these objectives and is being shipped to stakes and districts for delivery to wards and branches. We ask you to prayerfully consider what you can do as individuals and as families to act on these objectives. We promise that as you do so, you will find peace and joy in your lives.
    
     
    
    We have also created a short video where the Area Presidency discusses the vision. Please watch this video at AfricaSouth.ChurchofJesusChrist.org/area-vision-2023.
    
     
    
    As you become lifelong disciples of Jesus Christ, His blessings will be yours, and “ye shall find rest unto your souls” (Matthew 11:28-29).
    
     
    
    Sincerely yours,`,
    subject: "Introducing the Africa South Area Vision: Lifelong Disciples of Christ"
}]},
{studNumber: 215955270, messages: [{
    date: "27 Oct 2022",
    status: "new", from: "Prof Nyembe", time: "09:30AM",
    text: `Dear Brothers and Sisters,

 

    When we began our service as a new Area Presidency in August, one of our first tasks was to counsel with local leaders, the Lord, and one another to define a vision for the Africa South Area. We would like to share that vision with you today.
    
     
    
    We invite all to come unto Christ, make and keep sacred covenants, and become His lifelong disciples. To achieve this vision, we invite you to act on the following three objectives:
    
    I will make and keep temple covenants
    I will serve a mission. I will help others to serve.
    I will assist in God’s work by ministering and by doing missionary work.
     
    
    A small card has been printed with these objectives and is being shipped to stakes and districts for delivery to wards and branches. We ask you to prayerfully consider what you can do as individuals and as families to act on these objectives. We promise that as you do so, you will find peace and joy in your lives.
    
     
    
    We have also created a short video where the Area Presidency discusses the vision. Please watch this video at AfricaSouth.ChurchofJesusChrist.org/area-vision-2023.
    
     
    
    As you become lifelong disciples of Jesus Christ, His blessings will be yours, and “ye shall find rest unto your souls” (Matthew 11:28-29).
    
     
    
    Sincerely yours,`,
    subject: "Introducing the Africa South Area Vision: Lifelong Disciples of Christ"
}]},
{studNumber: 215955270, messages: [{
    date: "27 Oct 2022",
    status: "new", from: "Prof Nyembe", time: "09:30AM",
    text: `Dear Brothers and Sisters,

 

    When we began our service as a new Area Presidency in August, one of our first tasks was to counsel with local leaders, the Lord, and one another to define a vision for the Africa South Area. We would like to share that vision with you today.
    
     
    
    We invite all to come unto Christ, make and keep sacred covenants, and become His lifelong disciples. To achieve this vision, we invite you to act on the following three objectives:
    
    I will make and keep temple covenants
    I will serve a mission. I will help others to serve.
    I will assist in God’s work by ministering and by doing missionary work.
     
    
    A small card has been printed with these objectives and is being shipped to stakes and districts for delivery to wards and branches. We ask you to prayerfully consider what you can do as individuals and as families to act on these objectives. We promise that as you do so, you will find peace and joy in your lives.
    
     
    
    We have also created a short video where the Area Presidency discusses the vision. Please watch this video at AfricaSouth.ChurchofJesusChrist.org/area-vision-2023.
    
     
    
    As you become lifelong disciples of Jesus Christ, His blessings will be yours, and “ye shall find rest unto your souls” (Matthew 11:28-29).
    
     
    
    Sincerely yours,`,
    subject: "Introducing the Africa South Area Vision: Lifelong Disciples of Christ"
}]},
{studNumber: 215955270, messages: [{
    date: "27 Oct 2022",
    status: "new", from: "Prof Nyembe", time: "09:30AM",
    text: `Dear Brothers and Sisters,

 

    When we began our service as a new Area Presidency in August, one of our first tasks was to counsel with local leaders, the Lord, and one another to define a vision for the Africa South Area. We would like to share that vision with you today.
    
     
    
    We invite all to come unto Christ, make and keep sacred covenants, and become His lifelong disciples. To achieve this vision, we invite you to act on the following three objectives:
    
    I will make and keep temple covenants
    I will serve a mission. I will help others to serve.
    I will assist in God’s work by ministering and by doing missionary work.
     
    
    A small card has been printed with these objectives and is being shipped to stakes and districts for delivery to wards and branches. We ask you to prayerfully consider what you can do as individuals and as families to act on these objectives. We promise that as you do so, you will find peace and joy in your lives.
    
     
    
    We have also created a short video where the Area Presidency discusses the vision. Please watch this video at AfricaSouth.ChurchofJesusChrist.org/area-vision-2023.
    
     
    
    As you become lifelong disciples of Jesus Christ, His blessings will be yours, and “ye shall find rest unto your souls” (Matthew 11:28-29).
    
     
    
    Sincerely yours,`,
    subject: "Introducing the Africa South Area Vision: Lifelong Disciples of Christ"
}]},
{studNumber: 215955270, messages: [{
    date: "27 Oct 2022",
    status: "new", from: "Prof Nyembe", time: "09:30AM",
    text: `Dear Brothers and Sisters,

 

    When we began our service as a new Area Presidency in August, one of our first tasks was to counsel with local leaders, the Lord, and one another to define a vision for the Africa South Area. We would like to share that vision with you today.
    
     
    
    We invite all to come unto Christ, make and keep sacred covenants, and become His lifelong disciples. To achieve this vision, we invite you to act on the following three objectives:
    
    I will make and keep temple covenants
    I will serve a mission. I will help others to serve.
    I will assist in God’s work by ministering and by doing missionary work.
     
    
    A small card has been printed with these objectives and is being shipped to stakes and districts for delivery to wards and branches. We ask you to prayerfully consider what you can do as individuals and as families to act on these objectives. We promise that as you do so, you will find peace and joy in your lives.
    
     
    
    We have also created a short video where the Area Presidency discusses the vision. Please watch this video at AfricaSouth.ChurchofJesusChrist.org/area-vision-2023.
    
     
    
    As you become lifelong disciples of Jesus Christ, His blessings will be yours, and “ye shall find rest unto your souls” (Matthew 11:28-29).
    
     
    
    Sincerely yours,`,
    subject: "Introducing the Africa South Area Vision: Lifelong Disciples of Christ"
}]},
{studNumber: 215955270, messages: [{
    date: "27 Oct 2022",
    status: "new", from: "Prof Nyembe", time: "09:30AM",
    text: `Dear Brothers and Sisters,

 

    When we began our service as a new Area Presidency in August, one of our first tasks was to counsel with local leaders, the Lord, and one another to define a vision for the Africa South Area. We would like to share that vision with you today.
    
     
    
    We invite all to come unto Christ, make and keep sacred covenants, and become His lifelong disciples. To achieve this vision, we invite you to act on the following three objectives:
    
    I will make and keep temple covenants
    I will serve a mission. I will help others to serve.
    I will assist in God’s work by ministering and by doing missionary work.
     
    
    A small card has been printed with these objectives and is being shipped to stakes and districts for delivery to wards and branches. We ask you to prayerfully consider what you can do as individuals and as families to act on these objectives. We promise that as you do so, you will find peace and joy in your lives.
    
     
    
    We have also created a short video where the Area Presidency discusses the vision. Please watch this video at AfricaSouth.ChurchofJesusChrist.org/area-vision-2023.
    
     
    
    As you become lifelong disciples of Jesus Christ, His blessings will be yours, and “ye shall find rest unto your souls” (Matthew 11:28-29).
    
     
    
    Sincerely yours,`,
    subject: "Introducing the Africa South Area Vision: Lifelong Disciples of Christ"
}]}

]