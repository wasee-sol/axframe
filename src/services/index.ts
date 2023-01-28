import { ExampleRepositoryMock } from "@core/services/example/ExampleRepositoryMock";
import { UserRepositoryMock } from "./user/UserRepositoryMock";
import { AppRepositoryMock } from "./app/AppRepositoryMock";

export * from "@core/services/example/ExampleRepositoryInterface";
export * from "./user/UserRepositoryInterface";
export * from "./app/AppRepositoryInterface";

export const UserService = new UserRepositoryMock();
export const ExampleService = new ExampleRepositoryMock();
export const AppService = new AppRepositoryMock();
