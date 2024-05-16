import { BasicRest } from "../basic-rest";

import type { AxiosInstance } from "axios";
// import type { Advisor, AdvisorList, Registered } from './types'

export class MentorRest extends BasicRest {
  public constructor(endpoint: AxiosInstance) {
    super(endpoint);
  }

  public mentors() {
    return this.getRequest("/mentors/");
  }
}
