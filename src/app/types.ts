// ------------------------------
// Enums
// ------------------------------

export enum GenderTypes {
  Male = "Male",
  Female = "Female",
  Unknown = "Unknown",
}

export enum Attachments_AttachmentType {
  EMPTY_ENUM_VALUE = "",
  Graded_Lesson = "Graded Lesson",
  Answer_Sheet = "Answer Sheet",
}

export enum Attachments_AttachmentSelected {
  True = "True",
  False = "False",
}

export enum Students_StudentMaritalStatus {
  EMPTY_ENUM_VALUE = "",
  Single = "Single",
  Married = "Married",
}

export enum Students_StudentWBSBefore {
  EMPTY_ENUM_VALUE = "",
  Yes = "Yes",
  No = "No",
}

export enum Students_StudentHasBeenBaptized {
  EMPTY_ENUM_VALUE = "",
  Yes = "Yes",
  No = "No",
}

export enum Students_StudentBaptismType {
  EMPTY_ENUM_VALUE = "",
  Immersed = "Immersed",
  Sprinkled = "Sprinkled",
  Poured = "Poured",
  Other = "Other",
}

export enum Students_StudentRequestedBaptism {
  EMPTY_ENUM_VALUE = "",
  Yes = "Yes",
  No = "No",
}

export enum Students_StudentHasBible {
  EMPTY_ENUM_VALUE = "",
  Yes = "Yes",
  No = "No",
}

// ------------------------------
// Model Classes
// ------------------------------

export class Answers {
  AnswerRecNo: number;
  AnswerLessonsRecNo?: number;
  AnswerQuestionNo: string;
  AnswerCorrectAnswer: string;

  constructor(data: {
    AnswerRecNo: number;
    AnswerLessonsRecNo?: number;
    AnswerQuestionNo: string;
    AnswerCorrectAnswer: string;
  }) {
    this.AnswerRecNo = data.AnswerRecNo;
    this.AnswerLessonsRecNo = data.AnswerLessonsRecNo;
    this.AnswerQuestionNo = data.AnswerQuestionNo;
    this.AnswerCorrectAnswer = data.AnswerCorrectAnswer;
  }
}

export class Attachments {
  AttachmentRecNo: number;
  AttachmentStudentsRecNo: number;
  AttachmentName: string;
  AttachmentData: Buffer;
  AttachmentType?: Attachments_AttachmentType;
  AttachmentCreated: Date;
  AttachmentSentToContact?: Date;
  AttachmentContactsRecNo: number;
  AttachmentSelected?: Attachments_AttachmentSelected;
  // Relation: Each Attachment is linked to one Student.
  Students: Students;

  constructor(data: {
    AttachmentRecNo: number;
    AttachmentStudentsRecNo: number;
    AttachmentName: string;
    AttachmentData: Buffer;
    AttachmentType?: Attachments_AttachmentType;
    AttachmentCreated: Date;
    AttachmentSentToContact?: Date;
    AttachmentContactsRecNo: number;
    AttachmentSelected?: Attachments_AttachmentSelected;
    Students: Students;
  }) {
    this.AttachmentRecNo = data.AttachmentRecNo;
    this.AttachmentStudentsRecNo = data.AttachmentStudentsRecNo;
    this.AttachmentName = data.AttachmentName;
    this.AttachmentData = data.AttachmentData;
    this.AttachmentType = data.AttachmentType;
    this.AttachmentCreated = data.AttachmentCreated;
    this.AttachmentSentToContact = data.AttachmentSentToContact;
    this.AttachmentContactsRecNo = data.AttachmentContactsRecNo;
    this.AttachmentSelected = data.AttachmentSelected;
    this.Students = data.Students;
  }
}

export class Comments {
  CommentRecNo: number;
  CommentTag: string;
  CommentContent: string;

  constructor(data: {
    CommentRecNo: number;
    CommentTag: string;
    CommentContent: string;
  }) {
    this.CommentRecNo = data.CommentRecNo;
    this.CommentTag = data.CommentTag;
    this.CommentContent = data.CommentContent;
  }
}

