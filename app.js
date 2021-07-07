const students = require('./students')
const yargs = require('yargs');

yargs.command({
  command: "add",
  describe: "Add Student",
  builder: {
    id: {
      describe: "This is student id",
      demandOption: true,
      type: "string",
    },
    name: {
      describe: "This is student name",
      demandOption: true,
      type: "string",
    },
    total_mark: {
      describe: "This is student grade",
      demandOption: true,
      type: "number",
    },
    comment: {
      describe: "This is comment for grade",
      demandOption: true,
      type: "string",
    }

  },
  handler: (argv) => {
    students.addStudent(argv.id,argv.name,argv.total_mark,argv.comment);
  },
});

yargs.command({
  command: "read",
  describe: "Get student by id",
  builder: {
    id: {
      describe: "This is student id",
      demandOption: true,
      type: "string",
    }
  },
  handler: (argv) => {
    students.getStudent(argv.id);
  },
});

yargs.command({
  command: "delete",
  describe: "Delete Student",
  builder: {
    id: {
      describe: "This is student id",
      demandOption: true,
      type: "string",
    }
  },
  handler: (argv) => {
    students.removeStudent(argv.id);
  },
});


yargs.command({
  command: "list",
  describe: "Get all Students",
  handler: () => {
    students.getStudents();
  },
});


yargs.parse()
