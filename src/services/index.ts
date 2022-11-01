import { MockUserRepository } from "repository/user/MockUserRepository";
import { MockExampleRepository } from "../repository/example/MockExampleRepository";

export const UserService = new MockUserRepository();
export const CounselingService = new MockExampleRepository();