export class CommentsBWS {
  CommentRecNo: number;
  CommentTag: string;
  CommentContent: string;

  constructor(data: {
    CommentRecNo: number;
    CommentTag: string;
    CommentContent: string;
  }) {
    this.CommentRecNo = data.CommentRecNo;
    this.CommentTag = data.CommentTag;
    this.CommentContent = data.CommentContent;
  }
}

export class CommentsBWS50Q {
  CommentRecNo: number;
  CommentTag: string;
  CommentContent: string;

  constructor(data: {
    CommentRecNo: number;
    CommentTag: string;
    CommentContent: string;
  }) {
    this.CommentRecNo = data.CommentRecNo;
    this.CommentTag = data.CommentTag;
    this.CommentContent = data.CommentContent;
  }
}

export class CommentsFOG {
  CommentRecNo: number;
  CommentTag: string;
  CommentContent: string;

  constructor(data: {
    CommentRecNo: number;
    CommentTag: string;
    CommentContent: string;
  }) {
    this.CommentRecNo = data.CommentRecNo;
    this.CommentTag = data.CommentTag;
    this.CommentContent = data.CommentContent;
  }
}

export class CommentsFOG50Q {
  CommentRecNo: number;
  CommentTag: string;
  CommentContent: string;

  constructor(data: {
    CommentRecNo: number;
    CommentTag: string;
    CommentContent: string;
  }) {
    this.CommentRecNo = data.CommentRecNo;
    this.CommentTag = data.CommentTag;
    this.CommentContent = data.CommentContent;
  }
}

export class CommentsGHS {
  CommentRecNo: number;
  CommentTag: string;
  CommentContent: string;

  constructor(data: {
    CommentRecNo: number;
    CommentTag: string;
    CommentContent: string;
  }) {
    this.CommentRecNo = data.CommentRecNo;
    this.CommentTag = data.CommentTag;
    this.CommentContent = data.CommentContent;
  }
}

export class CommentsGHS50Q {
  CommentRecNo: number;
  CommentTag: string;
  CommentContent: string;

  constructor(data: {
    CommentRecNo: number;
    CommentTag: string;
    CommentContent: string;
  }) {
    this.CommentRecNo = data.CommentRecNo;
    this.CommentTag = data.CommentTag;
    this.CommentContent = data.CommentContent;
  }
}

export class CommentsIntro {
  CommentRecNo: number;
  CommentTag: string;
  CommentContent: string;

  constructor(data: {
    CommentRecNo: number;
    CommentTag: string;
    CommentContent: string;
  }) {
    this.CommentRecNo = data.CommentRecNo;
    this.CommentTag = data.CommentTag;
    this.CommentContent = data.CommentContent;
  }
}

export class CommentsKJ {
  CommentRecNo: number;
  CommentTag: string;
  CommentContent: string;

  constructor(data: {
    CommentRecNo: number;
    CommentTag: string;
    CommentContent: string;
  }) {
    this.CommentRecNo = data.CommentRecNo;
    this.CommentTag = data.CommentTag;
    this.CommentContent = data.CommentContent;
  }
}

export class CommentsKJ50Q {
  CommentRecNo: number;
  CommentTag: string;
  CommentContent: string;

  constructor(data: {
    CommentRecNo: number;
    CommentTag: string;
    CommentContent: string;
  }) {
    this.CommentRecNo = data.CommentRecNo;
    this.CommentTag = data.CommentTag;
    this.CommentContent = data.CommentContent;
  }
}

export class CommentsLLL {
  CommentRecNo: number;
  CommentTag: string;
  CommentContent: string;

  constructor(data: {
    CommentRecNo: number;
    CommentTag: string;
    CommentContent: string;
  }) {
    this.CommentRecNo = data.CommentRecNo;
    this.CommentTag = data.CommentTag;
    this.CommentContent = data.CommentContent;
  }
}

export class CommentsLLL50Q {
  CommentRecNo: number;
  CommentTag: string;
  CommentContent: string;

  constructor(data: {
    CommentRecNo: number;
    CommentTag: string;
    CommentContent: string;
  }) {
    this.CommentRecNo = data.CommentRecNo;
    this.CommentTag = data.CommentTag;
    this.CommentContent = data.CommentContent;
  }
}

