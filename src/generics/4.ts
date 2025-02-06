type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

type UserUpdate = Partial<User>;

function createOrUpdateUser<T extends UserUpdate>(initialValues: T): User {
  // Оновлення користувача
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
