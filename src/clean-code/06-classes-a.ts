(() => {
  // Not applying the principle of sole responsibility

  type Gender = "M" | "F";
  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {}
  }
  /*
      public name: string;
      public gender: Gender;
      public birthdate: Date;
      
      constructor(name: string, gender: Gender, birthdate: Date) {
          this.name = name;
          this.gender = gender;
          this.birthdate = birthdate;
        } */

  class User extends Person {
    public lastAccess: Date;
    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(name, gender, birthdate);
      this.lastAccess = new Date();
    }

    checkCredentials(): boolean {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(email, role, name, gender, birthdate);
    }
  }

  const userSettings = new UserSettings(
    "/user/home",
    "/home",
    "luke@gmail.com",
    "Admin",
    "luke",
    "M",
    new Date("1990-03-27")
  );

  console.log({
    userSettings,
    areCredentialsValid: userSettings.checkCredentials(),
  });

  /* 
  const newPerson = new Person("Lucas", "M", new Date("1990-03-27"));
  console.log({ newPerson }); */
})();
