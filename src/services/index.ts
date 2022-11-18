import { MockUserRepository } from "./user/MockUserRepository";
import { MockExampleRepository } from "@core/services/example/MockExampleRepository";

export * from "@core/services/example/ExampleRepositoryInterface";
export * from "./user/UserRepositoryInterface";

export const UserService = new MockUserRepository();
export const CounselingService = new MockExampleRepository();
