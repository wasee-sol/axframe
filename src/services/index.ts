import { MockUserRepository } from "repository/MockUserRepository";
import { MockCounselingRepository } from "../repository/MockCounselingRepository";

export const UserService = new MockUserRepository();
export const CounselingService = new MockCounselingRepository();
