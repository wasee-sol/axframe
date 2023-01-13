import { UserRepositoryMock } from "./user/UserRepositoryMock";
import { ExampleRepositoryMock } from "@core/services/example/ExampleRepositoryMock";

export * from "@core/services/example/ExampleRepositoryInterface";
export * from "./user/UserRepositoryInterface";

export const UserService = new UserRepositoryMock();
export const ExampleService = new ExampleRepositoryMock();
