import { MockUserRepository } from "./user/MockUserRepository";
import { MockExampleRepository } from "./example/MockExampleRepository";

export * from "./example/ExampleRepositoryInterface";
export * from "./user/UserRepositoryInterface";

export const UserService = new MockUserRepository();
export const CounselingService = new MockExampleRepository();
