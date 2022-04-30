(() => {
  // Aplicando el principio de responsabilidad unica
  // Priorizar composicion frente a la herencia (Evitar extends)

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
    email: string;
    role: string;
  }

  class User {
    public email: string;
    public lastAccess: Date;
    public role: string;

    constructor({ email, role }: UserProps) {
      this.lastAccess = new Date();
      this.role = role;
      this.email = email;
    }

    checkCredentials(): boolean {
      return true;
    }
  }

  interface SettingProps {
    lastOpenFolder: string;
    workingDirectory: string;
  }

  class Settings {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({ lastOpenFolder, workingDirectory }: SettingProps) {
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
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

  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({ name, gender, birthdate, email, role, lastOpenFolder, workingDirectory }: UserSettingProps) {
      this.person = new Person({ name, gender, birthdate});
      this.user = new User({email, role});
      this.settings = new Settings({lastOpenFolder, workingDirectory})
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
    userSettings, credentials: userSettings.user.checkCredentials()});
})();
