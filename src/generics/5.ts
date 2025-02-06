export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type RoleDesc = Record<UserRole, string>;

const RoleDescription: RoleDesc = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};