export class CommentsTIGN {
  CommentRecNo: number;
  CommentTag: string;
  CommentContent: string;

  constructor(data: {
    CommentRecNo: number;
    CommentTag: string;
    CommentContent: string;
  }) {
    this.CommentRecNo = data.CommentRecNo;
    this.CommentTag = data.CommentTag;
    this.CommentContent = data.CommentContent;
  }
}

export class CommentsTIGN50Q {
  CommentRecNo: number;
  CommentTag: string;
  CommentContent: string;

  constructor(data: {
    CommentRecNo: number;
    CommentTag: string;
    CommentContent: string;
  }) {
    this.CommentRecNo = data.CommentRecNo;
    this.CommentTag = data.CommentTag;
    this.CommentContent = data.CommentContent;
  }
}

export class Contacts {
  ContactRecNo: number;
  ContactWBSID: string;
  ContactFirstName: string;
  ContactLastName: string;
  ContactPrefix: string;
  // Relation: A Contact can be associated with multiple Users.
  Users: Users[];

  constructor(data: {
    ContactRecNo: number;
    ContactWBSID: string;
    ContactFirstName: string;
    ContactLastName: string;
    ContactPrefix: string;
    Users?: Users[];
  }) {
    this.ContactRecNo = data.ContactRecNo;
    this.ContactWBSID = data.ContactWBSID;
    this.ContactFirstName = data.ContactFirstName;
    this.ContactLastName = data.ContactLastName;
    this.ContactPrefix = data.ContactPrefix;
    this.Users = data.Users || [];
  }
}

export class Countries {
  CountriesRecNo: number;
  CountryName?: string;

  constructor(data: { CountriesRecNo: number; CountryName?: string }) {
    this.CountriesRecNo = data.CountriesRecNo;
    this.CountryName = data.CountryName;
  }
}

export class Grades {
  GradeRecNo: number;
  GradeDateGraded?: Date;
  GradeLessonsRecNo?: number;
  GradeScore?: number;
  GradeStudentsRecNo?: number;
  GradeDateSent: Date;
  GradeDateReceived: Date;
  GradeComments: string;
  // Relations (optional): a Grade may be linked to a Lesson and/or a Student.
  Lessons?: Lessons;
  Students?: Students;

  constructor(data: {
    GradeRecNo: number;
    GradeDateGraded?: Date;
    GradeLessonsRecNo?: number;
    GradeScore?: number;
    GradeStudentsRecNo?: number;
    GradeDateSent: Date;
    GradeDateReceived: Date;
    GradeComments: string;
    Lessons?: Lessons;
    Students?: Students;
  }) {
    this.GradeRecNo = data.GradeRecNo;
    this.GradeDateGraded = data.GradeDateGraded;
    this.GradeLessonsRecNo = data.GradeLessonsRecNo;
    this.GradeScore = data.GradeScore;
    this.GradeStudentsRecNo = data.GradeStudentsRecNo;
    this.GradeDateSent = data.GradeDateSent;
    this.GradeDateReceived = data.GradeDateReceived;
    this.GradeComments = data.GradeComments;
    this.Lessons = data.Lessons;
    this.Students = data.Students;
  }
}

export class Lessons {
  LessonRecNo: number;
  LessonName: string;
  LessonShortName: string;
  // Relation: A Lesson may have many Grades.
  Grades: Grades[];

  constructor(data: {
    LessonRecNo: number;
    LessonName: string;
    LessonShortName: string;
    Grades?: Grades[];
  }) {
    this.LessonRecNo = data.LessonRecNo;
    this.LessonName = data.LessonName;
    this.LessonShortName = data.LessonShortName;
    this.Grades = data.Grades || [];
  }
}

export class Religions {
  ReligionRecNo: number;
  ReligionName?: string;

  constructor(data: { ReligionRecNo: number; ReligionName?: string }) {
    this.ReligionRecNo = data.ReligionRecNo;
    this.ReligionName = data.ReligionName;
  }
}

