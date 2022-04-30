(() => {
  // No aplicando el preincipio de responsabilidad unica
  type Gender = "M" | "F";

  interface PersonPros {
    birthdate: Date;
    gender: Gender;
    name: string;
  }

  class Person {
    public birthdate: Date;
    public gender: Gender;
    public name: string;

    constructor({ name, gender, birthdate }: PersonPros) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  interface UserProps {
    birthdate: Date;
    email: string;
    gender: Gender;
    name: string;
    role: string;
  }

  class User extends Person {
    public lastAccess: Date;
    public email: string;
    public role: string;

    constructor({ birthdate, email, gender, name, role }: UserProps) {
      super({ name, gender, birthdate });
      this.lastAccess = new Date();
      this.role = role;
      this.email = email;
    }

    checkCredentials(): boolean {
      return true;
    }
  }

  interface UserSettingProps {
    birthdate: Date;
    email: string;
    gender: Gender;
    lastOpenFolder: string;
    name: string;
    role: string;
    workingDirectory: string;
  }

  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({
      birthdate,
      email,
      gender,
      lastOpenFolder,
      name,
      role,
      workingDirectory,
    }: UserSettingProps) {
      super({ email, role, name, gender, birthdate });
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  const userSettings = new UserSettings({
    workingDirectory: "/user/home",
    lastOpenFolder: "/home",
    email: "luke@gmail.com",
    role: "Admin",
    name: "luke",
    gender: "M",
    birthdate: new Date("1990-03-27"),
  });

  console.log({
    userSettings,
    areCredentialsValid: userSettings.checkCredentials(),
  });
  
})();