export class Students {
  StudentRecNo: number;
  StudentID?: string;
  StudentWBSID?: string;
  StudentTeachersRecNo?: number;
  StudentContactsRecNo?: number;
  StudentFirstName: string;
  StudentLastName: string;
  StudentAge?: number;
  StudentBirthdate?: Date;
  StudentBirthdateIso?: string;
  StudentGender: string;
  StudentGenderShow: GenderTypes;
  StudentMaritalStatus?: Students_StudentMaritalStatus;
  StudentReligion?: string;
  StudentChurchName?: string;
  StudentWBSBefore?: Students_StudentWBSBefore;
  StudentCountry?: string;
  StudentState?: string;
  StudentCity?: string;
  StudentPostalAddress?: string;
  StudentEmailAddress?: string;
  StudentPhone1?: string;
  StudentPhone2?: string;
  StudentStreetAddress?: string;
  StudentOccupation?: string;
  StudentHasBeenBaptized?: Students_StudentHasBeenBaptized;
  StudentBaptismType?: Students_StudentBaptismType;
  StudentRequestedBaptism?: Students_StudentRequestedBaptism;
  StudentHasBible?: Students_StudentHasBible;
  StudentBibleIssuedDate?: Date;
  StudentNotes?: string;
  StudentCountriesRecNo?: number;
  // Relations: A student can have multiple Attachments and Grades.
  Attachments: Attachments[];
  Grades: Grades[];

  constructor(data: {
    StudentRecNo: number;
    StudentID?: string;
    StudentWBSID?: string;
    StudentTeachersRecNo?: number;
    StudentContactsRecNo?: number;
    StudentFirstName: string;
    StudentLastName: string;
    StudentAge?: number;
    StudentBirthdate?: Date;
    StudentGender: string;
    StudentMaritalStatus?: Students_StudentMaritalStatus;
    StudentReligion?: string;
    StudentChurchName?: string;
    StudentWBSBefore?: Students_StudentWBSBefore;
    StudentCountry?: string;
    StudentState?: string;
    StudentCity?: string;
    StudentPostalAddress?: string;
    StudentEmailAddress?: string;
    StudentPhone1?: string;
    StudentPhone2?: string;
    StudentStreetAddress?: string;
    StudentOccupation?: string;
    StudentHasBeenBaptized?: Students_StudentHasBeenBaptized;
    StudentBaptismType?: Students_StudentBaptismType;
    StudentRequestedBaptism?: Students_StudentRequestedBaptism;
    StudentHasBible?: Students_StudentHasBible;
    StudentBibleIssuedDate?: Date;
    StudentNotes?: string;
    StudentCountriesRecNo?: number;
    Attachments?: Attachments[];
    Grades?: Grades[];
  }) {
    this.StudentRecNo = data.StudentRecNo;
    this.StudentID = data.StudentID;
    this.StudentWBSID = data.StudentWBSID;
    this.StudentTeachersRecNo = data.StudentTeachersRecNo;
    this.StudentContactsRecNo = data.StudentContactsRecNo;
    this.StudentFirstName = data.StudentFirstName;
    this.StudentLastName = data.StudentLastName;
    this.StudentAge = data.StudentAge;
    this.StudentBirthdate = data.StudentBirthdate ? new Date(data.StudentBirthdate) : undefined;
    this.StudentBirthdateIso = this.StudentBirthdate ? this.StudentBirthdate.toISOString().substring(0,10) : undefined;
    this.StudentGender = data.StudentGender;
    this.StudentGenderShow = data.StudentGender ? data.StudentGender == 'M' ? GenderTypes.Male : GenderTypes.Female : GenderTypes.Unknown;
    this.StudentMaritalStatus = data.StudentMaritalStatus;
    this.StudentReligion = data.StudentReligion;
    this.StudentChurchName = data.StudentChurchName;
    this.StudentWBSBefore = data.StudentWBSBefore;
    this.StudentCountry = data.StudentCountry;
    this.StudentState = data.StudentState;
    this.StudentCity = data.StudentCity;
    this.StudentPostalAddress = data.StudentPostalAddress;
    this.StudentEmailAddress = data.StudentEmailAddress;
    this.StudentPhone1 = data.StudentPhone1;
    this.StudentPhone2 = data.StudentPhone2;
    this.StudentStreetAddress = data.StudentStreetAddress;
    this.StudentOccupation = data.StudentOccupation;
    this.StudentHasBeenBaptized = data.StudentHasBeenBaptized;
    this.StudentBaptismType = data.StudentBaptismType;
    this.StudentRequestedBaptism = data.StudentRequestedBaptism;
    this.StudentHasBible = data.StudentHasBible;
    this.StudentBibleIssuedDate = data.StudentBibleIssuedDate;
    this.StudentNotes = data.StudentNotes;
    this.StudentCountriesRecNo = data.StudentCountriesRecNo;
    this.Attachments = data.Attachments || [];
    this.Grades = data.Grades || [];
  }
}

export class Teachers {
  TeacherRecNo: number;
  TeacherWBSID: string;
  TeacherFirstName: string;
  TeacherLastName: string;
  TeacherPictureName?: string;
  TeacherPictureData?: Buffer;
  // Relation: A teacher can be linked to multiple Users.
  Users: Users[];

  constructor(data: {
    TeacherRecNo: number;
    TeacherWBSID: string;
    TeacherFirstName: string;
    TeacherLastName: string;
    TeacherPictureName?: string;
    TeacherPictureData?: Buffer;
    Users?: Users[];
  }) {
    this.TeacherRecNo = data.TeacherRecNo;
    this.TeacherWBSID = data.TeacherWBSID;
    this.TeacherFirstName = data.TeacherFirstName;
    this.TeacherLastName = data.TeacherLastName;
    this.TeacherPictureName = data.TeacherPictureName;
    this.TeacherPictureData = data.TeacherPictureData;
    this.Users = data.Users || [];
  }
}

export class UserLevels {
  UserLevelRecNo: number;
  UserLevelName?: string;
  // Relation: A user level can be associated with multiple Users.
  Users: Users[];

  constructor(data: {
    UserLevelRecNo: number;
    UserLevelName?: string;
    Users?: Users[];
  }) {
    this.UserLevelRecNo = data.UserLevelRecNo;
    this.UserLevelName = data.UserLevelName;
    this.Users = data.Users || [];
  }
}

export class Users {
  UserRecNo: number;
  UserName?: string;
  UserLevel?: number;
  UserTeacherRecNo?: number;
  UserContactRecNo?: number;
  // Relations: A User may be linked to a Contact, Teacher, and UserLevel.
  Contacts?: Contacts;
  Teachers?: Teachers;
  UserLevels?: UserLevels;

  constructor(data: {
    UserRecNo: number;
    UserName?: string;
    UserLevel?: number;
    UserTeacherRecNo?: number;
    UserContactRecNo?: number;
    Contacts?: Contacts;
    Teachers?: Teachers;
    UserLevels?: UserLevels;
  }) {
    this.UserRecNo = data.UserRecNo;
    this.UserName = data.UserName;
    this.UserLevel = data.UserLevel;
    this.UserTeacherRecNo = data.UserTeacherRecNo;
    this.UserContactRecNo = data.UserContactRecNo;
    this.Contacts = data.Contacts;
    this.Teachers = data.Teachers;
    this.UserLevels = data.UserLevels;
  }
}

export class teacher {
  TeacherRecNo: number;
  TeacherWBSID: string;
  TeacherFirstName: string;
  TeacherLastName: string;
  TeacherPictureName: string;
  TeacherPictureData: string;

  constructor(data: {
    TeacherRecNo: number;
    TeacherWBSID: string;
    TeacherFirstName: string;
    TeacherLastName: string;
    TeacherPictureName: string;
    TeacherPictureData: string;
  }) {
    this.TeacherRecNo = data.TeacherRecNo;
    this.TeacherWBSID = data.TeacherWBSID;
    this.TeacherFirstName = data.TeacherFirstName;
    this.TeacherLastName = data.TeacherLastName;
    this.TeacherPictureName = data.TeacherPictureName;
    this.TeacherPictureData = data.TeacherPictureData;
  }
}
